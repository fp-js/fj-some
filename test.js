'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _assert = require('assert');

var _assert2 = _interopRequireWildcard(_assert);

var _some = require('./');

var _some2 = _interopRequireWildcard(_some);

it('fj-some', function () {
  _assert2['default'].equal(_some2['default'](function (elem) {
    return elem > 10;
  }, [2, 5, 8, 1, 4]), false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7c0JBQW1CLFFBQVE7Ozs7b0JBQ1YsSUFBSTs7OztBQUdyQixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDbEIsc0JBQU8sS0FBSyxDQUFDLGtCQUFLLFVBQUEsSUFBSTtXQUFJLElBQUksR0FBRyxFQUFFO0dBQUEsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzdELENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHNvbWUgZnJvbSAnLi8nO1xuXG5cbml0KCdmai1zb21lJywgKCkgPT4ge1xuICBhc3NlcnQuZXF1YWwoc29tZShlbGVtID0+IGVsZW0gPiAxMCxbMiwgNSwgOCwgMSwgNF0pLGZhbHNlKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9