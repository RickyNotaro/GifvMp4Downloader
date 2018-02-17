var url = document.querySelector('source').src;
var filename = document.title.replace(/[|&;$%@"<>()+\.,]/g, "").replace(/ /g, '_') +'.mp4';

var object = {};
object['url'] = url;
object['filename'] = filename;

chrome.storage.local.set({obj:object});
