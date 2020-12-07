## [ReactShare Project Website](https://aydinsanoz.github.io/reactshare/)

![screenshot of projects](./out.gif)
##.env file

```
REACT_APP_API_KEY=<Firebase Api>
REACT_APP_AUTH_DOMAIN="reactshare-3c3ac.firebaseapp.com"
REACT_APP_DATABASE_URL="https://reactshare-3c3ac.firebaseio.com"
REACT_APP_PROJECT_ID="reactshare-3c3ac"
REACT_APP_STORAGE_BUCKET="reactshare-3c3ac.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="54001819488"
REACT_APP_ID="1:54001819488:web:28c2eedb06377ffb5b0805"


REACT_APP_API_BASE_URL ="https://dummyapi.io/data/api"
REACT_APP_API_TOKEN =<dummp.ip Api token>


```

### easy way to deploy react App 
- - First
- 
```yarn add gh-pages```

- - Second Add below to Json File 

```json
  "name": "imdb",
  "version": "0.1.0",
  "homepage": "https://AydinSanoz.github.io/imdb-react",  // Add this and change according to your reponame 
  "dependencies": {
    "@cantonjs/react-scroll-view": "^0.4.2",
 

```

```json
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",  // Add this line
    "deploy": "gh-pages -d build"  // Add this one too
  },
```
- - Last Step 
  yarn run deploy
