const webpack = require('webpack');
const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, '../client');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000/'
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                include : CLIENT_DIR,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: true,
        open: true,
        port: "3000",
        publicPath: '/dist',
        proxy: {
            '*': 'http://localhost:5001'
        }
    }
};
