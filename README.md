# OxGKit Docs (oxgkit.docs)

OxGKit 官方文檔網站，使用 [Docusaurus](https://docusaurus.io/) 建置。

- OxGKit Repo: https://github.com/cout-m6o/OxGKit
- 語言版本：繁體中文 (預設)、簡體中文、English

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

以預設語系 (zh-Hant) 啟動本地開發伺服器 (熱更新)。指定其他語系：

```bash
npm run start -- --locale zh-Hans
npm run start -- --locale en
```

※備註：`docusaurus start` 一次僅能預覽單一語系，全語系請使用 build。

## Build

```bash
npm run build
```

產出全語系靜態網站至 `build/`，可使用以下指令進行本地預覽：

```bash
npm run serve
```

## Deployment

推送 (merge) 至 `master` 分支後，GitHub Actions 會自動建置並部署至 `gh-pages` 分支 (GitHub Pages)。

- 開發分支：`dev`
- 預設分支：`master`

## Translations

- 預設語系 (zh-Hant) 內容位於 `docs/`
- 其他語系翻譯位於 `i18n/zh-Hans/`、`i18n/en/` (完整鏡像 `docs/` 結構)
