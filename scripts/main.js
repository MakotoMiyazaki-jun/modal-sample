/*
 * メイン画面側のJS
 */
$(function() {
  //引き渡すパラメータを連想配列で設定
  var sample1Modal = new Sample1Modal(
  function() {
    var param = new Array();
    param["searchCondition"] = $('#parameter').val();
    return param;
  },
  function(data) {
    $("#result").html(data.user);
    return;
  });
  
  
}); 
