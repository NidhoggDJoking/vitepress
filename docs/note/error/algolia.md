# Algolia


## Github Action Error

```sh
Push indices to Algolia

Run signcl/docsearch-scraper-action@master

...someting

algoliasearch.exceptions.RequestException: Method not allowed with this API key

```

配置错误:

`github settings` > `Secrets and variables`> `Actions`

找到 Repository secrets: `API_KEY`

指的是`Admin API Key` 而非 `Search-Only API Key`


### Push indices to Algolia

```sh
Crawling issue: nbHits 0 for `XXX`
```

原因:

```sh
You have exceeded your Free app's 10,000 Record limit.
You can delete records or indices,
or upgrade at any time for increased capacity.
```