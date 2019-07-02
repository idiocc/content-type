# @goa/content-type

[![npm version](https://badge.fury.io/js/%40goa%2Fcontent-type.svg)](https://npmjs.org/package/@goa/content-type)

`@goa/content-type` is a fork of [Create and parse HTTP Content-Type header according to RFC 7231](https://github.com/jshttp/content-type) Written In ES6 And Optimised With [JavaScript Compiler](https://compiler.page).

```sh
yarn add @goa/content-type
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`parse(header: string|http.IncomingMessage|http.ServerResponse): ContentType`](#parseheader-stringhttpincomingmessagehttpserverresponse-contenttype)
  * [`_goa.ContentType`](#type-_goacontenttype)
- [`format(obj: ContentType): string`](#formatobj-contenttype-string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its named functions:

```js
import { parse, format } from '@goa/content-type'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `parse(`<br/>&nbsp;&nbsp;`header: string|http.IncomingMessage|http.ServerResponse,`<br/>`): ContentType`

Parse a _Content-Type_ header either from a string, or a request or response objects.

`import('http').IncomingMessage` __<a name="type-httpincomingmessage">`http.IncomingMessage`</a>__

`import('http').ServerResponse` __<a name="type-httpserverresponse">`http.ServerResponse`</a>__

__<a name="type-_goacontenttype">`_goa.ContentType`</a>__: The content-type interface.

|      Name       |                  Type                  |                                        Description                                         |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| __type*__       | <em>string</em>                        | The type of the content-type.                                                              |
| __parameters*__ | <em>!Object&lt;string, string&gt;</em> | An object of the parameters in the media type (name of the parameter will be lower-cased). |

```js
import { parse } from '@goa/content-type'

const res = parse('image/svg+xml; charset=utf-8')
console.log(res)

const asRequest = parse({ headers: { // as IncomingMessage
  'content-type': 'image/svg+xml; charset=utf-8',
} })
console.log(asRequest)

const asResponse = parse({ getHeader(header) { // as ServerResponse
  if (header == 'content-type')
    return 'image/svg+xml; charset=utf-8'
} })
console.log(asResponse)
```
```
ContentType { parameters: { charset: 'utf-8' }, type: 'image/svg+xml' }
ContentType { parameters: { charset: 'utf-8' }, type: 'image/svg+xml' }
ContentType { parameters: { charset: 'utf-8' }, type: 'image/svg+xml' }
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `format(`<br/>&nbsp;&nbsp;`obj: ContentType,`<br/>`): string`

Format an object into a _Content-Type_ header. This will return a string of the content type for the given object.

<table>
<tr><th><a href="example/format.js">Source</a></th><th>Output</th></tr>
<tr><td>

```js
import { format } from '@goa/content-type'

const res = format({
  type: 'image/svg+xml',
  parameters: { charset: 'utf-8' },
})
console.log(res)
```
</td>
<td>

```
image/svg+xml; charset=utf-8
```
</td></tr>
</table>


<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Copyright

Original work by [Douglas Christopher Wilson and contributors](https://github.com/jshttp/content-type).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>