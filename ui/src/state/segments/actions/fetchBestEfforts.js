import cloneSegmentEffort  from '../../../model/clone/segmentEffort'
import mapSegmentEffort from '../../../model/mapping/segmentEffort'
import { baseUrl } from '../../constants'
import receiveBestEfforts from './receiveBestEfforts'
import dataRequest from '../../common/actions/dataRequest'

export default function fetchBestEfforts(activityId) {
    return (dispatch, getState) => {
        dispatch(dataRequest())

        const state = getState()
        const existingActivity = state.activities.activityDetails[activityId]
        const bestEfforts = []
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + state.auth.accessToken
            },
            mode: 'cors',
            cache: 'no-cache'
        }
        
        const fetchEffort = (si) => {
            const segmentId = existingActivity.segmentEfforts[si].segmentId
            const existingBestEffort = state.activities.bestSegmentEfforts[segmentId]
            if (existingBestEffort) {
                return new Promise(function(resolve) {
                    bestEfforts[si]=existingBestEffort
                    resolve()
                })
            }
            return fetch(baseUrl + 'strava/api/v3/segments/' + segmentId + '/all_efforts?athlete_id=' + state.auth.athleteId, options)
                .then(response => {
                    if (response.ok) {
                        return response.json().then(json => {
                            bestEfforts[si]=mapSegmentEffort(json[0])
                        })
                    }
                    else {
                        bestEfforts[si]=cloneSegmentEffort(existingActivity.segmentEfforts[si])
                    }
                })
        }

        const promises = []
        for (let segmentEffortIndex = 0; segmentEffortIndex < existingActivity.segmentEfforts.length; segmentEffortIndex++) {
            promises.push(fetchEffort(segmentEffortIndex))
        }

        return Promise.all(promises).then(() => {
            dispatch(dataRequest(false))
            return dispatch(receiveBestEfforts(activityId, bestEfforts))
        })
    }
}