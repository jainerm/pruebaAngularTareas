# shallow-clone [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W8YFZ425KND68) [![NPM version](https://img.shields.io/npm/v/shallow-clone.svg?style=flat)](https://www.npmjs.com/package/shallow-clone) [![NPM monthly downloads](https://img.shields.io/npm/dm/shallow-clone.svg?style=flat)](https://npmjs.org/package/shallow-clone) [![NPM total downloads](https://img.shields.io/npm/dt/shallow-clone.svg?style=flat)](https://npmjs.org/package/shallow-clone) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/shallow-clone.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/shallow-clone)

> Creates a shallow clone of any JavaScript value.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save shallow-clone
```

## Usage

```js
const clone = require('shallow-clone');
```

**Supports**

* array buffers
* arrays
* buffers
* dates
* errors
* float32 arrays
* float64 arrays
* int16 arrays
* int32 arrays
* int8 arrays
* maps
* objects
* primitives
* regular expressions
* sets
* symbols
* uint16 arrays
* uint32 arrays
* uint8 arrays
* uint8clamped arrays

## Arrays

By default, only the array itself is cloned (shallow), use [clone-deep](https://github.com/jonschlinkert/clone-deep) if you also need the elements in the array to be cloned.

```js
const arr = [{ a: 0 }, { b: 1 }];
const foo = clone(arr);
// foo =>  [{ 'a': 0 }, { 'b': 1 }]

// array is cloned
assert(actual === expected); // false

// array elements are not
assert.deepEqual(actual[0], expected[0]); // true
```

## Objects

Only the object is shallow cloned, use [clone-deep](https://github.com/jonschlinkert/clone-deep) if you also need the values in the object to be cloned.

```js
console.log(clone({ a: 1, b: 2, c: 3 }));
//=> {a: 1, b: 2, c: 3 }
```

## RegExp

Clones regular expressions and flags, and preserves the `.lastIndex`.

```js
const regex = clone(/foo/g); //=> /foo/g
// you can manually reset lastIndex if necessary
regex.lastIndex = 0;
```

## Primitives

Simply returns primitives unchanged.

```js
clone(0); //=> 0
clone('foo'); //=> 'foo'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [assign-deep](https://www.npmjs.com/package/assign-deep): Deeply assign the values of all enumerable-own-properties and symbols from one or more source objects??? [more](https://github.com/jonschlinkert/assign-deep) | [homepage](https://github.com/jonschlinkert/assign-deep "Deeply assign the values of all enumerable-own-properties and symbols from one or more source objects to a target object. Returns the target object.")
* [clone-deep](https://www.npmjs.com/package/clone-deep): Recursively (deep) clone JavaScript native types, like Object, Array, RegExp, Date as well as primitives. | [homepage](https://github.com/jonschlinkert/clone-deep "Recursively (deep) clone JavaScript native types, like Object, Array, RegExp, Date as well as primitives.")
* [is-plain-object](https://www.npmjs.com/package/is-plain-object): Returns true if an object was created by the `Object` constructor. | [homepage](https://github.com/jonschlinkert/is-plain-object "Returns true if an object was created by the `Object` constructor.")
* [kind-of](https://www.npmjs.com/package/kind-of): Get the native type of a value. | [homepage](https://github.com/jonschlinkert/kind-of "Get the native type of a value.")

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 20 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 2  | [doowb](https://github.com/doowb) |  
| 1  | [jakub-g](https://github.com/jakub-g) |  

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright ?? 2019, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on April 15, 2019._