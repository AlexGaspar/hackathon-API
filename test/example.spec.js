/* globals describe, it, before, after, beforeEach, afterEach */

'use strict';

var expect = require('chai').expect,
    lib = require('../lib');

describe('Example Test Suite', function () {
  var a = 0,
      b = 0;

  before(function () {
    a++;
  });

  beforeEach(function () {
    b++;
  });

  afterEach(function () {
    b = 0;
  });

  after(function () {
    a = 0;
  });

  describe('True', function () {
    it('Should equal true', function (done) {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('lib.hello', function () {
    it('Should return world', function (done) {
      expect(lib.hello()).to.equal('world!');
      done();
    });
  });

  describe('before and after hooks', function () {
    it('should increment before running tests', function () {
      expect(a).to.equal(1);
    });

    it('should not reset or increment during tests', function () {
      expect(a).to.equal(1);
    });
  });

  describe('beforeEach and afterEach hooks', function () {
    it('should increment value', function () {
      expect(b).to.equal(1);
    });

    it('should reset after each test', function () {
      expect(b).to.equal(1);
    });
  });
});
