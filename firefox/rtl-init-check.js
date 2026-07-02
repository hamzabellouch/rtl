if (document.documentElement.getAttribute('dir') == 'rtl') {
  chrome.runtime.sendMessage({language: {"direction": "RTL", "backgroundColor": "#4caf50"}});
}
