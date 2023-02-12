Github Action



```sh
Push indices to Algolia

Run signcl/docsearch-scraper-action@master

...someting

algoliasearch.exceptions.RequestException: Method not allowed with this API key

```

github> settings> Secrets and variables> Actions

Repository secrets:API_KEY

指的是`Admin API Key` 而非 `Search-Only API Key`


::: danger Push indices to Algolia
Crawling issue: nbHits 0 for `XXX`
:::

```
You have exceeded your Free app's 10,000 Record limit. You can delete records or indices, or upgrade at any time for increased capacity.
```

`fatal: HTTP/2 stream 1 was not closed cleanly before end of the underlying stream`


`Failed to connect to github.com port 443 after 75004 ms: Operation timed out`