export default function receiveBestEfforts(state, action) {
    const updateEfforts = {

    }
    action.efforts.forEach(e => {
        updateEfforts[e.segmentId] = e
    })

    return {
        ...state,
        bestSegmentEfforts: {...state.bestSegmentEfforts, ...updateEfforts },
        activityDetails: {...state.activityDetails, [action.activityId]: { ...state.activityDetails[action.activityId], bestEfforts: action.efforts } }
    }
}
