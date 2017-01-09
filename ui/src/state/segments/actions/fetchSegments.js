import receiveSegments from './receiveSegments'
import { baseUrl } from '../../constants'
import dataRequest from '../../common/actions/dataRequest'

export default function fetchSegments(activityId) {
    return (dispatch, getState) => {
        const state = getState()
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + state.auth.accessToken
            },
            mode: 'cors',
            cache: 'no-cache'
        }
        
        const existingActivity = state.activities.activityDetails[activityId]
        if (existingActivity && existingActivity.segmentEfforts) {
            return new Promise(resolve => resolve(existingActivity))
        }

        dispatch(dataRequest())
        return fetch(baseUrl + 'strava/api/v3/activities/' + activityId, options)
            .then(response => response.json())
            .then(json => {
                dispatch(dataRequest(false))
                return dispatch(receiveSegments(json)).activity
            })
    }
}
