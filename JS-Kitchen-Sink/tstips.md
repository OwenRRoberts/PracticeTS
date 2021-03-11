Starting a TS project
***TSC/initial setup***
- run `npm init -y`
- run `npm install typescript --save`
- add `"dev":"tsc -w"` to `scripts` section of `package.json`
    - this is so when you launch proj with `npm run dev`, it will have something to run (tsc)
- run `tsc --init` to create `tsconfig.json`
- test `npm run dev` in the terminal
 - if a `.js` version of your `.ts` file is made, and no errors other than type errors appear;
    - change `dev` in the `package.json` to `"dev":"webpack -w"`  
////
***Webpack***
make a file called `webpack.config.js` in root project folder
- paste in the following

```const path = require('path');
module.exports = {
    mode: 'development',
    entry: './hello.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};```

- run `npm i webpack webpack-cli ts-loader`
- test if working by running `npm run dev`