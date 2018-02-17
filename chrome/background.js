chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(
            null,{file: "getMP4.js"},
            downloadMp4
        );
});

function downloadMp4() {
    chrome.storage.local.get('obj', function (result) {
        chrome.downloads.download({
            url: result.obj['url'],
            filename: result.obj['filename'],
            saveAs: true
        });
        chrome.storage.local.remove('obj');
    });
}