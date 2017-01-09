var express = require('express')
var router = express.Router()
let clientId = ''


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Strava API Proxy', clientId: clientId })
})

module.exports = function(configClientId) {
    clientId = configClientId
    return router
}
