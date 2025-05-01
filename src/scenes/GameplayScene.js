export default class GameplayScene extends Phaser.Scene {
  constructor() {
    super('GameplayScene');
  }

  preload() {
    this.load.image('bg', 'assets/images/background.png');
    this.load.spritesheet('cat', 'assets/images/cat.png', {
      frameWidth: 340,
      frameHeight: 474
    });
  }

  create() {
    this.add.image(400, 300, 'bg').setDisplaySize(800, 600);

    this.add.text(20, 20, 'Use arrow keys to move', { fontSize: '18px', fill: '#fff' });

    this.cat = this.physics.add.sprite(400, 300, 'cat').setScale(0.3);

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 200;

    if (this.cursors.left.isDown) {
      this.cat.setVelocityX(-speed);
      this.cat.setFlipX(true);
      this.cat.anims.play('walk', true);
    } else if (this.cursors.right.isDown) {
      this.cat.setVelocityX(speed);
      this.cat.setFlipX(false);
      this.cat.anims.play('walk', true);
    } else {
      this.cat.setVelocityX(0);
      this.cat.anims.stop();
    }

    if (this.cat.x < 0) { this.cat.x = 0; }
    if (this.cat.x > 800) { this.cat.x = 800; }
  }
}
