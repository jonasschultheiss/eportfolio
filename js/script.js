'use strict';

let config = {
  name: 'Name not set',
};

function livelyPropertyListener(name, val) {
  switch (name) {
    case 'gamertag':
      config.name = val.toUpperCase();
      break;
    default:
      break;
  }

  gg();
}

const gg = () => {
  const gtarr = document.getElementsByClassName('gamertag');

  Array.from(gtarr).forEach((e) => {
    console.log(e);
    e.innerHTML = config.name;
  });

  const scrolls = document.getElementsByClassName('scrolling');
  const w = window.innerWidth;

  let children = '';

  Array.from(scrolls).forEach((e) => {
    const childw = e.children[0].offsetWidth;
    for (let i = 0; i < Math.ceil(w / childw) + 1; i++) {
      children += e.innerHTML;
    }

    e.innerHTML += children;
    children = '';
  });
};

gg();
