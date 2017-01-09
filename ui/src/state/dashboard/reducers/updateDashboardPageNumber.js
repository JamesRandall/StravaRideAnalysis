export default function updateDashboardPageNumber(state, action) {
    return { ...state, page: state.page + action.delta }
}
