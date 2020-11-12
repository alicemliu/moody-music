# Moody Music

Moody Music is a web app that uses color to generate a personalized playlist based on your Spotify listening history.

You can view it at [https://moodymusicapp.herokuapp.com](https://moodymusicapp.herokuapp.com).

## How It Works

Moody Music is built with [create-react-app](https://github.com/facebook/create-react-app) and [Spotify's Web API](https://developer.spotify.com/documentation/web-api/). It runs completely client-side and is deployed on Heroku.

Spotify authorization is handled using [implicit grant flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow), meaning that all account authorization happens in your browser and no account data is being stored by Moody Music. Because of this, tokens expire after an hour, which is why you might be promoted to log in again after periods of inactivity.

The app uses Spotify's [Recommendations API](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/) to generate the playlist's tracks. It's seeded using your top artists, and the mood is adjusted based on your color selection by tuning various audio features.

Although I used Spotify's API, I'm not affiliated with Spotify.

## Running Locally

This app runs on Node.js. Before getting started, make sure you have [Node.js and npm](https://www.npmjs.com/get-npm) installed.

Fork or clone this repository to your local machine, then install dependencies to your local node_modules folder:

    $ npm install

### Using Spotify Developer Credentials

In order to run your own builds, you'll need to get your own Spotify developer credentials. Login to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and create an app. 

For a local build, you can use `http://localhost:3000/` for the website and redirect URI.

Next, copy the Client ID and Redirect URI into `src/config.js` as `CLIENTID` and `REDIRECTURI`.

### Scripts

To run the app in development mode:

    $ npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the app for production:

    $ npm run build

It correctly bundles React in production mode, optimizes the build for the best performance, and is ready to be deployed!
