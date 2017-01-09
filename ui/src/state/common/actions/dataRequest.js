import { DATA_REQUEST } from '../constants'

export default function dataRequest(inProgress = true) {
    return {
        type: DATA_REQUEST,
        inProgress: inProgress
    }
}
