import dataRequest from './dataRequest'
import { DATA_REQUEST } from '../constants'

describe('sets http in progress state', () => {
    it('sets to true', () => {
        const existingState = {isHttpRequestInProgress: false}
        const result = dataRequest(existingState, { type: DATA_REQUEST, inProgress: true})
        expect(existingState.isHttpRequestInProgress).toBe(false)
        expect(result.isHttpRequestInProgress).toBe(true)
    })
    it('sets to false', () => {
        const existingState = {isHttpRequestInProgress: true}
        const result = dataRequest(existingState, { type: DATA_REQUEST, inProgress: false})
        expect(existingState.isHttpRequestInProgress).toBe(true)
        expect(result.isHttpRequestInProgress).toBe(false)
    })
})