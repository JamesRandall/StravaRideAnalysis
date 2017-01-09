import { UPDATE_DASHBOARD_PAGE_NUMBER } from '../constants'

export default function updateSummaryPage(delta) {
    return {
        type: UPDATE_DASHBOARD_PAGE_NUMBER,
        delta: delta
    }
}

