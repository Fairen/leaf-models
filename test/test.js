'use strict';
var expect = require('chai').expect;

// Direct import test
var seed = require('../dist/barn/seed');

describe('[Direct import] Seed testing', () => {
    it('Should have no clue ¯\\_(ツ)_/¯', () => {
        var result = new seed.Seed();
        expect(result.type).to.equal("¯\_(ツ)_/¯");
    });
});

// Module import test
var barnModule = require('../dist/barn/barn-module');

describe('[Module import] Seed testing', () => {
    it('Should have no clue ¯\\_(ツ)_/¯', () => {
        var result = new barnModule.Seed();
        expect(result.type).to.equal("¯\_(ツ)_/¯");
    });
});

// Package import test
var nodeModule = require('../dist/index');

describe('[Package import] Seed testing', () => {
    it('Should have no clue ¯\\_(ツ)_/¯', () => {
        var result = new nodeModule.Seed();
        expect(result.type).to.equal("¯\_(ツ)_/¯");
    });
});