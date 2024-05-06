Candidate Job Application 

Summary

This is react based candidate job application  is  designed to help users specifically Skilled Professionals to search and apply for jobs effectively.

It utilizes Redux for state management and Material UI for  user interface

It provides functionality such as filtering jobs based on various criteria such as Roles, Number Of Employees, Experience, Location, Remote, Min Base Pay Salary, Search Company Name.

I have also add  infinite scrolling for job listings.

Features

Dynamic Job Search: Users can search for jobs using filters like Roles, Number Of Employees, Experience, Location, Remote, Min Base Pay Salary, Search Company Name.
Infinite Scrolling: Enhances user experience by loading jobs as the user scrolls, reducing initial load times.
Responsive Design: The application is fully responsive, providing an optimal browsing experience on both desktops and mobile devices.

Folder Structure
Below is the project's directory structure:

|-- /public/                   # contains index.html
    |-- index.html                 
|-- /src/                   
    |-- Home.js          # contains logic for fetching, filtering the state of job listings in application.
    |-- /redux            # configures and exports the Redux store, integrating reducers  like jobsReducer 
        |--store.js
        |--companyNameFilterSlice.js  
    |-- App.js
    |-- index.js
|-- README.md    # contains details and well documentation for the project abd how to use the project



Tech Stack Used

React.js :  It is used as frontend Framework
Redux :  It is used for fetching Api,filtering and managing states
Material Ui : It is used for Creating better user-friendly UI
css : It's make the styling of the project well and good.

How to run the project
This guide will walk you through setting up this React project on your local machine.

Installation
Follow these steps to get your development environment running:

Clone the Repository

Clone this repository to your local machine using the following command:

git clone https://github.com/Farjana1khan/candidate-job-application.git
Go to Project Directory

cd ./candidate-job-application
install necessary packages and get node_modules folder

npm i
Start the Development Server

npm start
This will start the local server, usually on port 3000. Your default web browser should open automatically to http://localhost:3000. If it doesn't, you can manually open a browser and enter this URL.




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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



