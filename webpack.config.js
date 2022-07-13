const path = require('path');

module.exports ={
    mode: "development",
    entry:  {
        main:path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:'[name].js'
    },
    devServer: {
        static:  {
            directory: path.resolve(__dirname,"dist")
        },
        port:8080,
        open:true,
        hot:true,
        compress:true,
      },
}