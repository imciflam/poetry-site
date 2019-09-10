# poetry-site
### react single page app, freelance task

deploying react app to gh-pages

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
