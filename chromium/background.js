chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['rtl-toggle.js'],
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.language && sender.tab) {
      const isRtl = request.language.direction === 'RTL';
      
      // Restore icon flipping based on language direction
      chrome.action.setIcon({
        tabId: sender.tab.id,
        path: {
          "16": isRtl ? "images/rtl-16.png" : "images/ltr-16.png",
          "32": isRtl ? "images/rtl-32.png" : "images/ltr-32.png",
          "48": isRtl ? "images/rtl-48.png" : "images/ltr-48.png",
          "128": isRtl ? "images/rtl-128.png" : "images/ltr-128.png"
        }
      });

      // Clear the badge
      chrome.action.setBadgeText({
        text: '',
        tabId: sender.tab.id
      });
    }
  }
);
