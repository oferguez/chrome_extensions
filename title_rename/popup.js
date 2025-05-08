document.addEventListener('DOMContentLoaded', function() {
    const renameButton = document.getElementById('renameButton');
    const newTabNameInput = document.getElementById('newTabName');
  
    renameButton.addEventListener('click', function() {
      const newName = newTabNameInput.value;
      if (newName) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          if (tabs && tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { title: newName });
            window.close(); // Close the popup after renaming
          }
        });
      }
    });
  });