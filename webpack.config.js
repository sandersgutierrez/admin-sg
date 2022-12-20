'use strict'

const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        mode: process.env.NODE_ENV || env.NODE_ENV || 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve('dist'),
        },
        devtool: 'inline-source-map',
        devServer: {
            static: [path.resolve('./src/assets')],
            compress: true,
            port: process.env.PORT || env.PORT,
        },
        module: {
            rules: [
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'AdminSG',
                template: './src/templates/index.hbs',
                scriptLoading: 'defer',
                inject: 'body',
            }),
        ],
    }
}
