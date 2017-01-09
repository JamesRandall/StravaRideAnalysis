export const getDefaultAuthState = () => {
    let auth = { }
    const persistedAuthString = window.sessionStorage.getItem('auth')
    if (persistedAuthString && persistedAuthString.length > 0) {
        auth = JSON.parse(persistedAuthString)
    }
    return auth
}

export const getDefaultUiState = () => {
    return {
        isHttpRequestInProgress: false
    }
}

export const getDefaultActivitiesState = () => {
    return {
        summaries: [],
            activityDetails: { },
            bestSegmentEfforts: { },
            currentActivityId: null,
            weeklySummary: {
            monday: 0,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0,
            sunday: 0
        },
            monthlySummary: {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0
        }
    }
}

export const getDefaultDashboardState = () => {
    return {
        pageSize: 10,
        page: 0
    }
}

export const getDefaultState = () => {
    return {
        auth: getDefaultAuthState(),
        ui: getDefaultUiState(),
        activities: getDefaultActivitiesState(),
        dashboard: getDefaultDashboardState()
    }
}