'use strict'

describe('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('Rolls a Gutter Game', function() {
    for(var i = 0; i < 20; i++)
    expect(game.finalScore()).toBe(0)
  });

  it('Rolls all ones', function() {
    for(var i = 0; i < 20; i++)
    expect(game.finalScore()).toBe(20)
  });

});
