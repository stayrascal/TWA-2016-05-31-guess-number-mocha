//import {expect} from 'chai';
var chai = require('chai');
//var assert = chai.assert;
var assert = require('assert');
var should = chai.should();
var expect = chai.expect;
var Comparer = require('../src/Comparer.js');
describe('Test compare result', function () {
    var comparer = new Comparer();
    it('Should return true and 4A4B when random number is 1234 and compare number is 1234', function () {
        var expected = comparer.compare('1234', '1234');

        assert.equal(expected.message, '4A4B');
        assert.equal(expected.status, true);

        expected.message.should.equal('4A4B');
        expect(expected.message).to.equal('4A4B');
    });

    it('Should return true and 0A4B when random number is 1234 and compare number is 4321', function () {
        var expected = comparer.compare('1234', '4321');
        assert.equal(expected.message, '0A4B');
        assert.equal(expected.status, false);
    });

    it('Should return true and 0A0B when random number is 1234 and compare number is 5678', function () {
        var expected = comparer.compare('1234', '5678');
        assert.equal(expected.message, '0A0B');
        assert.equal(expected.status, false);
    });

    it('Should return true and 2A2B when random number is 1234 and compare number is 5634', function () {
        var expected = comparer.compare('1234', '5634');
        assert.equal(expected.message, '2A2B');
        assert.equal(expected.status, false);
    });
});