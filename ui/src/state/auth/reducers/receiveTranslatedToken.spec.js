import receiveTranslatedToken from './receiveTranslatedToken'
import storageMock from '../../../testing/storageMock'
import { RECEIVE_TRANSLATED_TOKEN } from '../constants'

it('receiveTranslatedToken sets auth state from action', () => {
    window.sessionStorage = storageMock()
    const authProperties = {
        accessToken: 'fakeaccesstoken',
        username: 'testuser',
        athleteId: 1
    }
    const existingState = {}
    const result = receiveTranslatedToken(existingState, {
        type: RECEIVE_TRANSLATED_TOKEN,
        ...authProperties
    })

    expect(existingState.accessToken).toBeUndefined()
    expect(result.accessToken).toBe('fakeaccesstoken')
    expect(result.username).toBe('testuser')
    expect(result.athleteId).toBe(1)
    expect(window.sessionStorage.getItem('auth')).toBe(JSON.stringify(authProperties))
})
