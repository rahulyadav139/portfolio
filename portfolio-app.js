//data

const projects = [
  {
    code: 'p2',
    projectName: 'Mark 1: How well do you know me?',
    projectDescription:
      'This is simple CLI quiz application. Quiz is all about me. My friends find out it amazing who know me!!',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/blob/main/assignment-1.js',
    liveLink: 'https://replit.com/@RahulYadav45/Assignment-1?embed=1#index.js',
    techStack: 'NodeJS',
  },
  {
    code: 'p3',
    projectName: 'Mark 2: General knowledge quiz?',
    projectDescription:
      "This is a general knowledge quiz application. Quiz is mexed with easy, medium and hard level question. How Much Do You Know About India? Let's play a quiz and see.",
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/blob/main/assignment-2.js',
    liveLink: 'https://replit.com/@RahulYadav45/Assignment-2?embed=1#index.js',
    techStack: 'NodeJS',
  },
  {
    code: 'p1',
    projectName: 'Mark 3, 4, 5: My Portfolio',
    projectDescription:
      'I am managing my portfolio website using HtML, CSS, JavaScript, Github and Netlify.',
    sourceCode: 'https://github.com/rahulyadav139/portfolio',
    liveLink: '',
    techStack: 'HTML, CSS, JavaScript',
  },

  {
    code: 'p4',
    projectName: 'Mark 6: Minionese',
    projectDescription:
      'Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/minion-translator',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/minion-translator/minion-translator.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p6',
    projectName: 'Mark 7: Fun Translator',
    projectDescription:
      'Are you a fan of Game of Thrones? Did you know that the valyrian languages? The Valyrian languages are a fictional language family in the A Song of Ice and Fire series of fantasy novels by George R. R. Martin.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/fun-translator',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/fun-translator/translator.html',
    techStack: 'HTML, CSS, JavaScript',
  },

  {
    code: 'p7',
    projectName: 'Mark 8: Emoji Interpreter',
    projectDescription:
      'I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/emoji-interpreter',
    liveLink: 'https://ky74s.csb.app/',
    techStack: 'HTML, CSS, ReactJS',
  },
  {
    code: 'p8',
    projectName: 'Mark 9: Recipebook',
    projectDescription:
      'We are always on the hunt for a good restaurant, and we are also on the hunt for easy-cooking, good meals recipes. This Recipebook application helps you to find recipe with right ingredients and method.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/recipebook',
    liveLink: 'https://yierz.csb.app/',
    techStack: 'HTML, CSS, ReactJS',
  },

  {
    code: 'p10',
    projectName: 'Mark 10: Cash Register Manager',
    projectDescription:
      'A cash register manager which helps the user by telling how can he/she return the change to the customer with minimum number of notes.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/app-cash-register',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/app-cash-register/cash-register.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p11',
    projectName: 'Mark 11: Is your birthday lucky?',
    projectDescription:
      'A website which can help you to check whether your birthday is lucky or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/lucky-birthday',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/lucky-birthday/lucky-birthday.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p12',
    projectName: 'Mark 12: Learn Triangles',
    projectDescription: 'A website which helps you to learn about triangles.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/fun-with-triangles',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/fun-with-triangles/angles-to-triangle.html',
    techStack: 'HTML, CSS, JavaScript',
  },

  {
    code: 'p15',
    projectName: 'Mark 13: Palindrome Birthdays',
    projectDescription:
      'App which checks whether your birthday is a palindrome birthday or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/palindrome-birthday',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/palindrome-birthday/palindrome.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p14',
    projectName: 'Mark 14: Profit Loss Calculator',
    projectDescription:
      'A website which helps user how much profit or loss he/she is making in percentage & absolute value.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/profit-loss-calc',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/profit-loss-calc/profit-loss-calc.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p13',
    projectName: 'Leap Year Identifier',
    projectDescription:
      'The leap year is a special year in the sense that it has one day more than the other years. That is a leap year has 366 days instead of 365 days. App which checks whether a year is a leap year or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/leap-year',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/leap-year/leap-year.html',
    techStack: 'HTML, CSS, JavaScript',
  },

  {
    code: 'p9',
    projectName: 'Rock Paper Scissors',
    projectDescription: "let's play a game. You know rock paper scissors game.",
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/rock-paper-scissors-game',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/rock-paper-scissors-game/game.html',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p5',
    projectName: 'Country Flag',
    projectDescription:
      'This country flag app helps the user to show country flag by tpying the country name or just search in the list.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/country-flag',
    liveLink: 'https://okwcd.csb.app/',
    techStack: 'HTML, CSS, ReactJS',
  },
  {
    code: 'p16',
    projectName: 'Emoji Interpreter v2.0',
    projectDescription:
      'I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/emoji-interpreter-v2.0',
    liveLink: 'https://omk9e.csb.app/',
    techStack: 'HTML, CSS, ReactJS',
  },
  {
    code: 'p17',
    projectName: 'Soundbox',
    projectDescription:
      'This soundbox application is good way to play around musical instruments. Each key plays different sound.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/soundbox',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/soundbox/index.html ',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p18',
    projectName: 'Analog Clock',
    projectDescription:
      "This CSS analog clock helps you to track time. It's a dynamic and elegant looking clock.",
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/CSS-clock',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/CSS-clock/index.html ',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p19',
    projectName: 'Typing Master',
    projectDescription:
      'What if you could write your e-mails and reports with ease and in half the time? This typing master application helps to improve your typing speed, reduce mistakes, and improve accuracy.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/typing-master',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/typing-master/index.html ',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p20',
    projectName: 'Tic Tac Toe',
    projectDescription:
      'Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/tic-tac-toe',
    liveLink:
      'https://www.rahulyadav.tech/applications/tic-tac-toe/index.html ',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    code: 'p21',
    projectName: 'Expense Tracker',
    projectDescription:
      'Expense Tracker is a simple easy and most user friendly expense manager app. ',
    sourceCode: 'https://github.com/rahulyadav139/expense-tracker',
    liveLink: 'https://wonderful-clarke-850fbd.netlify.app/',
    techStack: 'HTML, CSS, ReactJS',
  },
];

//code

const projectList = document.querySelector('.projects');
const projectName = document.querySelector('.section-projects__project-name');
const projectDes = document.querySelector(
  '.section-projects__project-description'
);
const btnLiveProject = document.querySelector('.button-live-project');
const btnSourceCode = document.querySelector('.button-source-code');
const btnUp = document.querySelector('.btn-up');
const blogList = document.querySelector('.section-projects');
const close = document.querySelector('.close');
const techStack = document.querySelector('.section-projects__tech-stack');

window.addEventListener('load', () => {
  projects.map(el =>
    projectList.insertAdjacentHTML(
      'beforeend',
      `<li id="${el.code}" class="project">↪ ${el.projectName}</li>`
    )
  );
});

function clickHandler() {
  const projectItem = document.querySelectorAll('.project');
  projectItem.forEach(el =>
    el.addEventListener('click', e => {
      const projectCode = e.target.id;
      const slectedProject = projects.find(el => el.code === projectCode);

      projectName.textContent = slectedProject.projectName;
      projectDes.textContent = slectedProject.projectDescription;
      techStack.textContent = `Tech Stack: ${slectedProject.techStack}`;

      if (e.target.id === 'p1') {
        btnLiveProject.style.display = 'none';
      } else {
        btnLiveProject.style.display = 'inline-block';
      }

      btnLiveProject.children[0].setAttribute('href', slectedProject.liveLink);
      btnSourceCode.children[0].setAttribute('href', slectedProject.sourceCode);
    })
  );
}

setTimeout(clickHandler, 1000);

btnUp.addEventListener('click', () => {
  blogList.style.display = 'block';
  btnUp.style.display = 'none';
});

close.addEventListener('click', () => {
  blogList.style.display = 'none';
  btnUp.style.display = 'block';
});
