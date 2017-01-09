export default function cloneActivity(a) {
    const activity = JSON.parse(JSON.stringify(a))
    activity.startDate = new Date(activity.startDate)
    return activity
}
