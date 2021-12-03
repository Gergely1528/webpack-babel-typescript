
  var path = require('path');
  const NodemonPlugin = require('nodemon-webpack-plugin')
module.exports = {
    // Change to your "entry-point".
    entry: ['./server'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server-bundle.js',
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [new NodemonPlugin()]
};