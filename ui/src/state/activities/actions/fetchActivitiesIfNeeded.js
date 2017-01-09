import asyncWhile from '../../../core/asyncWhile'
import { baseUrl } from '../../constants'
import receiveActivities from './receiveActivities'
import dataRequest from '../../common/actions/dataRequest'

function fetchActivies(replaceExisting) {
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
        dispatch(dataRequest())

        let page = 1
        let shouldContinue = true
        let collection = []
        const startOfYear = new Date(new Date().getFullYear(), 1, 1)

        var fetchPage = () => {
            return fetch(baseUrl + 'strava/api/v3/athlete/activities?page=' + page, options)
                .then(response => response.json())
                .then(json => {
                    collection = collection.concat(json)
                    const minDiff = Math.min(...(json.map(a => new Date(a.start_date) - startOfYear)))
                    page++
                    shouldContinue = json.length > 0 && minDiff > 0
                })
        }

        return asyncWhile(() => shouldContinue, fetchPage).then(() => {
             dispatch(receiveActivities(collection, replaceExisting, state.auth.accessToken === 'GUEST'))
             dispatch(dataRequest(false))
        })
    }
}

export default function fetchActivitiesIfNeeded() {
    return (dispatch, getState) => {
        if (getState().activities.summaries.length === 0) {
            return dispatch(fetchActivies(true))
        }
        else {
            return Promise.resolve()
        }
    } 
}