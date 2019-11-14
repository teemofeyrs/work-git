const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: "./src/public/javascript/index.js",

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "main.js"
    }
};