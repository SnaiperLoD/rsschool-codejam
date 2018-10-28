module.exports = function make(...arguments) {
    let res=[];
    function inner(...otherarguments) {
        if ( typeof otherarguments[0] !== 'function') {
            return res.reduce(otherarguments[0]);
        }
        res.push(...otherarguments);
        return inner;
    }
    return inner(...arguments);
}