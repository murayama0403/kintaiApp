勤務パンサー アプリ
===================

勤務パンサーのスマホアプリです。

## スクリーンショット
（ある程度動くようになったらここにスクリーンショットを貼りたい。）

## 必要環境
下記環境を想定しています。
※使用ライブラリなどによって再検証が必要

- iOS7以降
- Android 4.0.2以降

## 実行方法

### node.jsインストール
https://nodejs.org/en/  
stableを推奨。

### 初期設定

npmでライブラリのダウンロードなどを行う。

    npm install

### ビルド＆実行

    npm start

http://localhost:8080
をブラウザで開けば確認できる。

ファイルを変更すると自動で再ビルド＆リロードされる

http://[開発マシンのIPアドレス]:8080 にアクセスすることで、
簡易的にスマホでの見た目もチェック可能。
（後述するphonegap同様、プライベートネットワークにするといった対応は必要かもしれない）

### Redux DevToolsの利用

下記URLからブラウザの拡張機能としてインストールする。
Chrome用: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
Firefox用: https://addons.mozilla.org/en-US/firefox/addon/remotedev/

debug_sessionパラメータを追加することで、ソース変更などでリロードしても状態が保持される。
http://localhost:8080/?debug_session=aaa
（aaaは任意の文字列を指定）

アドレスバー右側のボタンからDevToolsが利用可能。

### phonegapインストール

node.jsをインストールされたnpmコマンドを使ってインストール

    npm install -g phonegap

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

