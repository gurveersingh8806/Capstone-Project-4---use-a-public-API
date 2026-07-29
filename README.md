# Capstone Project 4 — Use a Public API

A small web project that consumes a public API and demonstrates data fetching, rendering, and basic interactivity using Express and EJS.

## What I changed

- Removed the non-working direct GitHub Pages/live demo link.
- Replaced the quick-start instructions with clear, repeatable steps to install dependencies and run the server locally (including commands like `npm i` and `npx nodemon index.js`).

---

## Prerequisites

- Node.js (v14+ recommended) and npm installed. Check with:

```
node -v
npm -v
```

## Install

1. Clone the repository:

```
git clone https://github.com/gurveersingh8806/Capstone-Project-4---use-a-public-API.git
cd Capstone-Project-4---use-a-public-API
```

2. Install dependencies:

```
npm install
```

(Alternatively: `npm i`)

## Run the project

There are two common ways to run the server locally:

- Development (auto-restarts on file changes) using nodemon:

```
npx nodemon index.js
```

- Production / simple run using node:

```
node index.js
```

Note: `nodemon` is listed in devDependencies for this project; running `npx nodemon index.js` works without a global install. If you prefer a package.json script, add these to `package.json` under `scripts`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Then run `npm run dev` for development or `npm start` for production.

## Default port

By default the server listens on the port defined in `index.js` (commonly 3000 or process.env.PORT). If the code uses `process.env.PORT`, you can run the server on a custom port like this:

```
PORT=5000 node index.js
```

or on Windows (PowerShell):

```
$env:PORT=5000; node index.js
```

## How to test

- Open your browser at http://localhost:PORT (replace PORT with the port printed by the server or 3000 if that is the default).
- The app uses a public API — ensure you have an internet connection. If the project requires any API keys, add them as environment variables or in a `.env` file as documented in the project (if applicable).

## Troubleshooting

- If the server fails to start, check the terminal for errors and ensure dependencies installed successfully.
- If an error mentions an unknown command `nodemon`, run `npx nodemon index.js` or install nodemon globally with `npm i -g nodemon`.

## Contributing

Contributions are welcome. Open an issue or submit a PR with improvements.

## License

Include your preferred license (e.g., MIT).
