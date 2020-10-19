(function (global) {

// (function onOpen() {
//   SpreadsheetApp.getUi()
//                 .createMenu('csv')
//                 .addItem('export as csv files', 'dialog')
//                 .addToUi();
// })(window);

// (function dialog() {
//   var html = HtmlService.createHtmlOutputFromFile('download');
//   SpreadsheetApp.getUi().showModalDialog(html, 'CSV download dialog');
// })(window);

(function saveAsCSV() {
    var filename = "testrecy.csv"; // CSV file name
    var folder = "/Users/ross/Desktop"; // Folder ID
    console.log(filename);

    var csv = "";
    var v = SpreadsheetApp
            .getActiveSpreadsheet()
            .getActiveSheet()
            .getDataRange()
            .getValues();
    v.forEach(function(e) {
      csv += e.join(",") + "\n";
    });
    var url = DriveApp.getFolderById(folder)
              .createFile(filename, csv, MimeType.CSV)
              .getDownloadUrl()
              .replace("?e=download&gd=true","");
    console.log(url);
    return url;
})(window);

document.addEventListener("click", function (event) {

  clickedElem = event.target.innerHTML;
  console.log(event.target);
  console.log(clickedElem);

  if (clickedElem=="Download") {
    function executeDownload(url) {
      window.location.href = url;
    }
    console.log(url);
  }
  return;
});


})(window);