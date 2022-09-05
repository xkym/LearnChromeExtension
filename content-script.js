// document.body.style.backgroundColor = 'orange';

chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    console.log(response.farewell);
});
