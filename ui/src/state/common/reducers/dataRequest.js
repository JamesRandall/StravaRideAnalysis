export default function dataRequest(state, action) {
    return { ...state, isHttpRequestInProgress: action.inProgress }
}
