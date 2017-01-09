export default function receiveTranslatedToken(state, action) {
    const newState = {
        ...state,
        accessToken: action.accessToken,
        username: action.username,
        athleteId: action.athleteId * 1
    }
    
    window.sessionStorage.setItem('auth', JSON.stringify(newState))
    return newState
}
