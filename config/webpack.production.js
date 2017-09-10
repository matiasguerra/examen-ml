const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, '../client');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: CLIENT_DIR,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `bundle.css`
        })
    ]
};
