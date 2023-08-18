# CodeceptJS Appium V2のサンプルプロジェクト

## 目的

CodeceptJS の環境構築に関する備忘録、プラグインの導入試行の結果保存、など

## 環境構築手順

### node.js環境

```
npm -g install appium@next
```

```
npm init -y
npm install codeceptjs webdriverio
```

```
npx codeceptjs init
```

- TypeScript を有効にしてみた
- テストファイルを作るところでエラーになる。原因不明。


### アプリ

- appium-inspector


## スマホアプリ関連

### アプリのActivity 取得

```
aapt dump xmltree hoge.apk AndroidManifest.xml | grep -A 3 "E: activity"
```
aapt は、`C:\Users\xxxxxx\AppData\Local\Android\Sdk\build-tools\33.0.0`にインストールされていた。
