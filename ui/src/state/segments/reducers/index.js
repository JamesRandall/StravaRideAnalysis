import { RECEIVE_SEGMENTS, RECEIVE_BEST_EFFORTS } from '../constants'
import receiveBestEfforts from './receiveBestEfforts'
import receiveSegments from './receiveSegments'

export default {
    [RECEIVE_SEGMENTS]: receiveSegments,
    [RECEIVE_BEST_EFFORTS]: receiveBestEfforts
}