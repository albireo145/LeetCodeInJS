/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var devide = path.split(/\//ig);
    var res = [];
    for(path of devide){
        switch(path){
            case '':
                break;
            case '.':
                break;
            case '..':
                res.pop();
                break;
            default:
                res.push(path);
                break;
        }
    }
    return '/'+res.join('/');
};