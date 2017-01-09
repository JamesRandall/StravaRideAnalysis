import React from 'react'
import { Button } from 'react-bootstrap'

export default ({signInAsGuest, router}) => {
    return  <Button bsSize="large" block onClick={() => signInAsGuest(router)}>Guest Demo Access</Button>
}
