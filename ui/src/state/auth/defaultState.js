export default function getDefaultAuthState {
    let auth = { }
    const persistedAuthString = window.sessionStorage.getItem('auth')
    if (persistedAuthString && persistedAuthString.length > 0) {
        auth = JSON.parse(persistedAuthString)
    }
    return auth
}
