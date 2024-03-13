function alterarStatus(id) {
   let gameClicado = document.getElementById(`game-${id}`); // Recupera o game que foi clicado na tela.
   let imagemDoJogo = gameClicado.querySelector('.dashboard__item__img');
   let botao = gameClicado.querySelector('.dashboard__item__button');
   
   if(imagemDoJogo.classList.contains('dashboard__item__img--rented')) {
      imagemDoJogo.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
   } else {
      imagemDoJogo.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return');

   }
}