const make_candidate = function(type = "base", value = "0", state = "inactive") {
    return {type: type, value:value, state:state}
}

const make_candidates = function() {
    function build_candidates(set) {
        const types = ["base", "high", "mighty"]
        const states = ["inactive", "active", "suspended", "removed"]
        let output = []
        console.log(set)
        set.forEach(el => {
            const type = types[el];
            const s = states[Math.floor(4*Math.random())]
            const v = Math.floor(1000*Math.random())
            output.push(make_candidate(type, v, s));
        });
        return output
    }
    const validCandidates = [0,0,0,0,0,0,0,0,0,1]
    validSet = build_candidates(validCandidates)
    return(validSet);
}

module.exports = { make_candidates, make_candidate };