# fj-some

[![Build Status](https://travis-ci.org/fp-js/fj-some.svg)](https://travis-ci.org/fp-js/fj-some) [![npm version](https://badge.fury.io/js/fj-some.svg)](http://badge.fury.io/js/fj-some)
> functional `some` for an array.

## Installation

`npm install fj-some --save`

## Usage

```js
var some = require('fj-some');
some(elem => elem > 10,[2, 5, 8, 1, 4],null); // False.

```

##API
```
cb -> array -> [thisArgs]
```

A curried function that expects:

* `cb` [required] : A callback function that receives: `currentValue`, `index` and `array`.

* `array` [required]: The array on which the function is applied.

* `thiArgs` [optional]: Execution context.
