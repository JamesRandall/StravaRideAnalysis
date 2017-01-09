jasmine.getEnv().beforeEach(function () {
    expect.extend({
        toMatchArray(actual, expected, comparator) {
            if (actual.length !== expected.length) return false
            if (!comparator) comparator = function(val1, val2) {
                return val1 === val2
            }
            var pass = true
            for (var index=0; index < actual.length; index++) {
                if (!comparator(actual[index], expected[index])) {
                    pass = false
                    break
                }
            }
            const message = () => `arrays did ${pass ? ' ' : 'not '}match`
            return { pass, message }
        }
    }) 
})
