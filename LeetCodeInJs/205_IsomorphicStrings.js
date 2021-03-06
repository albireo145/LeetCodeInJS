var isIsomorphic = function (s, t) {
    var map = new Map();
    var set = new Set();
    for (var i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            if (map.get(s[i]) != t[i]) return false;
        } else {
            if (set.has(t[i])) return false;
            else {
                map.set(s[i], t[i]);
                set.add(t[i]);
            }
        }
    }
    return true;
};