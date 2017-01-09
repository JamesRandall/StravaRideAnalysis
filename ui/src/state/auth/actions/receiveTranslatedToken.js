import { RECEIVE_TRANSLATED_TOKEN } from '../constants'

export default function receiveTranslatedToken(accessToken, username, athleteId) {
    return {
        type: RECEIVE_TRANSLATED_TOKEN,
        accessToken: accessToken,
        username: username,
        athleteId: athleteId
    }
}