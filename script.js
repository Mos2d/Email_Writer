async function askGPT3() {
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
  