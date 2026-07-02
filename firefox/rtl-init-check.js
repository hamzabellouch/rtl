const isRtl = (document.documentElement.getAttribute('dir') || 'ltr').toLowerCase() === 'rtl';
chrome.runtime.sendMessage({
  language: {
    direction: isRtl ? 'RTL' : 'LTR',
    backgroundColor: isRtl ? '#4caf50' : '#0000'
  }
});
