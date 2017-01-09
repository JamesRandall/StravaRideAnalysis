import updateDashboardPageNumber from './updateDashboardPageNumber'
import { UPDATE_DASHBOARD_PAGE_NUMBER } from '../constants'

describe('dashboard page number', () => {
    it('increments', () => {
        const existingState = { page: 0}
        const result = updateDashboardPageNumber(existingState, { type: UPDATE_DASHBOARD_PAGE_NUMBER, delta: 1 })
        expect(existingState.page).toBe(0)
        expect(result.page).toBe(1)
    })
    it('decrements', () => {
        const existingState = { page: 4}
        const result = updateDashboardPageNumber(existingState, { type: UPDATE_DASHBOARD_PAGE_NUMBER, delta: -2 })
        expect(existingState.page).toBe(4)
        expect(result.page).toBe(2)
    })
})
