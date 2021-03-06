
/**
number with id

@class Point
@module interval-tree2
 */
var Point;

Point = (function() {

  /**
  @constructor
  @param {Number} val number
  @param {Number|String} id id
   */
  function Point(val, id) {
    this.val = val;
    this.id = id;
  }

  return Point;

})();

module.exports = Point;
