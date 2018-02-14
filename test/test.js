'use strict';
var expect = require('chai').expect;
var seed = require('../dist/index.js');

describe('Seed testing', () => {
    it('Should have no clue ¯\\_(ツ)_/¯', () => {
        var result = new seed.Seed();
        expect(result.type).to.equal("¯\_(ツ)_/¯");
    });
});