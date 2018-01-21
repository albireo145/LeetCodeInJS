/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var left = 0, right = letters.length;
    var tagCode = target.charCodeAt();
    while(left < right){
        var mid = Math.floor((left + right) / 2);
        if(letters[mid].charCodeAt() > tagCode){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return letters[left % letters.length];
};