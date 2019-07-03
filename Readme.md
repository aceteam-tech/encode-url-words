# Encode url words
This package is useful for signing AWS requests, what requires to encode path of the url.
Built in method `encodeURIComponent` encode slashes, and AWS v4 signature expects slashes to stay not encoded.

## Quick start
**Install**
```
yarn add encode-url-words
```

**Add to the project**
```
const encodeUrlWords = require('encode-url-words')
```

**Encode the url**
```
encodeUrlWords('/ws/@connections/aq2fAdABrPEAc2Q=')
```
Result:
```
/ws/%40connections/aq2fAdABrPEAc2Q%3D
```