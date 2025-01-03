# Watch List App

This app displays a collection of TV Series and Movie posters that I have on my list to watch.
While it's clear from the posters what's on my list, the app isn't very visually appealing.
Your task will be to update some files in this repo (`.css`, `.js`, and `.test.js`) by
1. asking questions to `GitHub Copilot Chat` in `VSCode`
2. implementing the suggestions generated
3. essentially making the app more visually appealing!
Please read on for more details!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Commands

`npm i`
- Install dependencies

`npm start`
- Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.
You may also see any lint errors in the console.

`npm test`
- Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Using Copilot

In VSCode, ensure you have the following [extensions installed](https://code.visualstudio.com/docs/editor/extension-marketplace):
1. GitHub Copilot
2. GitHub Copilot Chat

Once installed, we want to start using the GitHub Copilot Chat.

At the top of your VSCode window, there is a search bar.
To the right, there's an icon from GitHub Copilot Chat, that when you hover over it says `Open Chat`. 
Click it to Open the Copilot Chat.
You can start typing your prompts here.

## To Do

Using the Copilot chat _only_, write (and record in your notes) prompts that will:
1. Make the App look like this

Desktop view | Responsive
--- | ---
![desktop](./public/expected/desktop.png?raw=true "Desktop") | ![responsive](./public/expected/responsive.png?raw=true "Responsive")

2. Make all tests pass

```
 PASS  src/App.test.js
  ✓ header renders (65 ms)
  ✓ Gallery component is defined

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.533 s
Ran all test suites related to changed files.
```

The goal is to complete the above tasks as quickly as possible, using GitHub Copilot Chat. Ask it questions, then receive and implement the answers in your code. Make sure to keep a record of the questions you asked so that we can go over it together at the end of the exercise.
