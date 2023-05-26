document.addEventListener('DOMContentLoaded', (event) => {
    var modify_popup = document.getElementById("modify-popup");
    var confirm_popup = document.getElementById("confirm-popup");
    var btn = document.getElementById("modifyBtn");
    var span = document.getElementsByClassName("close")[0];
    var textarea = document.getElementById("outputText");
    var copyBtn = document.getElementById("copyBtn");
    var loader = document.getElementById('loaderBG');
    
    // initially hide the button
    loader.style.display = "none";
    btn.style.display = "none";
    copyBtn.style.display = "none";
    
    // set up an input event listener for the textarea
    textarea.addEventListener("input", function() {
        if (textarea.value.trim() !== '') {
            // if the textarea is not empty, show the button
            btn.style.display = "block";
            copyBtn.style.display = "block";
        } else {
            // if the textarea is empty, hide the button
            btn.style.display = "none";
            copyBtn.style.display = "none";
            
        }
    });

    btn.addEventListener("click", function() {
        modify_popup.style.display = "block";
    });

    span.addEventListener("click", function() {
        modify_popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modify_popup) {
            modify_popup.style.display = "none";
        }
    });

    copyBtn.addEventListener("click", function() {
        // select the textarea's content
        textarea.select();
        // copy the selected text
        document.execCommand("copy");
    });
});

function askGPT3() {
    const outputTextArea = document.getElementById('outputText');
    const confirm_popup = document.getElementById('confirm-popup');

    if (outputTextArea.value == '') {
        send();
    } else {
        confirm_popup.style.display = "block";
    }
}

function overwrite() {
    const confirm_popup = document.getElementById("confirm-popup");
    confirm_popup.style.display = "none";

    const outputTextArea = document.getElementById('outputText');
    outputTextArea.value = '';
    askGPT3();
}

async function send() {
    var btn = document.getElementById("modifyBtn");
    var copyBtn = document.getElementById("copyBtn");
    var question = document.getElementById('inputText').value;
    var loader = document.getElementById('loaderBG');

    loader.style.display = "inline-block";
    const response = await fetch('http://localhost:3000/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: question
      })
    });

    const answer = await response.text();
    loader.style.display = "none";
    document.getElementById('outputText').innerText = answer;
    btn.style.display = "block";
    copyBtn.style.display = "block";
}
  
async function modifyEmail() {
    var btn = document.getElementById("modifyBtn");
    var copyBtn = document.getElementById("copyBtn");
    var email = document.getElementById('outputText').value;
    var modify = document.getElementById('inputText').value;
    var question = '"' + email + '"' + modify; 
    var loader = document.getElementById('loaderBG');
    var modify_popup = document.getElementById("modify-popup");
    modify_popup.style.display = "none";
  
    loader.style.display = "inline-block";
    const response = await fetch('http://localhost:3000/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: question
      })
    });
  
    var answer = await response.text();
    loader.style.display = "none";
    
    document.getElementById('outputText').value = answer;
    btn.style.display = "block";
    copyBtn.style.display = "block";
}