import mapStravaActivity from '../../../model/mapping/activity'
import cloneActivity from '../../../model/clone/activity'
import { baseUrl } from '../../constants'
import receiveRoute from './receiveRoute'
import dataRequest from '../../common/actions/dataRequest'

export default function fetchRoute(activityId) {
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
        if (existingActivity && existingActivity.route) {
            dispatch(receiveRoute(existingActivity))
            return new Promise(resolve => resolve())
        }

        dispatch(dataRequest())
        return fetch(baseUrl + 'strava/api/v3/activities/' + activityId + '/streams/latlng,altitude', options)
            .then(response => response.json())
            .then(json => {
                let activity = state.activities.summaries.find(element => element.id === activityId)
                if (!activity) {
                    return fetch(baseUrl + 'strava/api/v3/activities/' + activityId, options)
                        .then(response => response.json())
                        .then(activityJson => {
                            activity = mapStravaActivity(activityJson)
                            dispatch(dataRequest(false))
                            return dispatch(receiveRoute(activity, json))
                        })
                }
                else {
                    dispatch(dataRequest(false))
                    return dispatch(receiveRoute(cloneActivity(activity), json))   
                }
            })
    }
}
