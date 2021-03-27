'use strict'
const koa = require('koa')
const koaRouter = require('koa-router')
const config = require('./config').getConfig()
const logger = require('./logger')
const openhim = require('./openhim')
var request = require('request')
var auth = require('./auth');
const app = new koa()
const router = new koaRouter()
router.get('/',(ctx, next) => {
    let response = request({
      url: process.env.OPENIMIS_URL+'/ClaimResponse/',
      method: 'GET',
      headers : {
        "Authorization":auth.user
      }
    }, function(error, response, body){
        return sendValuatedClaims(JSON.parse(body).entry)
    });
    ctx.body=response
    next();
  })
   let sendValuatedClaims=function(data){
    return  request({
      url:process.env.SOSYS_URL,
      method: 'POST',
      json:data
    }, function(error, response, body){
      console.log(body);
      return body
    });
}

app.use(router.routes())
app.listen(config.port, () => {
    logger.info(`Server listening on port ${config.port}...`)
    if (config.openhim.register) {
      openhim.mediatorSetup()
    }
  })