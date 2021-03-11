const path = require('path');
module.exports = {
    mode: 'development',
    entry: './Sink.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Sink.js'
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
};