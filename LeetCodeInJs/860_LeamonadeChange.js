/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var map = {5: 0, 10: 0}
  var keys = [5, 10]
  for (var bill of bills) {
    change = bill - 5
    bill < 20 && map[bill]++
    if (change === 0) continue
    var pos = keys.length - 1
    while(change !== 0) {
      if (pos === -1) return false
      if (change >= keys[pos] && map[keys[pos]] > 0) {
        change -= keys[pos]
        map[keys[pos]]--
      } else {
        pos--
      }
    }
  }
  return true
};

lemonadeChange([5,5,5,10,20])  // true
lemonadeChange([5,5,10])       // true
lemonadeChange([10,10])        // false
lemonadeChange([5,5,10,10,20]) // false
