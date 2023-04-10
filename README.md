# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

External libraries
------------------------------
date-fns for formatting dates
react-table to add schedule tables and to enable sorting and search functionality, There are couple of other features can beadded like pagination and table footer which is currently not required

Implemented the following features as per the requirement
---------------------------------------------------------
1.on page load first schedule will de selected by default and related details are shown on the table
2.on click of other schedules, Schedule table will be updated with the corresponding datas
3.Schedules and scheduler table scrolls independently
4.svhedule table will be sorted on click of table column header
5.global search will allow the user to search the entire table
6.Added responsiveness with breaklpoint set to 1200px for mobile and table
7.unit tested the scheduler and table component
8.Retire and UnRetire buttons are added and button colour and text will be toggle on click.
9.json-server backend is hosted in cyclic.sh
10.frontend code is hosted in github pages