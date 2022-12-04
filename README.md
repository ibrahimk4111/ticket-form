# `How to deploy react app on github`

## fistly push your code on github successfully.

## After that Open the VSCODE terminal:

Step-1:

npm install gh-pages --save-dev

Step-2:  Open 'package.json' file and write:

            "homepage": "https://{User Name}.github.io/{App Name}"
            
            "scripts": {
                "predeploy": "npm run build",
                "deploy": "gh-pages -d build",
                }
            
Step-3:

npm run deploy

## Then go to your github Repository:
Step-4:

setting>pages

Step-5:

Click on available link there.
