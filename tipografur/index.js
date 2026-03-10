function screamDude() {
  let screamText = document.querySelector('.dude');

  screamText.textContent = screamText.textContent + 'tot' + '\n';
}
setInterval(screamDude, 10);
