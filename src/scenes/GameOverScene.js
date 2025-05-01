export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    this.add.text(300, 250, 'Game Over', { fontSize: '32px', fill: '#fff' });
    this.add.text(240, 320, 'Press SPACE to Restart', { fontSize: '20px', fill: '#ccc' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('TitleScene');
    });
  }
}
