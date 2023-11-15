// // contents.js
// // This script would run in the context of a Gmail page to extract words from an open email.

// function extractWordsFromEmail() {
//     // Gmail-specific selector for the email body. This is a hypothetical selector and may not work.
//     // You would need to inspect a Gmail page and determine the correct selector for the email content.
//     const emailBodySelector = '.a3s'; // This is a class name that might be used in the email body.
//     const emailBodies = document.querySelectorAll(emailBodySelector);

//     // If there is more than one email body (in case of multiple email threads open), 
//     // this will only target the first one.
//     if (emailBodies.length > 0) {
//         const text = emailBodies[0].innerText; // Get text from the first email body element.
//         const words = text.match(/\w+/g); // Split into words.
//         return words; // Return the array of words.
//     }
    
//     return []; // Return an empty array if no email body is found.
// }

// // This function will log the array of words to the console and also attach it to window for inspection.
// function processAndLogWords() {
//     const wordsArray = extractWordsFromEmail();
//     console.log(wordsArray);
//     window.wordsArray = wordsArray; // Attach to the window object for global access.
// }

// fetch(chrome.runtime.getURL('dictionary.txt'))
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//     // Process the text data here
//   })
//   .catch((error) => {
//     console.error('Error fetching the text file:', error);
//   });
// // in the manifest, it used to be: *://mail.google.com/*
// // Run the function after a delay to give the dynamic Gmail page time to load the email content.
// // The delay time may need to be adjusted based on the actual load time of Gmail's content.
// setTimeout(processAndLogWords, 5000); // Delay for 5 seconds.
function thing(){
    const emailBodies = document.querySelectorAll('div[role="listitem"]');

    emailBodies.forEach(emailBody => {
        // Store the contents of the email body in a variable
        let originalContent = emailBody.innerText;

        // Change the content of the email body
        emailBody.innerText = 'hello';
    });
  }
setTimeout(thing, 5000);