const express = require('express')
const router = express.Router()

/* POST - Strava token exchange */
router.get('/', (req, res) => {
    const page = req.query.page
    
    res.send('Hello World')
})

module.exports = router