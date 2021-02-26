/*
 * モーダル側のJS
 */
class Sample1Modal extends ModalBase {
  /*
   * コンストラクタ
   * 引数としてリクエスト生成用関数と、処理結果返却用関数を受け取る
   * 親クラスでイベントのバインドを行っているため、親のコンストラクタにモダールIDを渡す
   */
  constructor(createRequest, successCallback) {
    super("sample1");
    this.requestFnc = createRequest;
    this.callbackFnc = successCallback;
  }
  
  /*
   * モーダル表示に使うページ情報を設定して返却する
   * url と param という属性を持った連想配列を返す
   * url : モーダルを表示するためのURL
   * param : getパラメータとしてサーバに送信するパラメータ
   *         下記、onLoadModalメソッドにも引き渡される
   */
  getPageData() {
    var data = new Array();
    data["url"] = "./modalSample1.html";
    data["param"] = this.requestFnc.call();
    return data;
  }
  
  /*
   * モーダル表示後のJS処理を記載
   */
  onLoadModal(param) {
    var $this = this;
    //パラメータで渡された情報をモーダルに表示
    var searchCondition = param.searchCondition;
    var baseArea = $('.sample1');
    baseArea.find('.searchCondition').val(searchCondition);
    
    //選択ボタン押下時に情報を返却する
    baseArea.find('.selectButton').on('click', function() {
     var result = {
        user : $(this).siblings(".userData").html()
      }
      
      $this.callbackFnc.call(this, result);
      $this.close();
    });
  }
}




