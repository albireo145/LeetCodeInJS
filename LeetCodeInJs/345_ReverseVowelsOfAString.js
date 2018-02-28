/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var isVowels = function(letter){
        for(var el of vowels){
            if(letter == el) return true;
        }
        return false;
    }
    var str = s.split('');
    var left = -1, right = s.length;
    while(left < right){
        while(++left < str.length && !isVowels(str[left]));
        while(--right > -1 && !isVowels(str[right]));
        if(left < right){
            var temp = str[left];
            str.splice(left, 1, str[right]);
            str.splice(right, 1, temp);
        }
    }
    return str.join('');
};