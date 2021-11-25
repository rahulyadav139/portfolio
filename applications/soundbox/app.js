const audio = Array.from(document.querySelectorAll('audio'));
const test = document.querySelector('#a');

window.addEventListener('keydown', e => {
  const sound = audio.find(el => el.getAttribute('id') === e.key);
  sound.play();
  sound.currentTime = 0;
});
const rina = document.querySelector('audio[id="a"]');
console.log(rina);
