# High Score

Create a React component called HighScoreApp that consists of:

1. A button, which adjusts the users score by a number between -100 and 100 when clicked
2. A display of the current score
3. An input field, labeled 'Name', where the user can type their name
4. A submit button that will make a POST request (to dummy endpoint here) to save their score, name, and number of times they clicked to reach that score

**Caveat: the user can only click a maximum of 10 times before submitting their score; once they submit their score, the click counter gets reset to 0 and the name gets to empty text.**

## Take-home exercise

First, set up a React app in a Github repo, and move your starter code from the in-person exercise there.

Then, complete any part of the previous exercise that didn't get finished during the in-person interview. Please commit these changes so we can review the first milestone.

Continue with additional requirements:

1. Style the page
2. Add messaging to let the user know how many clicks they have left, and if they have reached the maximum number of 10 clicks.
3. Add a dummied data fetch, assuming that the API service will send you the proper data as an array of objects. The results will NOT be sorted.

   Example:

   ```json
   [
     { "name": "Jane Doe", "totalPoints": 157, "clicks": 5 },
     { "name": "Lily Allen", "totalPoints": 234, "clicks": 8 },
     { "name": "John Smith", "totalPoints": 390, "clicks": 10 }
   ]
   ```

4. Display a leaderboard table of the top 10 total points scores, showing:: name, score, number of clicks, average points per click.
5. Create a real-time update of the table, so that if the person playing achieves a score that puts them in the leaderboard, show their position in the table (they still need to click `Send it!` button to save their score), and adjust other positions accordingly (knocking the lowest score out of the display)
6. Write a couple tests, and note why you chose to cover these particular areas of code.
7. Pay special attention to user-friendliness by providing error feedback and making it easy to use the app. E.g. if a score can't be submitted, let the user know why.

Option: Developer's choice
If you'd like - rather than limiting the number of clicks to 10 and prevent additional button clicks, reset the points counter to 0 on every 10th click of the button. Provide a brief explanation in comments what are the pros and cons of each restriction, in terms of usability and user experience.

Bonus:

- Give the user the option to toggle the table display between the top 10 total points, or the top 10 avg points per click. Add whatever UI elements/messaging are necessary to accomplish this.
- Make the app responsive then user can use different devices.
- What API parameters would you request be made available, to optimize data processing on the front end? Assume those parameters are made available to you, and incorporate them into your code.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
