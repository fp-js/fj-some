'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

var _some = require('./');

var _some2 = _interopRequireWildcard(_some);

it('fj-some', function () {
  _assert2['default'].equal(_some2['default'](function (elem) {
    return elem > 10;
  }, [2, 5, 8, 1, 4], null), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7c0JBQW1CLFFBQVE7Ozs7b0JBQ1YsSUFBSTs7OztBQUdyQixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDbEIsc0JBQU8sS0FBSyxDQUFDLGtCQUFLLFVBQUEsSUFBSTtXQUFJLElBQUksR0FBRyxFQUFFO0dBQUEsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztDQUNsRSxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBzb21lIGZyb20gJy4vJztcblxuXG5pdCgnZmotc29tZScsICgpID0+IHtcbiAgYXNzZXJ0LmVxdWFsKHNvbWUoZWxlbSA9PiBlbGVtID4gMTAsWzIsIDUsIDgsIDEsIDRdLG51bGwpLGZhbHNlKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9