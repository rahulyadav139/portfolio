const audio = Array.from(document.querySelectorAll('audio'));
const test = document.querySelector('#a');
const keys = Array.from(document.querySelectorAll('.keys'));

window.addEventListener('keydown', e => {
  const sound = audio.find(el => el.getAttribute('id') === e.key);
  sound.play();
  sound.currentTime = 0;
  const selectedKey = keys.find(el => el.dataset.key === e.key);
  selectedKey.classList.add('bubble');

  setTimeout(() => keys.forEach(el => el.classList.remove('bubble')), 70);
});
