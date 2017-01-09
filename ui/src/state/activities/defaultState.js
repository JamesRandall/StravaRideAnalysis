export default function getDefaultState() {
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