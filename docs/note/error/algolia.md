---
outline: 'deep'
---

# Algolia

## Push indices to Algolia

```sh
Crawling issue: nbHits 0 for `XXX`
```

原因为`Algolia`爬取的内容记录（实际已入库的）已超免费记录限制

```sh
You have exceeded your Free app's 10,000 Record limit.
You can delete records or indices,
or upgrade at any time for increased capacity.
```

充钱扩容显然不可能，可以调整`crawlerConfig.json`中减少爬虫爬取的内容

## Github Action Error

```sh
Push indices to Algolia

Run signcl/docsearch-scraper-action@master

...someting code

algoliasearch.exceptions.RequestException: Method not allowed with this API key

```

注意报警错误：`Method not allowed with this API key`



:::warning 实则为配置错误:
 `API key` 复制过程产生变化，或使用的是 `Search-Only API Key` 而非 `Admin API Key`
:::


配制位置：`Secrets and variables`> `Actions` > `Repository secrets`: `API_KEY`

:::tip
 `Search-Only API Key` 只能查询所以是可以暴露在代码里的，而`Admin API Key`又权限处理后台的数据所以
 配制`Repository secrets`时应该使用`Admin API Key`
:::