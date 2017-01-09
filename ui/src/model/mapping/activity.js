import mapSegmentEffort from './segmentEffort'

export default function mapStravaActivity(a) {
    return {
        id: a.id,
        name: a.name,
        startDate: new Date(a.start_date),
        distance: a.distance,
        type: a.type,
        trainer: a.trainer ? 'Yes' : 'No',
        averageSpeed: a.average_speed*3.6,
        maxSpeed: a.max_speed*3.6,
        elapsedTime: a.elapsed_time,
        hasSegments: a.start_latlng && !a.trainer,
        segmentEfforts : a.segment_efforts ? a.segment_efforts.map(mapSegmentEffort) : undefined
    }
}
