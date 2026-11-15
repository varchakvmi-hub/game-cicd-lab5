class GameEngine {
  constructor() {
    this.score = 0;
    this.health = 100;
    this.isGameOver = false;
  }

  hitEnemy(points = 10) {
    if (this.isGameOver) return;
    this.score += points;
  }

  takeDamage(damage) {
    if (this.isGameOver) return;
    this.health = Math.max(0, this.health - damage);
    if (this.health === 0) {
      this.isGameOver = true;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = GameEngine;
}
