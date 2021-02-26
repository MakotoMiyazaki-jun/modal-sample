# Name
modal-sample

# Description
フロントモーダル処理のサンプルソース  
適当にWebサーバ立てて動かしてください  

# 各画面でやること
##メイン画面（index.html)
-使いたいモーダルのJSとCSSをインポートする
-モーダルを開くためのボタンに
--data-type="modal-button"
--data-modal-type="使いたいモーダルのID"
  の2属性を追加
-最下部に'<div data-type="modal-area" data-modal-type="使いたいモーダルのID">'の要素を追加
##メイン画面のJS（main.js）
-モーダルクラスのインスタンス化
-コンストラクタにパラメータ設定に関する関数と、処理結果を受け取る関数を設定

##モーダル画面（modalSample.html）
-普通に画面を作る

##モーダル画面のJS（sample1-modal.js）
-ModalBaseを継承したクラスを作成
-実装の詳細はファイルを参照してください


