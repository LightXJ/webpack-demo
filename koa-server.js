const Koa = require('koa');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const koaWebpack = require('koa-webpack');

const app = new Koa();

const compiler = webpack(config);
const start = async ()=>{
  const middleware = await koaWebpack({
    compiler,
    hotClient: {
      allEntries: true,
    } 
  });

  app.use(middleware);
}
start();

app.listen(3002, ()=>{
  console.log('server is running at 3002');
});