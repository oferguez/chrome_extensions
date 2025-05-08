document.addEventListener('DOMContentLoaded', function() {
    const renameButton = document.getElementById('renameButton');
    const newTabNameInput = document.getElementById('newTabName');
  
    renameButton.addEventListener('click', function() {
      const newName = newTabNameInput.value;
      if (newName) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          if (tabs && tabs.length > 0) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              function: (newTitle) => {
                document.title = newTitle;
              },
              args: [newName]
            });
            window.close(); // Close the popup after attempting to rename
          }
        });
      }
    });
  });