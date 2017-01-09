export default function asyncWhile(condition, action, ctx) {
    var whilst = function(data) {
        return condition.call(ctx, data) ? Promise.resolve(action.call(ctx, data)).then(whilst) : data
    }
    return whilst()
}