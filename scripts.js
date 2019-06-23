var etatDepliant = false;

function toggleDepliant() {
  if(etatDepliant === true) {
    document.querySelector('.depliant').classList.remove('depliant-ouvert');
    document.querySelector('.fleche').classList.remove('fleche--active');
  } else {
    document.querySelector('.depliant').classList.add('depliant-ouvert');
    document.querySelector('.fleche').classList.add('fleche--active');
  }

  etatDepliant = !etatDepliant;
}
