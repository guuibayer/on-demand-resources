const webpack = require('webpack')
const path = require('path')

const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
    entry: {
        app: `${APP_DIR}/index.js`,
    },
    output: {
        publicPath: '/',
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js'],
        modules: [ APP_DIR ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include : APP_DIR,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
}