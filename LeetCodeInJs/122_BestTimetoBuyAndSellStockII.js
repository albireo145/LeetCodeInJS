/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return  prices.reduce((accumulator, currentValue, currentIndex, array) =>
                          { return accumulator + ((currentValue > array[currentIndex - 1]) ? currentValue - array[currentIndex - 1] : 0)},0);
};