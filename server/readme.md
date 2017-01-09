# Strava API Proxy (CORS Enabled)

For the original source see (https://github.com/JamesRandall/StravaAPIProxy)[https://github.com/JamesRandall/StravaAPIProxy]

This minimal NodeJS server provides a CORS enabled proxy for the Strava API and a wrapper for the token translation required during Strava's OAuth login process.

## Getting Started

Getting started is simple.

1. Open app.js and set the stravaClientId and stravaClientSecret constants to the values provided by Strava for your application though see the note below for deploying in production.
2. Install the required npm package: npm install
3. Run it: npm start
4. By default it will attach to port 3100 so in a browser just navigate to http://localhost:3100 to ensure its running

If you use Visual Studio Code I've included a launch.json file so you can just hit F5 (after installing npm dependencies) to run and debug.

If you're deploying this into a production environment the server can optionally read the client ID and secret from environment variables called stravaClientId and stravaClientSecret. If you're deploying into Azure you should set these in the app settings area of the portal.

## Token translation

To translate a token initiate a POST request to the /tokenexchange endpoint and provide the access code recieved from Strava during the OAuth process in the body named token. If you're using the JavaScript fetch API this might look like this:

    function translateToken(temporaryToken) {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify({
                token: temporaryToken
            })
        }
        return fetch('http://localhost:3100/tokenexchange', options)
            .then(response => response.json())
            .then(json => {
                console.log(json.access_token)                
            })
    }

## Strava API calls

The Strava API is proxied off the path 'strava' so for example where the Strava API documentation for [getting a list of Activities](https://strava.github.io/api/v3/activities/#get-activities) uses the following:

    curl -G https://www.strava.com/api/v3/athlete/activities \
    -H "Authorization: Bearer 83ebeabdec09f6670863766f792ead24d61fe3f9"
    -d per_page=1

With the proxied API you would use

    curl -G http://localhost:3100/strava/api/v3/athlete/activities \
    -H "Authorization: Bearer 83ebeabdec09f6670863766f792ead24d61fe3f9"
    -d per_page=1

Again if you were using the fetch API from JavaScript it might look something like this:

    function fetchActivies() {
        const myTranslatedToken = getMyTranslatedToken() // the token received in the earlier example        
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + myTranslatedToken
            },
            mode: 'cors',
            cache: 'no-cache'
        }
        return fetch('http://localhost:3100/strava/api/v3/athlete/activities', options)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

## Questions and Issues

Please log them in GitHub issues. I've mostly made GET requests to date so their may be some lurking bugs.

## Credits

As ever this code leans on many previous contributions however I made particular use of:

* [NodeJS](https://nodejs.org)
* [ExpressJS](http://expressjs.com/)
* [express-http-proxy](https://github.com/villadora/express-http-proxy)
