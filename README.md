# Capstone Project 4 — Use a Public API

Simple Express + EJS web app that consumes a public API and demonstrates fetching data, rendering views, and basic interactivity.

## Features
- Fetches data from a public API and displays results using server-rendered EJS templates
- Minimal Express server with a single entry point (index.js)
- Development helper scripts (nodemon)

## Prerequisites
- Node.js v14+ and npm

## Quick Start
1. Clone the repo:

   git clone https://github.com/gurveersingh8806/Capstone-Project-4---use-a-public-API.git
   cd Capstone-Project-4---use-a-public-API

2. Install dependencies:

   npm install

3. Development (auto-restart on changes):

   npm run dev

   Production / simple run:

   npm start

(If `dev` or `start` scripts are not present, you can run `npx nodemon index.js` or `node index.js`.)

## Configuration
- PORT: optional environment variable to set the server port (default in index.js is usually 3000).
- If the app requires any API keys, add them as environment variables or in a `.env` file (and do not commit `.env`).

Example (macOS / Linux):

   PORT=5000 npm start

Example (PowerShell):

   $env:PORT=5000; npm start

## How to use
- Open http://localhost:<PORT> (defaults to 3000 if not set).
- The app fetches data from a public API — ensure your machine has internet access.

## Troubleshooting
- If `nodemon` is not found, run it with `npx nodemon index.js` or install it globally: `npm i -g nodemon`.
- Check the terminal output for errors if the server fails to start.

## Contributing
PRs and issues are welcome — please open an issue to discuss larger changes.

## License
MIT — include a LICENSE file if you want to publish the license.
