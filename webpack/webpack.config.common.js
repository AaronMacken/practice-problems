const path = require('path');
const Paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(Paths.SRC_DIR, 'index.tsx'),
  output: {
    path: Paths.DIST_DIR,
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(Paths.SRC_DIR, 'components/'),
      '@context': path.resolve(Paths.SRC_DIR, 'context/'),
      '@hooks': path.resolve(Paths.SRC_DIR, 'hooks/'),
      '@utils': path.resolve(Paths.SRC_DIR, 'utils/'),
      '@constants': path.resolve(Paths.SRC_DIR, 'constants/'),
      '@customTypes': path.resolve(Paths.SRC_DIR, 'customTypes/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // in production, this might be replaced with MiniCssExtractPlugin.loader
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                auto: /\.module\.(css|s[ac]ss)$/i,
                localIdentName: '[name]-[local]--[hash:base64:5]'
              },
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(Paths.ROOT_DIR, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
};
