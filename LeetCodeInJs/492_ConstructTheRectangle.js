/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var sqrt = Math.sqrt(area)
  if (sqrt % 1 === 0) return [sqrt, sqrt]
  sqrt = Math.floor(sqrt)
  while (area % sqrt !== 0) {
      sqrt--
  }
  return [area/sqrt, sqrt]
};
