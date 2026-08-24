const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash:8].js',
    assetModuleFilename: 'static/media/[name].[contenthash:8][ext][query]',
    publicPath: '/',
    clean: true,
  },
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico|woff2?|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: { ignore: ['**/index.html'] },
        },
      ],
    }),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'public') },
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});