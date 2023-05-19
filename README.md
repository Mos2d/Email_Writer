# My OpenAI Chatbot

This is a simple project that demonstrates how to integrate OpenAI's GPT-3.5-turbo chat model into a website using Express.js, Node.js, and OpenAI's JavaScript client library. It communicates with the frontend using an API endpoint.

## Prerequisites

Before you can run this project, you need the following:

1. **Node.js and npm:** Node.js is a JavaScript runtime that lets you run JavaScript on your server. npm is a package manager for Node.js. You can download both from the [official Node.js website](https://nodejs.org/).

2. **OpenAI API Key:** You need an API key from OpenAI to use their GPT-3.5-turbo chat model. This API key should be kept secret. You can get it from the [OpenAI website](https://beta.openai.com/). Please note that using OpenAI's API is a paid service, and charges apply based on the amount of usage. Make sure to read and understand OpenAI's pricing details and terms of use before using their service.

## Installation

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.

```
git clone https://github.com/Mos2d/Email_Writer
```
2. **Install Dependencies:** Navigate into the project directory and install the necessary dependencies using npm.

```
cd my-openai-chatbot
npm install
```

This project depends on several npm packages:

* `express`: A web framework for Node.js.
* `cors`: A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* `openai`: OpenAI's official client library for JavaScript.
* `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

3. **Configure the OpenAI API Key:** Create a `.env` file in the root of your project directory and add your OpenAI API key to it.

```
OPENAI_API_KEY=your-openai-api-key
```

Replace `your-openai-api-key` with your actual OpenAI API key.

## Running the Project
After you've installed the dependencies and configured your API key, you can start the project:

```
node ./server/server.js
```
This will start the server, and it will begin listening for requests.

