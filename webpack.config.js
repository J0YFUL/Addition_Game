const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist')   
  },
  node: {
    fs: 'empty'
  },
  plugins: [   
    new webpack.DefinePlugin({
      DEPLOYED_ADDRESS: JSON.stringify(fs.readFileSync('deployedAddress', 'utf8').replace(/\n|\r/g, "")),
      DEPLOYED_ABI: fs.existsSync('deployedABI') && fs.readFileSync('deployedABI', 'utf8'),
<<<<<<< HEAD
    }),
=======
     }),
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html"}])
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true }
}