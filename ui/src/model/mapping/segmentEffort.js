export default function mapSegmentEffort(s) {
    return {
        segmentEffortId: s.id,
        segmentId: s.segment.id,
        name: s.segment.name,
        komRank: s.kom_rank,
        prRank: s.pr_rank,
        elapsedTime: s.elapsed_time,
        movingTime: s.moving_time
    }
}