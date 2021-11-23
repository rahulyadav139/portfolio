//data

const projects = {
  p1: {
    projectName: 'My Portfolio',
    projectDescription:
      'I am managing my portfolio website with using HtML, CSS, Github and Netlify.',
    sourceCode: 'https://github.com/rahulyadav139/portfolio',
    liveLink: '',
  },
  p2: {
    projectName: 'How well do you know me?',
    projectDescription:
      'A CLI app built with nodeJS. You can send this to your friends and find out who really knows you.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/blob/main/assignment-2.js',
    liveLink: 'https://replit.com/@RahulYadav45/Assignment-2?embed=1#index.js',
  },
  p3: {
    projectName: 'General knowledge quiz?',
    projectDescription:
      "How Much Do You Know About India? Let's play a quiz and see.",
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/minion-translator',
    liveLink: 'https://replit.com/@RahulYadav45/Assignment-2?embed=1#index.js',
  },
  p4: {
    projectName: 'Minionese',
    projectDescription:
      'Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/minion-translator',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/minion-translator/minion-translator.html',
  },
  p5: {
    projectName: 'Country Flag',
    projectDescription:
      'This country flag app helps the user to show country flag by tpying the country name or just search in the list.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/country-flag',
    liveLink: 'https://okwcd.csb.app/',
  },
  p6: {
    projectName: 'Fun Translator',
    projectDescription:
      'Are you a fan of Game of Thrones? Did you know that the valyrian languages? The Valyrian languages are a fictional language family in the A Song of Ice and Fire series of fantasy novels by George R. R. Martin.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/fun-translator',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/fun-translator/translator.html',
  },
  p7: {
    projectName: 'Emoji Interpreter',
    projectDescription:
      'I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/emoji-interpreter',
    liveLink: 'https://ky74s.csb.app/',
  },
  p8: {
    projectName: 'Recipebook',
    projectDescription:
      'We are always on the hunt for a good restaurant, and we are also on the hunt for easy-cooking, good meals recipes.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/recipebook',
    liveLink: 'https://yierz.csb.app/',
  },
  p9: {
    projectName: 'Rock Paper Scissors',
    projectDescription: "let's play a game. You know rock paper scissors game.",
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/rock-paper-scissors-game',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/rock-paper-scissors-game/game.html',
  },
  p10: {
    projectName: 'Cash Register Manager',
    projectDescription:
      'A cash register manager which helps the user by telling how can he/she return the change to the customer with minimum number of notes.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/app-cash-register',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/app-cash-register/cash-register.html',
  },
  p11: {
    projectName: 'Is your birthday lucky?',
    projectDescription:
      'A website which can help you to check whether your birthday is lucky or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/lucky-birthday',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/lucky-birthday/lucky-birthday.html',
  },
  p12: {
    projectName: 'Learn Triangles',
    projectDescription: 'A website which helps you to learn about triangles.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/fun-with-triangles',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/fun-with-triangles/angles-to-triangle.html',
  },
  p13: {
    projectName: 'Leap Year Identifier',
    projectDescription:
      'The leap year is a special year in the sense that it has one day more than the other years. That is a leap year has 366 days instead of 365 days. App which checks whether a year is a leap year or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/leap-year',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/leap-year/leap-year.html',
  },
  p14: {
    projectName: 'Profit Loss Calculator',
    projectDescription:
      'A website which helps user how much profit or loss he/she is making in percentage & absolute value.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/profit-loss-calc',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/profit-loss-calc/profit-loss-calc.html',
  },
  p15: {
    projectName: 'Palindrome Birthdays',
    projectDescription:
      'App which checks whether your birthday is a palindrome birthday or not.',
    sourceCode:
      'https://github.com/rahulyadav139/portfolio/tree/main/applications/palindrome-birthday',
    liveLink:
      'https://rahulmyadav.netlify.app/applications/palindrome-birthday/palindrome.html',
  },
  p16: {
    projectName: 'Emoji Interpreter v2.0',
    projectDescription:
      'I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.',
    sourceCode:
      'https://github.com/rahulyadav139/Assignments/tree/main/emoji-interpreter-v2.0',
    liveLink: 'https://omk9e.csb.app/',
  },
};

//code

const btnProjects = document.querySelectorAll('.project');
const projectDetailsContainer = document.querySelector('.section-projects');
const projectName = document.querySelector('.section-projects__project-name');
const projectDes = document.querySelector(
  '.section-projects__project-description'
);
const btnLiveProject = document.querySelector('.button-live-project');
const btnSourceCode = document.querySelector('.button-source-code');

btnProjects.forEach(el =>
  el.addEventListener('click', e => {
    const selectedProject = e.target.id;

    projectName.textContent = projects[selectedProject].projectName;
    projectDes.textContent = projects[selectedProject].projectDescription;
    console.log(e.target.id);
    if (e.target.id === 'p1') {
      btnLiveProject.style.display = 'none';
    } else {
      btnLiveProject.style.display = 'inline-block';
    }
    btnLiveProject
      .closest('a')
      .setAttribute('href', projects[selectedProject].liveLink);
    btnSourceCode
      .closest('a')
      .setAttribute('href', projects[selectedProject].sourceCode);
  })
);
