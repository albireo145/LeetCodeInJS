/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var dp = [];
    for(var i = 0; i < s.length; i++){
        dp.push(new Array());
    }
    for(var right = 0; right < s.length; right++){
        for(var left = 0; left < right + 1; left++){
            if(s[left] != s[right]){
                dp[left][right] = false; continue;
            } 
            dp[left][right] = right - left <= 1 || dp[left+1][right-1];
        }
    }
    var isPalindrome = function(str, left, right){
        return dp[left][right];
    };
    var res = [];
    var list = [];
    var dfs = function(str, pos){
        if(pos == str.length) res.push(Array.from(list));
        else{
            for(var i = pos; i < str.length; i++){
                if(isPalindrome(str,pos,i)){
                    list.push(str.slice(pos,i + 1));
                    arguments.callee(str, i + 1);
                    list.pop();
                }
            }
        }
    }    
    dfs(s, 0, list);
    return res;
};
// var partition = function(s) {
//     var Memo = [];
//     for(var i = 0; i < s.length; i++){
//         Memo.push(new Array());
//     }
//     var isPalindrome = function(str, left, right){
//         if(left == right) return true;
//         if(Memo[left][right] != null) return Memo[left][right];
//         while(left < right){
//             if(str[left] != str[right]){
//                 Memo[left][right] = false;
//                 return false; 
//             } 
//             left++;
//             right--;
//         }
//         Memo[left][right] = true;
//         return Memo[left][right];
//     };
//     var res = [];
//     var list = [];
//     var dfs = function(str, pos){
//         if(pos == str.length) res.push(Array.from(list));
//         else{
//             for(var i = pos; i < str.length; i++){
//                 if(isPalindrome(str,pos,i)){
//                     list.push(str.slice(pos,i + 1));
//                     arguments.callee(str, i + 1);
//                     list.pop();
//                 }
//             }
//         }
//     }    
//     dfs(s, 0, list);
//     return res;
// };


// var partition = function(s) {
//     var isPalindrome = function(str, left, right){
//         if(left == right) return true;
//         while(left < right){
//             if(str[left++] != str[right--]) return false; 
//         }
//         return true;
//     };
//     var res = [];
//     var list = [];
//     var dfs = function(str, pos){
//         if(pos == str.length) res.push(Array.from(list));
//         else{
//             for(var i = pos; i < str.length; i++){
//                 if(isPalindrome(str,pos,i)){
//                     list.push(str.slice(pos,i + 1));
//                     arguments.callee(str, i + 1);
//                     list.pop();
//                 }
//             }
//         }
//     }    
//     dfs(s, 0, list);
//     return res;
// };
