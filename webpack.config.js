const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const CLIENT_DIR = path.resolve(__dirname, 'client');

const commonConfig = {
    entry: [
        path.join(CLIENT_DIR, 'index.js')
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: `bundle.js`
    },
    module: {
        rules: [
            {
                test : /\.jsx?/,
                include : CLIENT_DIR,
                use : ['babel-loader']
            },
            {
                test: /\.pug$/,
                use:  ['pug-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include : CLIENT_DIR,
                use: [
                    {
                        loader: 'file-loader',
                        options: {outputPath: '/dist'}
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = (env) => {
    const envConfig = require(`./config/webpack.${env}`);
    return webpackMerge(commonConfig, envConfig);
};

