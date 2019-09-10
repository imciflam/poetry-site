# poetry-site
react single page app, freelance task

### deploying react app to gh-pages

1. Install the gh-pages package from npm.
```
npm install gh-pages
```
2. Add a line of code to package.json:
```
"homepage": "https://imciflam.github.io/poetry-site",
```
3. Add  lines of code to package.json's script: 
```
"predeploy": "yarn run build",
"deploy": "gh-pages -d build",
```
4. Run npm command
```
npm run deploy
```

### deploying react app to firebase
1. Install the firebase package from npm.
```
npm install -g firebase-tools
```
2. Log into Firebase from command prompt.
```
firebase login
```
3. Initialize Firebase project.
```
firebase init
```
And then choose existing project or ```firebase use --add``` it later
4. Build Firebase project.
```
yarn build
```
5. Deploy  Firebase project.
```
firebase deploy
```
