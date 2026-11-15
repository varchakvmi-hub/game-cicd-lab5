const test = require('node:test');
const assert = require('node:assert');
const GameEngine = require('./game.js');

test('Нарахування очок при влучанні у ворога', () => {
  const game = new GameEngine();
  game.hitEnemy(25);
  assert.strictEqual(game.score, 25);
});

test('Отримання урону та завершення гри при 0 HP', () => {
  const game = new GameEngine();
  game.takeDamage(100);
  assert.strictEqual(game.health, 0);
  assert.strictEqual(game.isGameOver, true);
});
