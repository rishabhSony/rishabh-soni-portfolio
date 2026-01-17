const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const publicPath = isProduction
    ? '/rishabh-soni-portfolio/'
    : 'http://localhost:3000/';

  return {
    entry: './src/index.js',
    mode: isProduction ? 'production' : 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    output: {
      publicPath: publicPath,
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};

