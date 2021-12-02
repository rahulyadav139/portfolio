'use strict';

const keys = Array.from(document.querySelectorAll('.keys'));
const spaceKey = document.querySelector('#space');
const input = document.querySelector('.user-input');
const sampleText = document.querySelector('.sample-text');
const btnSubmit = document.querySelector('.btn-submit');
const speedValue = document.querySelector('.speed__value');
const accuracyValue = document.querySelector('.accuracy__value');
const btnStart = document.querySelector('.btn-start');
const displayStates = document.querySelectorAll('.info');
const title = document.querySelector('.title');

//programming

let sampleTextArr;
let time = 0;
let timer;

setTimeout(() => {
  sampleTextArr = sampleText.textContent.trim().split(' ');
}, 80);

document.addEventListener('keydown', e => {
  const selectedKey = keys.find(el => e.keyCode == el.getAttribute('key-code'));

  selectedKey?.classList.add('bubble');

  setTimeout(() => {
    keys.forEach(el => el.classList.remove('bubble'));
  }, 70);
});

window.addEventListener('load', () => {
  sampleText.textContent = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.`;
});

function displayTime(time) {
  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);
  const sec = (time % 60).toString().padStart(2, 0);

  return [min, sec];
}

function startHandler() {
  if (timer) return;
  input.value = '';

  title.textContent = 'Typing Master';

  timer = setInterval(() => {
    time++;

    const [min, sec] = displayTime(time);

    btnStart.textContent = `${min}:${sec}`;
  }, 1000);

  displayStates.forEach(el => (el.style.opacity = 0));
  btnStart.style.backgroundColor = 'red';
  btnStart.style.cursor = 'default';
}

function submitHandler() {
  if (!timer) {
    title.textContent = 'Please start the test first';
    setTimeout(() => {
      title.textContent = 'Typing Master';
    }, 1000);
    return;
  }
  clearInterval(timer);

  const inputWordsArr = input.value.split(' ');

  let correctWordsArr = [];
  // for (let word of inputWordsArr) {
  //   if (sampleTextArr.includes(word)) {
  //     correctWordsArr.push(word);
  //   }
  // }

  inputWordsArr.forEach(el => {
    if (sampleTextArr.includes(el)) correctWordsArr.push(el);
  });

  console.log(input.value);
  console.log(inputWordsArr);

  console.log(correctWordsArr);
  console.log(time);
  const accuracy = (correctWordsArr.length / inputWordsArr.length) * 100;

  const totalCharacters = correctWordsArr.join('').split('').length;

  const speed = totalCharacters / 5 / (time / 60);
  console.log(totalCharacters);

  displayStates.forEach(el => (el.style.opacity = 100));

  speedValue.textContent = Math.round(speed);
  accuracyValue.textContent = Math.round(accuracy);

  const [min, sec] = displayTime(time);
  console.log(min, sec);

  title.textContent = `Time: ${min}:${sec}`;

  btnStart.style.backgroundColor = 'green';
  btnStart.textContent = 'Restart';
  btnStart.style.cursor = 'pointer';
  timer = time = 0;
}

btnStart.addEventListener('click', startHandler);

btnSubmit.addEventListener('click', submitHandler);
