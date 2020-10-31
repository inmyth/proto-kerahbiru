module.exports = {
  apps : [{
    name        : "hapi",
    script      : "node",
    args        : "./devapi/hapi.js"
  },{
    name       : "serve",
    script     : "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
    args       : "serve"
  }]
}
