const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

import { animate, stagger, splitText } from 'https://esm.sh/animejs';

const { chars } = splitText('h1', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-1.5rem', ease: 'outExpo', duration: 300 },
    { to: 0, ease: 'outBounce', duration: 600, delay: 100 }
  ],
  // Property specific parameters
  
  delay: stagger(50),
  ease: 'inOutCirc',
});