chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        // files: ['content-script.js']
        function: injectFunction
    });
});

function injectFunction() {
    document.body.style.backgroundColor = 'green';
}