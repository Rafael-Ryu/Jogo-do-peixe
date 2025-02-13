// Configuração do jogo
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Inicialização do jogo e variável do peixe
var game = new Phaser.Game(config);
var peixe;

// Função para carregar os assets
function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');     // Carrega fundo
    this.load.image('inteli', 'assets/logo-inteli_azul.png'); // Carrega logo
    this.load.image('peixe serio', 'assets/peixes/peixe_serio.png');    // Carrega peixe
    this.load.image('tubarao', 'assets/peixes/tubarao.png');               // Carrega tubarao
}

// Função para criar elementos na cena
function create() {
    this.add.image(400, 300, 'mar');                    // Adiciona fundo
    this.add.image(400, 525, 'inteli').setScale(0.5);   // Adiciona logo reduzida
    
    this.add.image(500, 300, 'tubarao').setDepth(1);    
    // Dessa forma o peixe serio ficara acima do tubarao
    peixe = this.add.image(400, 300, 'peixe serio').setDepth(2);
    peixe.setFlip(true, false);
}

// Função de atualização - movimento do peixe
function update() {
    peixe.x = this.input.x;    // Atualiza posição X do peixe com o mouse
    peixe.y = this.input.y;    // Atualiza posição Y do peixe com o mouse
}