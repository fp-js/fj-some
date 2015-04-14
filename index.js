'use strict';

var _arguments = arguments;

var _curry2 = require('fj-curry');

var _some = function _some(cb, list, thisArg) {
  'use strict';

  if (typeof cb !== 'function') {
    throw new TypeError();
  }

  var that = Object(undefined),
      len = that.length >>> 0;
  thisArg = list.length >= 2 ? _arguments[1] : void 0;

  for (var i = 0; i < len; i++) {
    if (i in t && cb.call(thisArg, t[i], i, t)) {
      return true;
    }
  }

  return false;
};

module.exports = _curry2.curry2(_some);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3NCQUFxQixVQUFVOztBQUUvQixJQUFJLEtBQUssR0FBRyxlQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFLO0FBQy9CLGNBQVksQ0FBQzs7QUFFYixNQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUM1QixVQUFNLElBQUksU0FBUyxFQUFFLENBQUM7R0FDdkI7O0FBRUQsTUFBSSxJQUFJLEdBQUcsTUFBTSxXQUFNO01BQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2pELFNBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxXQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDOztBQUVuRCxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFFBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQzFDLGFBQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRjs7QUFFRCxTQUFPLEtBQUssQ0FBQztDQUNoQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFyQlQsTUFBTSxDQXFCVSxLQUFLLENBQUMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VycnkyfSBmcm9tICdmai1jdXJyeSc7XG5cbmxldCBfc29tZSA9IChjYiwgbGlzdCwgdGhpc0FyZykgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICB9XG5cbiAgICBsZXQgdGhhdCA9IE9iamVjdCh0aGlzKSwgbGVuID0gdGhhdC5sZW5ndGggPj4+IDA7XG4gICAgdGhpc0FyZyA9IGxpc3QubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGkgaW4gdCAmJiBjYi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnJ5Mihfc29tZSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==