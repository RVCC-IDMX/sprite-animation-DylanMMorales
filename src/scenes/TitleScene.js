export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    this.add.text(200, 250, 'Cat Side-Scroll Demo', { fontSize: '32px', fill: '#fff' });
    this.add.text(240, 320, 'Press SPACE to Start', { fontSize: '20px', fill: '#ccc' });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('GameplayScene');
    });
  }
}
