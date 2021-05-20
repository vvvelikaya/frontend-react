const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
      host: '127.0.0.1',
      port: 9090,
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true, 
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              // process.env.NODE_ENV !== "production"
              // ? "style-loader"
              // : 
              MiniCssExtractPlugin.loader,
              "css-loader", 
              "sass-loader"
            ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset/resource'
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: 'asset/resource',
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html'),
          inject: 'body'
        }),
        new MiniCssExtractPlugin({
          filename: './style.css'
        })
    ]
}

