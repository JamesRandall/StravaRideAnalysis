import { baseUrl } from '../../constants'
import receiveTranslatedToken from './receiveTranslatedToken'
import dataRequest from '../../common/actions/dataRequest'

export default function translateAccessToken(temporaryToken) {
    return (dispatch, getState) => {
        dispatch(dataRequest())
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
        return fetch(baseUrl + 'tokenexchange', options)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveTranslatedToken(json.access_token, json.athlete.username, json.athlete.id))
                dispatch(dataRequest(false))
            })
    }
}