export default function receiveRoute (state, action) {
    if (!action.activity) {
        return state
    }
    let activity = state.activityDetails[action.activity.id]
    if (activity === undefined) {
        activity = action.activity
        return {...state, activityDetails: { ...state.activityDetails, [activity.id]: activity } }
    }
    
    const route = action.activity.route
    return { ...state, activityDetails: {...state.activityDetails, [activity.id]: { ...state.activityDetails[activity.id], route: route } } }
}
