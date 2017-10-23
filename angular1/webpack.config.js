
var extractTextPlugin = require('extract-text-webpack-plugin'),
    ngAnnotateWebpackPlugin = require('ng-annotate-webpack-plugin'),
    path = require('path'),
    source = path.resolve(__dirname, 'src'),
    root = path.resolve(source, 'root'),
    vendor = path.resolve(source, 'vendor', 'vendor'),
    webpack = require('webpack');

module.exports = function(env){
  var config =  {
    context: path.resolve(__dirname, 'src'),
    entry: {
      vendor: [
        'angular',
        '@uirouter/angularjs',
        'angular-animate',
        'angular-ui-bootstrap',
        'intl-tel-input',
        'ng-intl-tel-input',
        'ngstorage-webpack',
        vendor
      ],
      app: path.resolve(root, 'root.bootstrap')
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'src', 'dist'),
      publicPath: 'dist/',
      sourceMapFilename: '[name].map'
    },
    module: {
      rules: [
        {test: /\.html$/, use: ['html-loader?interpolate=require']},
        {test: /\.scss$/,
          use: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {test: /\.woff?(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=15000&mimetype=application/font-woff"
        },
        {test: /\.woff(2)?(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=15000&mimetype=application/font-woff2"
        },
        { test: /\.(ttf|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=15000&mimetype=application/octet-stream"
        },
        { test: /\.(eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: "file-loader?name=[name].[ext]&mimetype=application/vnd.ms-fontobject"
        },
        { test: /\.(gif)$/,
          use: "url-loader?name=[name].[ext]&limit=15000&mimetype=image/gif"
        },
        { test: /\.(jpg)$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=15000&mimetype=image/jpeg"
        },
        { test: /\.(png)$/,
          use: "url-loader?name=[name].[ext]&publicPath=./&limit=15000&mimetype=image/png"
        },
        { test: /\.(svg)$/,
          use: "url-loader?name=[name].[ext]&limit=15000&mimetype=image/svg+xml"
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.jQuery': 'jquery',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new ngAnnotateWebpackPlugin({
        add: true
      }),
      new extractTextPlugin('styles.css')
    ]
  };

  if (env === 'dev') {
    config.devtool = 'eval';
    config.devServer = {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3001,
        publicPath: '/dist/',
        proxy: { '/': 'http://localhost:3000/' }
      };
  }

  if (env === 'prod') {
    config.devtool = 'source-map';
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: true,
        sourceMap: false,
        mangle: false
      })
    );
  }

  return config;
};
