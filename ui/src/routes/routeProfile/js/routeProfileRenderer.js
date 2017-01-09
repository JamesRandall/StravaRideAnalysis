// I contemplated using one of the the reactjs binding libraries however in this instance
// decided that I am likely to use this elsewhere and so have kept it pretty portable
export default function attachRenderer(container, gpsPoints) {
    const THREE = window.THREE
    // haversine formula calcuates the distance in km between two points of lon,lat
    function haversineDistanceKm(lon1,lat1,lon2,lat2) {
        function toRad(deg) {
            return deg * (Math.PI/180)
        }
        var earthsRadius = 6371
        var dLat = toRad(lat2-lat1)
        var dLon = toRad(lon2-lon1) 
        var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
             
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        var d = earthsRadius * c
        return d
    }

    // renders between two points using a quadrilateral formed of two triangles. this leads
    // to a smoother view than planes
    function drawRouteSegmentUsingQuads(scene, fromX, fromY, fromZ, toX, toY, toZ, gradient) {
        const geo1 = new THREE.Geometry()
        const v1 = new THREE.Vector3(fromX, fromY, fromZ)
        const v2 = new THREE.Vector3(fromX, 0, fromZ)
        const v3 = new THREE.Vector3(toX, 0, toZ)

        geo1.vertices.push(v1,v2,v3)
        geo1.faces.push(new THREE.Face3(0, 1, 2))
        geo1.computeFaceNormals()
        const material = new THREE.MeshPhongMaterial({ color: gradient > 8 ? 0xff0000 : gradient > 4 ? 0xff9900 : 0x00ff00, side: THREE.DoubleSide })
        const mesh = new THREE.Mesh(geo1, material)
        scene.add(mesh)

        const geo2 = new THREE.Geometry()
        const v4 = new THREE.Vector3(toX, 0, toZ)
        const v5 = new THREE.Vector3(toX, toY, toZ)
        const v6 = new THREE.Vector3(fromX, fromY, fromZ)

        geo2.vertices.push(v4,v5,v6)
        geo2.faces.push(new THREE.Face3(0, 1, 2))
        geo2.computeFaceNormals()
        const mesh2 = new THREE.Mesh(geo2, material)
        scene.add(mesh2)
    }
    // renders an array of GPS points doing a best fit into the scene
    function renderProfile(scene, profileXZExtent, profileHeight) {
        const minLatitude = Math.min(...(gpsPoints.map(x => x.latitude)))
        const maxLatitude = Math.max(...(gpsPoints.map(x => x.latitude)))
        const minLongitude = Math.min(...(gpsPoints.map(x => x.longitude)))
        const maxLongitude = Math.max(...(gpsPoints.map(x => x.longitude)))
        const minAltitude = Math.min(...(gpsPoints.map(x => x.altitude)))
        const maxAltitude = Math.max(...(gpsPoints.map(x => x.altitude)))
        const latitudeDelta = maxLatitude - minLatitude
        const longitudeDelta = maxLongitude - minLongitude
        const xzScale = profileXZExtent / (latitudeDelta > longitudeDelta ? latitudeDelta : longitudeDelta)
        const yScale = profileHeight / (Math.abs(maxAltitude) > Math.abs(minAltitude) ? Math.abs(maxAltitude) : Math.abs(minAltitude))  
        let previousX, previousY, previousZ, previousLon, previousLat, previousAlt

        gpsPoints.forEach((datapoint,index) => {
            const x = (datapoint.longitude - minLongitude) * xzScale - longitudeDelta/2*xzScale 
            const z = (datapoint.latitude - minLatitude) * xzScale - latitudeDelta/2*xzScale 
            const y = datapoint.altitude * yScale

            if (previousX !== undefined) {
                // we don't test Y being unchanged thanks to the noise that can creep into GPS data. I've seen a few routes now
                // which show know lon,lat change but altitude change despite being on a bike and not really able to hover
                if (previousX !== x || previousZ !== z || previousY !== y) {
                    const distanceMeters = haversineDistanceKm(datapoint.longitude, datapoint.latitude, previousLon, previousLat) * 1000
                    const altitudeDeltaMeters = Math.abs(datapoint.altitude - previousAlt)
                    const gradient = (altitudeDeltaMeters / distanceMeters) * 100
                    drawRouteSegmentUsingQuads(scene, previousX, previousY, previousZ, x, y, z, gradient)
                }
            }

            previousX = x
            previousY = y
            previousZ = z
            previousLon = datapoint.longitude
            previousLat = datapoint.latitude
            previousAlt = datapoint.altitude
        })
    }
    function addLighting(scene) {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
        const spotLight1 = new THREE.SpotLight(0xffffff, 1)
        spotLight1.position.set(15, 40, 35)
        spotLight1.castShadow = true
        spotLight1.angle = Math.PI / 4
        spotLight1.penumbra = 0.05
        spotLight1.decay = 2
        spotLight1.distance = 200
        spotLight1.shadow.mapSize.width = 1024
        spotLight1.shadow.mapSize.height = 1024
        spotLight1.shadow.camera.near = 1
        spotLight1.shadow.camera.far = 200

        const spotLight2 = new THREE.SpotLight(0xffffff, 1)
        spotLight2.position.set(-15, -40, -35)
        spotLight2.castShadow = true
        spotLight2.angle = Math.PI / 4
        spotLight2.penumbra = 0.05
        spotLight2.decay = 2
        spotLight2.distance = 200
        spotLight2.shadow.mapSize.width = 1024
        spotLight2.shadow.mapSize.height = 1024
        spotLight2.shadow.camera.near = 1
        spotLight2.shadow.camera.far = 200

        scene.add(spotLight1)
        scene.add(spotLight2)
        scene.add(ambientLight)
    }

    if (!container) return

    const profileXZExtent = 9
    const profileHeight = 1
    const floorBoxWidth = profileXZExtent + 1
    const floorBoxDepth = profileXZExtent + 1
    const width = container.clientWidth
    const height = Math.round(window.innerHeight * 0.8)
    const renderer = new THREE.WebGLRenderer({antialias: true})
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, width / height, 1, 1000 )
    const controls = new THREE.OrbitControls(camera, renderer.domElement)

    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
    container.appendChild(renderer.domElement)
    renderer.gammaInput = true
    renderer.gammaOutput = true
    scene.background = new THREE.Color(0xf9f9f9)

    const sealevelGeometry = new THREE.PlaneGeometry(floorBoxWidth, floorBoxDepth)
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    const sealevel = new THREE.Mesh(sealevelGeometry, material)
    sealevel.position.z = 0
    sealevel.rotation.x = Math.PI / 2

    // set up the basic scene
    addLighting(scene)
    scene.add(sealevel)
    renderProfile(scene, profileXZExtent, profileHeight)

    camera.position.z = 14
    camera.position.x = -2
    camera.position.y = 8
    camera.lookAt(new THREE.Vector3(0,0,0))

    controls.minDistance = 2
    controls.maxDistance = 500
    controls.enablePan = false
    controls.update()

    let detached = false
    function renderLoop() {
        if (detached) return
        window.setTimeout(() => requestAnimationFrame(renderLoop), 1000/60)
        renderer.render(scene, camera)
    }
    renderLoop()

    const result = {
        detach: function() {
            window.removeEventListener('resize', onWindowResize)
            renderer.domElement.parentElement.removeChild(renderer.domElement)
            detached = true
        }
    }

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize(){
        const width = container.clientWidth
        const height = Math.round(window.innerHeight * 0.8)

        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
    }
    
    return result
}