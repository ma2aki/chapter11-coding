# gulp-dev_static_flocss_SPtoPC

## 動作が確認できている環境

- Node バージョン v14.16.0
- Gulp 4 系

## 使い方

- ダウンロードしたフォルダを vscode で開く
- ターミナルを開き、「 cd gulp 」とコマンドを入力
- ターミナルを開き、「 npm i 」とコマンドを入力
- gulp フォルダ直下に、node_modules と package-lock.json が生成されるのを確認する
- 「 npx gulp 」とコマンドを入力すると gulp が動き出す

## 作業ディレクトリ

- sass/js の記述は src フォルダの中で行う
- 画像は src フォルダの images の中に格納する
- コンパイルされた CSSs/js と圧縮された画像は dist フォルダの中に出力される
- html は dist 直下の html ファイルに直接記述する

## 備考

- CSS 設計は FLOCSS(https://github.com/hiloki/flocss )を採用
- スマホファースト
- rem 記述を前提# gulp-dev_static_flocss_SPtoPC
