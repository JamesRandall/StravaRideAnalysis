export default function receiveSegments(state, action) {
    let activity = state.activityDetails[action.activity.id]
    if (activity === undefined) {
        activity = action.activity
        return { ...state, activityDetails: { ...state.activityDetails, [activity.id]: activity } }
    }

    return { ...state, activityDetails: { ...state.activityDetails, [activity.id]: { ...state.activityDetails[activity.id], segmentEfforts: action.activity.segmentEfforts } } }
}
