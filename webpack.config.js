var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPlugin = require('webpack');
const Dotenv = require('dotenv-webpack');

var setupApi =function (){
    switch(process.env.NODE_ENV){
        default:
            apiHost= "'http://localhost:8080/'";
            break;
    }
};
setupApi();
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
        }),
        new Dotenv()
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    }
}