const path = require('path');
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/',
        compress: true,
        hot: true
    }
});
