## [ReactShare Project Website](https://aydinsanoz.github.io/reactshare/)

![screenshot of projects](./out.gif)
##.env file

```
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_ID=
REACT_APP_API_TOKEN=

REACT_APP_API_BASE_URL =
REACT_APP_API_TOKEN =
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
