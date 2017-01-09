import { SIGN_OUT_LOCAL } from '../constants'
import signOut from './signOut'
import storageMock from '../../../testing/storageMock'

it('signOut clears the auth state', () => {
    const existingState = {
        accessToken: 'fakeaccesstoken',
        username: 'testuser',
        athleteId: 1
    }
    window.sessionStorage = storageMock()
    window.sessionStorage.setItem('auth', 'some state')
    
    const result = signOut(existingState, { type: SIGN_OUT_LOCAL})
    
    expect(existingState.accessToken).toBeDefined()
    expect(result.accessToken).toBeUndefined()
    expect(result.username).toBeUndefined()
    expect(result.athleteId).toBeUndefined()
    expect(window.sessionStorage.getItem('auth')).toBeNull()
})