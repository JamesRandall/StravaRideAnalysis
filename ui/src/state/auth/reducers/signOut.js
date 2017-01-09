import { getDefaultAuthState } from '../../defaultStateProviders'

export default function signOut(state, action) {
    window.sessionStorage.removeItem('auth')
    return getDefaultAuthState()
}
