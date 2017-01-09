import { RECEIVE_ROUTE } from '../constants'

export default function receiveRoute(activity, series) {
    if (!series) {
        return {
            type: RECEIVE_ROUTE
        }
    }

    const latlngSeries = series.find(element => element.type==='latlng')
    const altitudeSeries = series.find(element => element.type==='altitude')

    const route = []
    for (let seriesIndex=0; seriesIndex < latlngSeries.data.length; seriesIndex++) {
        const latitude = latlngSeries.data[seriesIndex][0]
        const longitude = latlngSeries.data[seriesIndex][1]
        const altitude = altitudeSeries.data[seriesIndex]

        route.push({
            latitude: latitude,
            longitude: longitude,
            altitude: altitude
        })
    }
    activity.route = route

    return {
        type: RECEIVE_ROUTE,
        activity: activity
    }
}
