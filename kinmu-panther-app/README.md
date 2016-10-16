勤務パンサー アプリ
===================

勤務パンサーのスマホアプリです。

## スクリーンショット
（ある程度動くようになったらここにスクリーンショットを貼りたい。）

## 必要環境
Onsen-UIとCordovaに依存しているので下記を想定しています。

- iOS7以降
- Android 4.0.2以降

## 実行方法

### node.jsインストール
https://nodejs.org/en/  
stableを推奨。

### 初期設定

npmでライブラリのダウンロードなどを行う。

    npm install

### ビルド

    npm run build

ファイルを変更すると自動で再ビルドされる。

### phonegapインストール

node.jsをインストールされたnpmコマンドを使ってインストール

    npm install -g phonegap

### ブラウザで動作確認

このREADME.mdファイルと同じディレクトリで下記コマンドを実行

    phonegap run browser

### デバイスで動作確認

phonegap developer appをスマートフォンにインストール。

同じネットワークにデバイスとPCを接続。  
windowsではパブリックネットワークになっていると接続できないことがあるので、
プライベートネットワークに変更する。(http://www.ikt-s.com/windows8-1_pubic_private_network/)

PC側でphonegapを起動

    phonegap serve

出てきたIPアドレスとポート番号をphonegap developer appで入力。

### 参考ページ
http://qiita.com/tsunet111/items/2ab7a1bfdf58a08af38f

