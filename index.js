module.exports = function (app, options) {
  if(options.enable) {
    require("babel/register")(options);  
  }
};
