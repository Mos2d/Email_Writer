import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

const openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.API_KEY
    })
)

const input1 = document.getElementById('inputText');
const btn1 = document.getElementById('submitButton');
const output1 = document.getElementById('outputText');

function writeEmail() {
    console.log("Hello, man!");
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input1.ariaValueText }]
    })
    .then (res => {
        output1.innerHTML = res.data.choices[0].message.content;
        console.log(res.data.choices[0].message.content);
    })
}

btn1.addEventListener('click', writeEmail);