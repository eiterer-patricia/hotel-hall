import { Input } from 'phaser';
import { getGameWidth, getGameHeight } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  public speed = 100;
  
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private image: Phaser.Physics.Arcade.Sprite;
  
  
  constructor() {
    super(sceneConfig);           
  }
  
  public create(): void {
    // Background
    this.image = this.physics.add.staticSprite(getGameWidth(this) / 2, getGameHeight(this) / 2, 'background');    

    // Add a player sprite that can be moved around. Place him in the middle of the screen.
   var player =  this.image = this.physics.add.sprite(235, 590, 'man');  

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

    // This is a nice helper Phaser provides to create listeners for some of the most common keys.
    this.cursorKeys = this.input.keyboard.createCursorKeys();  

    var porta1 = this.physics.add.staticSprite (608, 378, 'passagem_portas');
    var porta2 = this.physics.add.staticSprite (988, 378, 'passagem_portas');
   
    var platforms = this.physics.add.staticGroup();
   
    platforms.create(225, 323, 'balcao');
    platforms.create(911, 247, 'cadeira_qto2');
    platforms.create(776, 225, 'cama_qto1');
    platforms.create(1092.5, 270, 'cama1_qto2');
    platforms.create(1207, 278, 'cama2_qto2');
    platforms.create(1207, 180, 'cama3_qto2');
    platforms.create(873, 155, 'criado_mudo_qto2');
    platforms.create(447, 150, 'espaco_entre_comodos');
    platforms.create(823, 161, 'espaco_entre_quartos');
    platforms.create(544.5, 105, 'lareira_qto1');
    platforms.create(870,263, 'mesa_qto2');
    platforms.create(1125,408, 'parede_corredor1');
    platforms.create(797,410, 'parede_corredor2');
    platforms.create(500,410, 'parede_corredor3');
    platforms.create(265,593, 'parede_entrada_dir1');
    platforms.create(200,608, 'parede_entrada_esq');
    platforms.create(240,627, 'parede_entrada_inf1');
    platforms.create(427,258, 'parede_hall_lateral_dir');
    platforms.create(395,76, 'parede_hall_superior');
    platforms.create(1089,306, 'parede_inferior_qto2');
    platforms.create(550,305, 'parede_inferior1_qto1');
    platforms.create(689,306, 'parede_inferior2_qto1');
    platforms.create(930,306, 'parede_inferior1_qto2');
    platforms.create(748,574, 'parede_inferior1');
    platforms.create(1234,528, 'parede_lateral_dir1');
    platforms.create(143,466, 'parede_lateral_esq1');
    platforms.create(180,574, 'parede_lateral_infesq1');
    platforms.create(467,254, 'parede_lateral_qto1');
    platforms.create(1234,234, 'parede_lateral_qto2');
    platforms.create(719,78, 'parede_superior_qto1');
    platforms.create(1040,78, 'parede_superior_qto2');
    platforms.create(845,195, 'parede1_entre_qtos');    
    platforms.create(246,153, 'recepcao');
    platforms.create(935,220, 'roupa_hosp1');
    platforms.create(497,295, 'vaso_planta_qto1');       
    

  this.physics.add.collider(player, platforms);

  var bags1 = this.physics.add.group( {
    key: 'bag',
    repeat: 6,
    setXY: { x: 200, y: 500, stepX: 150}        
  }); 
  
  var bags2 = this.physics.add.group( {
    key: 'bag',
    repeat: 5,
    setXY: { x: 275, y: 525, stepX: 150}        
  }); 
 
  this.physics.add.collider(bags1, platforms);
  this.physics.add.collider(bags2, platforms);
}

  public update(): void {
    // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.cursorKeys.left.isDown) {
      velocity.x -= 1;
    }
    if (this.cursorKeys.right.isDown) {
      velocity.x += 1;
    }
    if (this.cursorKeys.up.isDown) {
      velocity.y -= 1;
    }
    if (this.cursorKeys.down.isDown) {
      velocity.y += 1;
    }  

    // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
    const normalizedVelocity = velocity.normalize();
    this.image.setVelocity(normalizedVelocity.x * this.speed, normalizedVelocity.y * this.speed);
  }
}
