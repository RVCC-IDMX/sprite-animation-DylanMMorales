import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
import GameplayScene from './scenes/GameplayScene';
import GameOverScene from './scenes/GameOverScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [TitleScene, GameplayScene, GameOverScene]
};

new Phaser.Game(config);
