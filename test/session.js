var test = require('tap').test;

var when = require('when');

var session = require('../');

function success(fn){
  fn();
}

function failure(fn){
  fn(new Error('failed'));
}

var req = {
  session: {
    regenerate: success,
    destroy: success,
    reload: success,
    save: success
  }
};

var reqFail = {
  session: {
    regenerate: failure,
    destroy: failure,
    reload: failure,
    save: failure
  }
};

test('session should define session methods', function(t){
  t.type(session.regenerate, 'function');
  t.type(session.destroy, 'function');
  t.type(session.reload, 'function');
  t.type(session.save, 'function');
  t.end();
});

test('session.regenerate should call regenerate and resolve or reject the returned promise', function(t){
  t.plan(4);
  var succeed = session.regenerate(req);
  t.ok(when.isPromise(succeed));
  succeed.then(function(data){
    t.type(data, 'undefined');
  });
  var fail = session.regenerate(reqFail);
  t.ok(when.isPromise(fail));
  fail.then(undefined, function(err){
    t.equal(err.message, 'failed');
  });
});

test('session.destroy should call destroy and resolve or reject the returned promise', function(t){
  t.plan(4);
  var succeed = session.destroy(req);
  t.ok(when.isPromise(succeed));
  succeed.then(function(data){
    t.type(data, 'undefined');
  });
  var fail = session.destroy(reqFail);
  t.ok(when.isPromise(fail));
  fail.then(undefined, function(err){
    t.equal(err.message, 'failed');
  });
});

test('session.reload should call reload and resolve or reject the returned promise', function(t){
  t.plan(4);
  var succeed = session.reload(req);
  t.ok(when.isPromise(succeed));
  succeed.then(function(data){
    t.type(data, 'undefined');
  });
  var fail = session.reload(reqFail);
  t.ok(when.isPromise(fail));
  fail.then(undefined, function(err){
    t.equal(err.message, 'failed');
  });
});

test('session.save should call save and resolve or reject the returned promise', function(t){
  t.plan(4);
  var succeed = session.save(req);
  t.ok(when.isPromise(succeed));
  succeed.then(function(data){
    t.type(data, 'undefined');
  });
  var fail = session.save(reqFail);
  t.ok(when.isPromise(fail));
  fail.then(undefined, function(err){
    t.equal(err.message, 'failed');
  });
});
