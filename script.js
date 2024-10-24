const headerHeight = document.querySelector('header').offsetHeight;

const section = document.querySelector('#one');
section.clientHeight = `calc(100vh - ${headerHeight}px)`;

