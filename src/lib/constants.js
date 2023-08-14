export const COLORS = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

export const QUOTES_URL =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const TRANSITIONS = {
  color: 'color 1s 500ms',
  background: 'background 1s 500ms'
};

export const ELEMENTS_NEEDS_TRANSITION = [
  {
    elementId: '#root',
    transitionType: 'background'
  },
  {
    elementId: '#tweet-quote',
    transitionType: 'background'
  },
  {
    elementId: '#new-quote',
    transitionType: 'background'
  },
  {
    elementId: '#text',
    transitionType: 'color'
  },
  {
    elementId: '#author',
    transitionType: 'color'
  }
];
