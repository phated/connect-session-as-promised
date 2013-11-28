[![Build Status](https://travis-ci.org/phated/connect-session-as-promised.png?branch=master)](https://travis-ci.org/phated/connect-session-as-promised)

connect-session-as-promised
===========================

Because connect sessions depend too heavily on `this`

## Usage

Exposes `regenerate`, `destroy`, `reload` & `save` which are analogous to Connect Session methods of the same names

The only difference is that they return a promise that is resolved or rejected based on the result of the session call.

```js
var session = require('connect-session-as-promised');

app.get('/', function(req, res){
  session.regenerate(req); // analogous to req.session.regenerate(function(err){});
  session.destroy(req);    // analogous to req.session.destroy(function(err){});
  session.reload(req);     // analogous to req.session.reload(function(err){});
  session.save(req);       // analogous to req.session.save(function(err){});
});
```
