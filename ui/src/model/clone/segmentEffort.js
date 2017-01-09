export default function cloneSegmentEffort(s) {
    const segmentEffort = JSON.parse(JSON.stringify(s))
    return segmentEffort
}
