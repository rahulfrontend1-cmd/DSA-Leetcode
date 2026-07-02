/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    for(let s of strs) {
        const sortedS = s.split('').sort().join('');
        if(!obj[sortedS]) {
            obj[sortedS] = []
        }
        obj[sortedS].push(s)
    }
    return Object.values(obj)
};