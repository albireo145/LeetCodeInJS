/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  var row, col
  row = grid.length
  col = grid[0].length

  var dist = [{
    x: 1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: 0,
    y: 1
  }, {
    x: 0,
    y: -1
  }]
  var dfs = function (grid, x, y) {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0
    grid[x][y] = 0
    var total = 1
    for (var obj of dist) {
      total += arguments.callee(grid, x + obj.x, y + obj.y)
    }
    return total
  }
  var max = 0
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      max = Math.max(max, dfs(grid, i, j))
    }
  }
  return max
};

maxAreaOfIsland([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
])
