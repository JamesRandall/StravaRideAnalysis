import { RECEIVE_ACTIVITIES } from '../constants'
import mapStravaActivity from '../../../model/mapping/activity'

export default function receiveActivities(activities, replace, isDemoData) {
    return {
        type: RECEIVE_ACTIVITIES,
        // we map the strava model to a local model so that if strava update their API I don't have to revisit
        // every part of the UI
        activities: activities.map(mapStravaActivity),
        replace: replace,
        isDemoData: isDemoData
    }
}
