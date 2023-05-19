document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("modifyBtn");
    var span = document.getElementsByClassName("close")[0];
    var textarea = document.getElementById("outputText");
    var copyBtn = document.getElementById("copyBtn");

    // initially hide the button
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
        modal.style.display = "block";
    });

    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
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
    if (outputTextArea.value == '') {
        send();
    } else {
        console.log("Are you sure you want to overwrite?");
    }
}

async function send() {
    const question = document.getElementById('inputText').value;
  
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
    
    document.getElementById('outputText').value = answer;
}
  
async function modifyEmail() {
    const email = document.getElementById('outputText').value;
    const modify = document.getElementById('inputText').value;
    const question = '"' + email + '"' + modify; 
  
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
    
    document.getElementById('outputText').value = answer;
}