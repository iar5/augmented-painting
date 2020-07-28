const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

/* Export configuration */
module.exports = {
    mode: 'development',
    entry: './src/App.js',
    plugins: [
        new HtmlPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyPlugin([
            { from: 'public', to: '' }, 
        ])
    ], 
    devServer: {
        https: true,
        host: '0.0.0.0', // https://stackoverflow.com/questions/35412137/how-to-get-access-to-webpack-dev-server-from-devices-in-local-network
        port: 8080,
        disableHostCheck: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }, {
                test: /\.css$/,
                exclude: /[\/\\]src[\/\\]/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {loader: 'css-loader'}
                ]
            }, {
                test: /\.css$/,
                exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
            }, {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    resolve: { 
        extensions: [".web.ts", ".web.js", ".ts", ".js"] 
    },
}