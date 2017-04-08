## webpack
    $npm install webpack --save-dev

## ts
    $npm install awesome-typescript-loader --save-dev 

## html
    $npm install html-webpack-plugin --save-dev
    html-webpack-plugin can insert javascript reference into the html file automatically.

## Run
    $ webpack --progress  


## Optimize
    Add script into package.json
    "scripts": {
        "build:prod": "webpack -p --progress",
    },

    # num run build:prod

## webpack-dev-server
    $ npm install webpack-dev-server --save-dev