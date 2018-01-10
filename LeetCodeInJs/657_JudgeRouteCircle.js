/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var act = 'RLUD'
    var op = [0,0,0,0];
    for(var i = 0; i < moves.length; i++){
        op[act.indexOf(moves[i])]++;
    }
    return op[0] == op[1] && op[2] == op[3];
};