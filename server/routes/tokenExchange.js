const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const configuration = {
    clientId: null,
    clientSecret: null
}

/* POST - Strava token exchange */
router.post('/', (req, res) => {
    const token = req.body.token
    
    const options = {
        method: 'POST',
        body: JSON.stringify({
            client_id: configuration.clientId,
            client_secret: configuration.clientSecret,
            code: token
        }),
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch('https://www.strava.com/oauth/token', options).then(serviceRequest => {
        serviceRequest.text().then(txt => {
            const result = JSON.parse(txt)
            res.send(result)
        }, () => {
            res.status(500).send('Error during token exchange')
        }).catch(() => {
            res.status(500).send('Error during token exchange')
        })
    })
})

module.exports = function(clientId, clientSecret) {
    if (!clientId || !clientSecret) {
        throw 'A Strava client ID and secret must be supplied'
    }
    configuration.clientId = clientId
    configuration.clientSecret = clientSecret
    return router
}
