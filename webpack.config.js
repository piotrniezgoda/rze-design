/* eslint-disable global-require */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/assets/js/index.js',
    particles: './src/assets/js/load-particles.js',
    accordion: './src/assets/js/accordion.js',
    gallery: './src/assets/js/galleryInit.js',
  },
  mode: 'development',
  output: {
    filename: 'assets/js/[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css',
      chunkFilename: 'assets/css/[id].css',
    }),
    new CopyPlugin([
      { from: 'src/assets/images/galeria/', to: 'assets/images/galeria/' },
      { from: 'src/assets/images/prace/', to: 'assets/images/prace/' },
      { from: 'src/assets/images/favicons/', to: 'assets/images/favicons/' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // disable style-loader when create production version
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '/',
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          { loader: 'extract-loader' },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
  },
};
