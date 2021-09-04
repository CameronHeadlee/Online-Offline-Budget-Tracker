const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './public/js/index.js',
    favorites: './public/js/db.js',
    topic: './assets/js/topic.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Busget Tracker App',
      short_name: 'Budget App',
      description: 'An application that allows you to view money spent and .',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('assets/images/icons/192x192.png'),
          sizes: [192,512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;
