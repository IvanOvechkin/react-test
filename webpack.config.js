const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const setPlugins = () => {
  let defaultPlugins = [];
  defaultPlugins.push(new CleanWebpackPlugin());

  const arrayProd = [
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: "./index.html",
      minify: true
    }),
    new HtmlWebpackPlugin({
      filename: 'tasks.html',
      template: "./index.html",
      minify: true
    })
  ];

  const arrayDev = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./index.html"
    })
  ];

  if(isDev) {
    return defaultPlugins.concat(arrayDev);
  } else {
    return defaultPlugins.concat(arrayProd);
  }
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  entry: {
    profile: ["@babel/polyfill", './index.js'],
    tasks: ["@babel/polyfill", './pages/tasks.js'],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: setPlugins(),
  devtool: isDev ? 'source-map' : false,
  optimization: {
    minimize: isProd
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
    ]
  }
};
