import { useEffect, useState } from 'react';
import { QuoteBox } from './components/QuoteBox.jsx';
import { Quote } from './components/Quote.jsx';
import { ButtonsPanel } from './components/ButtonsPanel.jsx';
import { COLORS, QUOTES_URL, TRANSITIONS, ELEMENTS_NEEDS_TRANSITION } from './lib/constants.js';

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  document.querySelector('#root').style.backgroundColor = randomColor;

  function setTransition() {
    ELEMENTS_NEEDS_TRANSITION.forEach(({ elementId, transitionType }) => {
      const $element = document.querySelector(elementId);

      if (!$element.style.transition) {
        $element.style.transition = TRANSITIONS[transitionType];
      }
    });
  }

  function getRandomQuote() {
    setCurrentQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)]);
    setTransition();
  }

  useEffect(() => {
    fetch(QUOTES_URL)
      .then(res => res.json())
      .then(data => {
        const quotes = data.quotes;
        setAllQuotes(quotes);
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      });
  }, []);

  return (
    <QuoteBox>
      <Quote
        currentQuote={currentQuote}
        randomColor={randomColor}
      />
      <ButtonsPanel
        getRandomQuote={getRandomQuote}
        currentQuote={currentQuote}
        randomColor={randomColor}
      />
    </QuoteBox>
  );
}

export default App;
