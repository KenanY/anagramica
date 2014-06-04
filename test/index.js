var anagramica = require('../');
var test = require('tape');
var isPlainObject = require('lodash.isplainobject');
var isFunction = require('lodash.isfunction');
var isNull = require('lodash.isnull');

test('exports an object with three functions', function(t) {
  t.plan(4);
  t.ok(isPlainObject(anagramica));
  t.ok(isFunction(anagramica.best));
  t.ok(isFunction(anagramica.all));
  t.ok(isFunction(anagramica.lookup));
});

test('best', function(t) {
  t.plan(4)
  anagramica.best(['b', 'r', 'e', 'a', 'd'], function(error, response) {
    t.ok(isNull(error));
    t.deepEqual(response, {'best': ['bared', 'beard', 'bread', 'debar']});
  });
  anagramica.best('bread', function(error, response) {
    t.ok(isNull(error));
    t.deepEqual(response, {'best': ['bared', 'beard', 'bread', 'debar']});
  });
});

test('all', function(t) {
  t.plan(4)
  anagramica.all(['b', 'r', 'e', 'a', 'd'], function(error, response) {
    t.ok(isNull(error));
    t.deepEqual(response, {'all': ['bared', 'beard', 'bread', 'debar']});
  });
  anagramica.all('bread', function(error, response) {
    t.ok(isNull(error));
    t.deepEqual(response, {'all': ['bared', 'beard', 'bread', 'debar']});
  });
});

test('lookup', function(t) {
  t.plan(2)
  anagramica.lookup('bread', function(error, response) {
    t.ok(isNull(error));
    t.deepEqual(response, {'found': 1});
  });
});