var flattenIfArray = a => [Array.isArray(a) ? a.flatten() : a]
var flattenNest = (a, b) => Array.prototype.concat.apply(a, flattenIfArray(b));

Array.prototype.flatten = function() {
  return this.reduce(flattenNest);
};;
