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
