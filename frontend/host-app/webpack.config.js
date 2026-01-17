const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const publicPath = isProduction
    ? '/rishabh-soni-portfolio/'
    : 'http://localhost:3000/';

  return {
    entry: './src/index',
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
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};

