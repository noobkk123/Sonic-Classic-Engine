document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('colors');

  if (botao) {
    botao.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
    });
  }
});
