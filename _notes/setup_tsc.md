## The new approach:
    add config into tsconfig.json
    "lib": [
        "es2016",
        "dom"
    ]



# OLD approach
## Use tsc installed by npm to compile .ts code
    $ npm bin  returns the full path of the commands installed in node_modules
    $(npm bin)/tsc --rootDir src --outDir dist

## Install types
    $ npm install --save-dev typings
    $(npm bin)/typings -v
    $(npm bin)/typings search core-js
    $(npm bin)/typings install --global --save dt~core-js
        This command will create typings.json and typings folder


## Add script in package.json
    "scripts":{
        "build":"tsc --rootDir src --outDir dist",
        "postinstall":"typings install"
    }
    # npm run build