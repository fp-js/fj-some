import {curry2} from 'fj-curry';

let _some = (cb, list, thisArg) => {
    'use strict';

    if (typeof cb !== 'function') {
      throw new TypeError();
    }

    let that = Object(this), len = that.length >>> 0;
    thisArg = list.length >= 2 ? arguments[1] : void 0;
    
    for (let i = 0; i < len; i++) {
      if (i in t && cb.call(thisArg, t[i], i, t)) {
        return true;
      }
    }
    
    return false;
};

module.exports = curry2(_some)
