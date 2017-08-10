# リリースビルドに必要な鍵ファイルなどの生成手順

## iOS
http://dev.classmethod.jp/etc/flash-builder-apple-ios-developer-program-4/
↑の手順を参考にした。

http://slproweb.com/products/Win32OpenSSL.html
↑から環境にあったopenSSLをダウンロードしてインストールする。
Download Win32 OpenSSLってところから。
↓のいずれか。
Win32 OpenSSL v1.1.0f Light
Win64 OpenSSL v1.1.0f Light

今回は64bitマシンなので64にした。
インストール時にDLLをシステムフォルダにインストールするか、binに置くかを聞かれたが、
DLLが他アプリに影響するのを回避したかったのでにbinにした。

OpenSSLのディレクトリに移動

    cd C:\OpenSSL-Win64\bin

秘密鍵ファイル.keyを生成

    openssl genrsa -out yamato.key 2048

yamato.keyができる。
	
証明書署名リクエストファイル.csrを生成

    openssl req -new -key yamato.key -out yamato.csr -subj "/emailAddress=yamato-satoshi@caica.jp, CN=Satoshi Yamato, C=JP"

↓のエラーが出た。	
Can't open C:\Program Files\Common Files\SSL/openssl.cnf for reading, No such fi
le or directory

-config openssl.cfg
を追加する。

    openssl req -new -key yamato.key -out yamato.csr -config openssl.cfg -subj "/emailAddress=yamato-satoshi@caica.jp, CN=Satoshi Yamato, C=JP"

これでできた。
yamato.csrができる。

https://developer.apple.com/
からログインして、
左側のCertificates, IDs & Profiles、Certificates、Allを選ぶ
右上の＋ボタンをクリック。
ProductionのIn-House and Ad Hocを選択。

さっき作ったcsrファイルを選択してアップロード。
結果、ios_distribution.cer
ファイルがダウンロードできるようになる。

そのファイルをC:\OpenSSL-Win64\binに置く。

PEMファイルを作成

    openssl x509 -in ios_distribution.cer -inform DER -out yamato.pem -outform PEM

yamato.pemファイルができる。

次にp12ファイルを生成

    openssl pkcs12 -export -inkey yamato.key -in yamato.pem -out yamato.p12

ここでのパスワードは後で使うのでちゃんと覚えておくこと。
もし忘れたらこのコマンドからやり直せばいいけれど。

yamato.p12ファイルができる。

https://developer.apple.com/に戻って、
Identifiers
App IDsで＋で作成。

NameはKinmuPanther
Explicit App IDはドメイン逆順＋アプリをあらわすアルファベット。
今回は、
jp.caica.kinmupanther-e
にした。
前回と名前がかぶっているのでenterprise版ということで-eを追加。

Provisioning Profiles Allで＋
In House
先ほど作ったappIdを選択。
先ほど作ったcertificateを選択。
ProfileNameはKinmuPanther
KinmuPanther.mobileprovisionファイルがダウンロードできる。

これで完了。
あとはphonegap buildでp12とmobileprovisionファイルをアップロードしてパスワードを入力すればビルドできる。

## Android

JDKをインストールしてない場合はインストール。
JDKインストール先/binフォルダでコマンド実行

    keytool -genkey -v -keystore yamato.keystore -alias KinmuPanther -keyalg RSA -validity 20000

パスワードを入力。
その後はそれっぽい情報を入れればkeystoreファイルが生成できる。

あとはphonegap buildでkeystoreファイルをアップロードしてパスワードを入力すればビルドできる。
エイリアスは↑で入れたのと同じものを入力しないとダメ。
