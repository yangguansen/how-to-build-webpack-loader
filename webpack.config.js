var path = require( 'path' );
var CleanWebpackPlugin = require( 'clean-webpack-plugin' );
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.js',

    output: {
        path: path.resolve( __dirname, './dist' ),
        filename: 'bundle.[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: {
                    loader: path.resolve( __dirname, './loaders/txt-loader/index.js' )
                }

            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin( './dist' ),

        new HtmlWebpackPlugin( {
            title: 'Output Management'
        } )
    ],
}