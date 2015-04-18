import {curry2} from 'fj-curry';

let _some = (cb, list) => {
    'use strict';

    if (typeof cb !== 'function') {
      throw new TypeError();
    }

    let that = Object(this), len = that.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in list && cb(list[i], i, list)) {
        return true;
      }
    }

    return false;
};

module.exports = curry2(_some);
