# Deviget code challenge

<p align="center">
  <img src="https://sm.ign.com/ign_es/screenshot/default/reddit-logo-full-1_75xh.png" width="400">
</p>

### Reddit top posts UI Test using React + Redux with [Create React App](https://github.com/facebook/create-react-app)..

## Table of Contents
- [Deliverables](#deliverables)
- [Setting up](#setting-up)
- [Steps](#steps)
- [Developed with](#developed-with)
- [Authors](#authors)

## Deliverables 

Create a simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

The app should be able to show data from each entry such as:

```
- Title (at its full length, so take this into account when sizing your cells)
- Author
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status
```

In addition, for those having a picture (besides the thumbnail), please allow the user to tap on the thumbnail to be sent to the full sized picture.

## Setting up

- Pagination support
- Saving pictures in the picture gallery
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it’s selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design

## Steps 

Clone this repository (`git clone git@github.com:matextrem/deviget-reddit-challenge.git`)
 
 NODE_VERSION >= 10
 
```bash
 cd deviget-reddit-challenge
 npm install
 npm run build
 npm run start  //This will open a browser window on http://localhost:3000
 
 ```
## Developed with

* [ReactJS](https://reactjs.org/) - Libreria utilizada para el desarrollo del frontend.
* [Redux](https://github.com/reduxjs/redux) - A predictable state container for JavaScript apps.
* [Material-UI](https://material-ui.com/) - React components for faster and easier web development.
* [Jest](https://jestjs.io/) - JavaScript Testing Framework.
* [Now](https://zeit.co/) - Tool for deploying websites in an easy way.
* [Reddit API](http://www.reddit.com/dev/api) - Reddit API documentation.

## Authors

* **Matias Dastugue**
