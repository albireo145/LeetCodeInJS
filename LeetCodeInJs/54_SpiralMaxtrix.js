/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = [];
    while(matrix.length > 0){
        var firstrow = matrix.shift();
        for(var col = 0 ; col < firstrow.length; col++){
            res.push(firstrow[col]);
        }
        
        for(var row = 0; row < matrix.length; row++) {
            var el = matrix[row].pop();
            el != null && (res.push(el));
        }
        var lastrow = matrix.pop();
        if(lastrow == null || lastrow.length == 0) break;
        while(lastrow.length > 0)
            res.push(lastrow.pop());
        
        for(var row = matrix.length - 1; row >= 0; row--){
            var el = matrix[row].shift();
            el != null && (res.push(el));
        } 
    }
    return res;
};
// var spiralOrder = function(matrix) {
//     const result = []
    
//     while(matrix.length > 0) {
      
//       const firstRow = matrix.shift()
//       for(let i = 0; i < firstRow.length; i++) {
//         result.push(firstRow[i])
//       }
      
//       for(let i = 0; i < matrix.length; i++) {
//         const ele = matrix[i].pop()
//         if (ele) result.push(ele)
//       }
            
//       const lastRow = matrix[matrix.length - 1]
//       while(lastRow && lastRow.length > 0) {
//         result.push(lastRow.pop())
//       }
//       matrix.pop()
      
//       for(let i = matrix.length-1; i >= 0; i--) {
//         const ele = matrix[i].shift()
//         if (ele) result.push(ele)
//       }
//     }
    
//     return result;
// };