const [secHand, minHand, hourHand] = document.querySelectorAll('.clock__hand');

setInterval(() => {
  const time = new Date(Date.now());
  const secNow = time.getSeconds();
  const minNow = time.getMinutes();
  const hourNow = time.getHours();

  const movSec = (secNow / 60) * 360 + 90;
  const movMin = (minNow / 60) * 360 + 90;
  const movHour = (hourNow / 24) * 720 + 90 + Math.trunc(minNow / 12) * 6;

  secHand.style.transform = `rotate(${movSec}deg)`;
  minHand.style.transform = `rotate(${movMin}deg)`;
  hourHand.style.transform = `rotate(${movHour}deg)`;
}, 1000);
