const webpack = require('webpack')
const path = require('path')

const SOURCE_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

module.exports = {
    entry: `${SOURCE_DIR}/index.ts`,

    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 9000
    },

    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                include : SOURCE_DIR,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
}