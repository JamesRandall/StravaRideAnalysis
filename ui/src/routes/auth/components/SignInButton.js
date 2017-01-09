import React from 'react'
import { Button } from 'react-bootstrap'

export default () => {
    const clientId = "12969"
    const redirectUri = process.env.NODE_ENV === 'production' ? 'https://rideanalysis.azurewebsites.net/tokenresponse' : "http://localhost:3000/tokenresponse"
    const authUri = "https://www.strava.com/oauth/authorize?client_id=" + clientId + "&response_type=code&redirect_uri=" + redirectUri + "&approval_prompt=auto";

    return  <Button bsSize="large" block href={authUri}>Sign In With Strava</Button>
}
