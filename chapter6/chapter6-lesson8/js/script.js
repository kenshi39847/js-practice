const heading1 = document.querySelector('#heading1');
const keyframes1 = {
  opacity: [0, 1],
  rotate: ['x 360deg', 0],
};
const options1 = {
  duration: 1000,
  easing: 'ease',
};
heading1.animate(keyframes1, options1);

const heading2 = document.querySelector('#heading2');
const keyframes2 = {
  color: ['#f66', '#fc2', '#0c6', '#0bd']
};
const options2 = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};
heading2.animate(keyframes2, options2);

const heading3 = document.querySelector('#heading3');
const keyframes3 = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};
const options3 = {
  duration: 1000,
  easing: 'ease',
};
heading3.animate(keyframes3, options3);

const heading4 = document.querySelector('#heading4');
const keyframes4 = {
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};
const options4 = {
  duration: 8000,
  direction: 'alternate',
  iterations: Infinity,
};
heading4.animate(keyframes4, options4);