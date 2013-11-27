var when = require('when');
var nodefn = require('when/node/function');

var sessionMethods = 'regenerate destroy reload save'.split(' ');

var methods = module.exports = {};

sessionMethods.forEach(function(name){
  methods[name] = function(req){
    var defer = when.defer();
    req.session[name](nodefn.createCallback(defer.resolver));
    return defer.promise;
  };
});
