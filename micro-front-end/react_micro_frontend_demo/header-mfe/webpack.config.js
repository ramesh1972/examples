const path = require('path');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Use 'development' or 'production'
  entry: './src/main.ts', // Angular's main entry point
  output: {
    filename: '[name].[contenthash].js', // Output bundle with content hash for caching
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: '@ngtools/webpack',
        },
      },
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Transpile JavaScript using Babel
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract and load CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/, // Match image files
        type: 'asset/resource', // Emit images as separate files in the output
        generator: {
          filename: 'assets/images/[name].[hash][ext]', // Output folder for images
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: 'asset/resource', // Emit fonts as separate files in the output
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]', // Output folder for fonts
        },
      },
    ],
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, 'tsconfig.app.json'), // Specify the Angular TypeScript config
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template for the app
      inject: true, // Automatically inject scripts and styles
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Extracted CSS output filename
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Serve files from the dist folder
    },
    port: 4200, // Default Angular port
    open: true, // Automatically open the app in the browser
    hot: true, // Enable hot module replacement
    historyApiFallback: true, // Handle routing for single-page applications
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Split vendor and app code into separate bundles
    },
    runtimeChunk: 'single', // Extract runtime code into a separate chunk
  },
};
