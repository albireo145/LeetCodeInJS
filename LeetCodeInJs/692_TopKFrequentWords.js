/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var map = new Map();
    var result = [];
    for(var i = 0; i < words.length; i++){
        if(map.get(words[i]) != null){
            map.set(words[i], map.get(words[i]) + 1);
        }else{
            map.set(words[i], 1);
        }
    }
    for(var i = 0;i < k; i ++){
        var max = 0;
        map.forEach(function (value, key, map) {
            if(value > max){
                max = value;
                result[i] = key;
            }else if(value == max){
                var temp = 0;
                while(key[temp] == result[i][temp]) temp++;
                if(key[temp] == null || result[i][temp] !=null && key[temp].charCodeAt() < result[i][temp].charCodeAt())
                result[i] = key;
            }
        });
        map.delete(result[i])
    }
    return result;
};