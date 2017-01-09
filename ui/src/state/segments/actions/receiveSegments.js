import { RECEIVE_SEGMENTS } from '../constants'
import mapStravaActivity from '../../../model/mapping/activity'

export default function receiveSegments(activity) {
    return {
        type: RECEIVE_SEGMENTS,
        activity: mapStravaActivity(activity)
    }
}
