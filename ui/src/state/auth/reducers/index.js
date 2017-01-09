import { RECEIVE_TRANSLATED_TOKEN, SIGN_OUT_LOCAL } from '../constants'
import receiveTranslatedToken from './receiveTranslatedToken'
import signOut from './signOut'

export default {
    [RECEIVE_TRANSLATED_TOKEN]: receiveTranslatedToken,
    [SIGN_OUT_LOCAL]: signOut
}
