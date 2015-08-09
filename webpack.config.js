var path = require('path');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'lib', 'index')
    ],
    output: {
        filename: 'lib.js',
        libraryTarget: 'umd',
        library: 'ajaxo',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }],
    },
};
