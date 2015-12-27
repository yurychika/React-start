var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                  'presets': ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ],
        fallback: path.join(__dirname, "node_modules")
    }
};