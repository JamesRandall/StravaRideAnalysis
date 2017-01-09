import { RECEIVE_BEST_EFFORTS} from '../constants'

export default function receiveBestEfforts(activityId, efforts) {
    return {
        type: RECEIVE_BEST_EFFORTS,
        efforts: efforts,
        activityId: activityId
    }
}
