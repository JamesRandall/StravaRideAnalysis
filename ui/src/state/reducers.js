import { combineReducers } from 'redux'
import { getDefaultActivitiesState, getDefaultUiState, getDefaultDashboardState } from './defaultStateProviders'
import { SIGN_OUT_LOCAL } from './auth/constants'

import segmentReducers from './segments/reducers'
import activitiesReducers from './activities/reducers'
import commonReducers from './common/reducers'
import routeReducers from './routes/reducers'
import authReducers from './auth/reducers'
import dashboardReducers from './dashboard/reducers'

const auth = {
    ...authReducers
}

const ui = {
    ...commonReducers,
    [SIGN_OUT_LOCAL]: getDefaultUiState
}

const activities = {
    ...segmentReducers,
    ...activitiesReducers,
    ...routeReducers,
    SIGN_OUT_LOCAL: getDefaultActivitiesState
}

const dashboard = {
    ...dashboardReducers,
    SIGN_OUT_LOCAL: getDefaultDashboardState
}

function getReducers(reducers) {
    return (state = {}, action) => {
        const reducerFunc = reducers[action.type]
        if (reducerFunc) {
            return reducerFunc(state, action)
        }
        return state
    }
}

const applicationReducers = combineReducers({
    auth: getReducers(auth),
    ui: getReducers(ui),
    activities: getReducers(activities),
    dashboard: getReducers(dashboard)
})

export default applicationReducers