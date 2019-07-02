# @goa/content-type

[![npm version](https://badge.fury.io/js/@goa/content-type.svg)](https://npmjs.org/package/@goa/content-type)

`@goa/content-type` is [fork] Create and parse HTTP Content-Type header according to RFC 7231 Written In ES6 And Optimised With JavaScript Compiler.

```sh
yarn add @goa/content-type
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`contentType(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@goa/content-type.Config`](#type-_@goa/content-typeconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import contentType from '@goa/content-type'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `contentType(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@goa/content-typeconfig">`_@goa/content-type.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import contentType from '@goa/content-type'

(async () => {
  const res = await contentType({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>