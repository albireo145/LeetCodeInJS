/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var res = [];
    var list = new Array(n);
    var str = '';
    for(var i = 0; i < n; i++) str += '.';
    list.fill(str);
    var helper = function(n, list, row){
        if(row == n){
            res.push(list.slice(0));
            return;
        }
        for(var i = 0; i < n; i++){
            if(isValid(n, list, row, i)){
                list[row] = list[row].slice(0, i) + 'Q' + list[row].slice(i + 1, n);
                arguments.callee(n, list, row + 1, i);
                list[row] = str;
            }
        }
    }
    var isValid = function(n, list, row, col){
        // valid col；
        for(var i = 0; i < row; i++){
            if(list[i][col] == 'Q') return false;
        }
        // valid 45deg
        for(var i = row - 1, j = col - 1; i > -1 && j > - 1; i--, j--){
            if(list[i][j] == 'Q') return false;
        }
        // valid 135deg
        for(var i = row - 1, j = col + 1; i > - 1 && j < n; i--, j++){
            if(list[i][j] == 'Q') return false;
        }
        return true;
    };
    helper(n, list, 0);
    return res;
};