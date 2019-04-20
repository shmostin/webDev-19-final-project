module.exports=function (app) {

  require('./services/user.service.server.js')(app);
  require('./services/store.service.server.js')(app);
  require('./services/part.service.server')(app);
  require('./services/garage.service.server')(app);


}
