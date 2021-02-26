class ModalBase {
  constructor(modalType) {
    this.modalType = modalType;
    this.bindEvent(this.modalType);
  }
  
  bindEvent(modalType) {
    var $this = this;
    var elements = $('[data-type="modal-button"][data-modal-type="' + $this.modalType + '"]');
    elements.click(function() {
      $this.open($this.modalType);
    });
  }
  
  open(modalType) {
    var $this = this;
    var elements = $('[data-type="modal-area"][data-modal-type="' + modalType + '"]');
    //モーダル表示エリアに背景用とコンテンツ用エレメントを追加
    elements.append('<div class="modal_bg js-modal-close"></div>');
    var contentsArea = $('<div class="modal_content"></div>');
    elements.append(contentsArea);
    
    //モーダルコンテンツをAjaxで取得する
    var pageData = this.getPageData();
    var url = pageData.url;
    $.ajax({
      url : pageData.url,
      dataType : 'html',
      data : pageData.param, //リクエストパラメータはサーバにもGETで送信するし
      success : function(data) {
        contentsArea.append(data);
        $this.onLoadModal(pageData.param); //HTML取得後の実行JS処理にも渡す
        //モダールを開く
        elements.fadeIn();
      },
      error : function(data) {
        console.log(data);
      }
    });

    //close処理のバインド
    $('.js-modal-close').on("click",function() {
      $this.close();
    });
  }
  
  close() {
    var elements = $('[data-type="modal-area"][data-modal-type="' + this.modalType + '"]');
    elements.fadeOut("fast", function() {
      elements.html("");
    });
  }
  
  //子クラスでオーバーライドするメソッド類
  //連想配列で、url,paramを設定
  getPageData() {}
  onLoadModal(requestParameter) {}
}