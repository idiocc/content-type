## API

The package is available by importing its named functions:

```js
import { parse, format } from '@goa/content-type'
```

%~%

```## parse => ContentType
[
  ["header", "string|http.IncomingMessage|http.ServerResponse"]
]
```

Parse a _Content-Type_ header either from a string, or a request or response objects.

%TYPEDEF types/index.xml%

%EXAMPLE: example, ../src => @goa/content-type%
%FORK example%

%~%

```## format => string
[
  ["obj", "ContentType"]
]
```

Format an object into a _Content-Type_ header. This will return a string of the content type for the given object.

<table>
<tr><th><a href="example/format.js">Source</a></th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example/format, ../src => @goa/content-type%
</td>
<td>

%FORK example/format%
</td></tr>
</table>


%~%