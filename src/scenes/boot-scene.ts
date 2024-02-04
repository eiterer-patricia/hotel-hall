import { getGameWidth, getGameHeight } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Boot',
};

/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
export class BootScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);    
  }

  public preload(): void {
    const halfWidth = getGameWidth(this) * 0.5;
    const halfHeight = getGameHeight(this) * 0.5;

    const progressBarHeight = 100;
    const progressBarWidth = 400;

    const progressBarContainer = this.add.rectangle(
      halfWidth,
      halfHeight,
      progressBarWidth,
      progressBarHeight,
      0x000000,
    );
    const progressBar = this.add.rectangle(
      halfWidth + 20 - progressBarContainer.width * 0.5,
      halfHeight,
      10,
      progressBarHeight - 20,
      0x888888,
    );

    const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
    const percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
    const assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);

    this.load.on('progress', (value) => {
      progressBar.width = (progressBarWidth - 30) * value;

      const percent = value * 100;
      percentText.setText(`${percent}%`);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(file.key);
    });

    this.load.on('complete', () => {
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      progressBar.destroy();
      progressBarContainer.destroy();

      this.scene.start('MainMenu');
    });

    this.loadAssets();
  }

  /**
   * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
   * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
   * is currently active, so they can be accessed anywhere.
   */
  private loadAssets() {
    // Load sample assets

    // Source: Open Game Art
    this.load.image('man', 'assets/sprites/character.png');
    this.load.image('background', 'assets/sprites/ambientacao.png');
    this.load.image('bag', 'assets/sprites/bag.png');
    this.load.image('balcao', 'assets/sprites/balcao_rec.png');
    this.load.image('cadeira_qto2', 'assets/sprites/cadeira_qto2.png');
    this.load.image('cama_qto1', 'assets/sprites/cama_qto1.png');
    this.load.image('cama1_qto2', 'assets/sprites/cama1_qto2.png');
    this.load.image('cama2_qto2', 'assets/sprites/cama2_qto2.png');
    this.load.image('cama3_qto2', 'assets/sprites/cama3_qto2.png');
    this.load.image('criado_mudo_qto2', 'assets/sprites/criado_mudo_qto2.png');
    this.load.image('espaco_entre_comodos', 'assets/sprites/espaco_entre_comodos.png');
    this.load.image('espaco_entre_quartos', 'assets/sprites/espaco_entre_quartos.png');
    this.load.image('lareira_qto1', 'assets/sprites/lareira_qto1.png');
    this.load.image('mesa_qto2', 'assets/sprites/mesa_qto2.png');
    this.load.image('parede_corredor1', 'assets/sprites/parede_corredor1.png');
    this.load.image('parede_corredor2', 'assets/sprites/parede_corredor2.png');
    this.load.image('parede_corredor3', 'assets/sprites/parede_corredor3.png');
    this.load.image('parede_entrada_dir1', 'assets/sprites/parede_entrada_dir1.png');
    this.load.image('parede_entrada_esq', 'assets/sprites/parede_entrada_esq.png');
    this.load.image('parede_entrada_inf1', 'assets/sprites/parede_entrada_inf1.png');
    this.load.image('parede_hall_lateral_dir', 'assets/sprites/parede_hall_lateral_dir.png');
    this.load.image('parede_hall_superior', 'assets/sprites/parede_hall_superior.png');
    this.load.image('parede_inferior_qto2', 'assets/sprites/parede_inferior_qto2.png');
    this.load.image('parede_inferior1_qto1', 'assets/sprites/parede_inferior1_qto1.png');
    this.load.image('parede_inferior2_qto1', 'assets/sprites/parede_inferior2_qto1.png');
    this.load.image('parede_inferior1_qto2', 'assets/sprites/parede_inferior1_qto2.png');
    this.load.image('parede_inferior1', 'assets/sprites/parede_inferior1.png');
    this.load.image('parede_lateral_dir1', 'assets/sprites/parede_lateral_dir1.png');
    this.load.image('parede_lateral_esq1', 'assets/sprites/parede_lateral_esq1.png');
    this.load.image('parede_lateral_infesq1', 'assets/sprites/parede_lateral_infesq1.png');
    this.load.image('parede_lateral_qto1', 'assets/sprites/parede_lateral_qto1.png');
    this.load.image('parede_lateral_qto2', 'assets/sprites/parede_lateral_qto2.png');
    this.load.image('parede_superior_qto1', 'assets/sprites/parede_superior_qto1.png');
    this.load.image('parede_superior_qto2', 'assets/sprites/parede_superior_qto2.png');
    this.load.image('parede1_entre_qtos', 'assets/sprites/parede1_entre_qtos.png');
    this.load.image('passagem_portas', 'assets/sprites/porta.png');
    this.load.image('recepcao', 'assets/sprites/recepcao.png');
    this.load.image('roupa_hosp1', 'assets/sprites/roupa_hosp1.png');
    this.load.image('vaso_planta_qto1', 'assets/sprites/vaso_planta_qto1.png');
  }  
}
