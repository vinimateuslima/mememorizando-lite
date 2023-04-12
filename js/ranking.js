// Função que exibe mensagem de boas vindas e ao clicar em ok toca o áudio
const boasVindas = async () => {
   Swal.fire({
    title: `Bem vindo a página de Ranking!`,
    confirmButtonText: 'OK',
    confirmButtonColor: '#ee665c',
  }).then(() => {
    const campeao = new Audio("../src/audios/ranking.mp3");
    campeao.play();
    campeao.volume = 0.1;
    campeao.loop = true;
  });
}

boasVindas();
 
// Pegando os elementos do ranking
let primeiro = document.querySelector(".primeiro");

let player = localStorage.getItem('player');
let tempo = localStorage.getItem('tempo');


      document.querySelector(".tempo").innerHTML = tempo;
      primeiro.innerHTML = player;

/*}*/
