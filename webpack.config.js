const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const minicssextractplugin = require('mini-css-extract-plugin');


module.exports={
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
  },
  mode:'development',
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.html$/,
        use:{
          loader:'html-loader'
        }
      },
      {
        test:/\.css$/,
        use:[
            'style-loader',
            'css-loader'
          ]
      }
    ]
  },
  plugins:[
    new htmlwebpackplugin({
      template:'./src/public/index.html',
      filename:'./index.html'
    }),
    new minicssextractplugin({
      filename:'[name].css'
    })
  ]
}