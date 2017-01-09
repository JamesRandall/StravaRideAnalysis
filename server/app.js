const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const proxy = require('express-http-proxy')
const tokenExchange = require('./routes/tokenExchange')
const home = require('./routes/index')
const activities = require('./routes/activities')
const fs = require('fs')
const app = express()

const stravaClientId = process.env.stravaClientId || 'yourid' // for example '12345'
const stravaClientSecret = process.env.stravaClientSecret || 'yoursecret' // for example '9876fe547238c1324bd...'
const corsWhitelist = process.env.corsWhitelist ? process.env.corsWhitelist.split(',') : undefined
const saveDemoData = process.env.saveDemoData === 'true'
const getFilenameFromUrl = (url) => path.join(__dirname, '/demodata/' + url.replace(/[\/\?=]/g, '_').substring(1) + '.json')

const proxyConfiguration = {
    decorateRequest: function(proxyReq, originalReq) {
        for(const headerName in originalReq.headers) {
            // exclude the host header to prevent certificate chain issues
            if (headerName.toLowerCase() !== 'host') {
                proxyReq.headers[headerName] = originalReq.headers[headerName]
            }            
        }
    },
    filter: function(req, res) {
        // don't pass on cors handshaking
        if (req.method === 'OPTIONS') {
            return false
        }
        const authHeader = req.headers['authorization']
        if (authHeader) {
            if (authHeader !== 'Bearer GUEST') {
                return true
            }
            return false
        }
        return true
    },
    https: true
}

if (saveDemoData) {
    proxyConfiguration.intercept = (rsp, data, req, res, callback) => {
        const filestring = data.toString('utf8');
        const filename = getFilenameFromUrl(req.originalUrl)
        fs.writeFileSync(filename, filestring, { encoding: 'utf8'})
        callback(null, data)
    }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// configuration
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    origin: (origin,callback) => {
        const isWhitelisted = origin === undefined || !corsWhitelist || corsWhitelist.indexOf(origin) !== -1
        callback(isWhitelisted ? null : 'Bad Request', isWhitelisted)
    }
}))

// routes
app.use('/', home(stravaClientId))
app.use('/tokenexchange', tokenExchange(stravaClientId, stravaClientSecret))
app.use('/strava', proxy('www.strava.com', proxyConfiguration))

// this serves up demo data if its not been found on a matching route above
app.use((req, res, next) => {
    const authHeader = req.headers['authorization']
    if (authHeader && authHeader === 'Bearer GUEST') {
        const filename = getFilenameFromUrl(req.url)
        res.sendFile(filename)
    }
    else {
        next()
    }
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res) => {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})


module.exports = app
