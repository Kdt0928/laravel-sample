/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/quotes/quotes.js ***!
  \***************************************/
$(function () {
  $('[id^=quote]').on('click', function () {
    var file_name = $(this).closest('tr').find('[name=file_name]').val();
    var file_name_error = $(this).closest('tr').find('[name=file_name_error]').val();
    var form = $(this).parents('form');
    $(this).closest('tr').find('[name=input_file_name]').val(file_name);
    form.submit();

    if (file_name_error != "") {
      $(this).closest('tr').find('[name=input_file_name]').val(file_name_error);
      form.submit();
    }

    ;
  });
}); // function downloadFile(file_name) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', '/download?' + file_name);
//     xhr.send();
//     xhr.onload = function() {
//         var blob = xhr.response;
//         var save_file_name = xhr.getResponseHeader('filename');
//         window.navigator.msSaveBlob(blob, save_file_name);
//     }
// };
/******/ })()
;