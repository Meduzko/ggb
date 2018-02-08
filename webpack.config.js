var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        //path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};