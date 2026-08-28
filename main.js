//Seleção de Elemento do html
const audioStart = new Audio('.som/audio_theme.mp3')
const audioGameOver = new Audio('.som/audio_gameover.mp3')
const mario =document.queryselector('.img/mario.gif');
const pipe =document.queryselector('.img/pipe.png');
const startButton =document.queryselector('.startButton');
const restartButton =document.queryselector('.restartButton');
const gameOver =document.queryselector('.gameOver');

//Variaveis de Controle do jogo
let = gameInterval = null;

//Funcoes para Iniciar o jogo
const startGame = () => {
pipe.classlits.add('pipe-animation');
//oculta o botao iniciar para evitar cliques acidentais
startButton.style.display = 'none';

//oculta a tela de gameover do jogo anterior

gameOver.style.display = 'none'

//inicia a reprodycao da musica tema

audioStart.currentTime = 0;

//inicia a reproducao da musica tema

audioStart.play();

//verifica o intervalo do jogo ja nao esta rodando

if(!gameInterval){
//cria um intervalo que executa a funcao gameloop a cada 10 milisegundos
//isso atualiza a deteccao de colisao continuamente
gameInterval = setInterval (gameloop, 10);
}

}

//funcao para reiniciar o jogo
const restartGame = () => {
pipe.classlist.add('pipe-animation');
pipe.style.left = '';
pipe.style.right = 0;
mario.src = '.img/mario.gif';
mario.style.width = '150px';
mario.style.botton = '0';



}














//linha 67