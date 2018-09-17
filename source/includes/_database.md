# Authentication

```shell
# In a shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: yourshinyapikey"
```

```javascript
// Or use the
const paperboy = require('paperboy')
const db = paperboy.authorize('yourshinyapikey')
```

> Make sure to replace `yourshinyapikey` with your API key.

I've been collecting spot prices on the top 100 cryptocurrencies for some time now. You can use it to build your reports if you'd like.

I use API keys to allow access to the API. You can register a new API key at the [developer portal](http://example.com/developers).

My systems expect your API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: yourshinyapikey`

<aside class="notice">
You must replace <code>yourshinyapikey</code> with your personal API key.
</aside>
