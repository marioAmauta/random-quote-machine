import { TwitterIcon } from './Icons.jsx';

export function ButtonsPanel({ getRandomQuote, currentQuote, randomColor }) {
  const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${currentQuote.quote} - ${currentQuote.author}"`;

  return (
    <div className='buttons-container'>
      <a
        id='tweet-quote'
        href={twitterUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='button'
        style={{
          backgroundColor: randomColor
        }}
      >
        <TwitterIcon />
      </a>
      <button
        id='new-quote'
        onClick={getRandomQuote}
        className='button'
        style={{
          backgroundColor: randomColor
        }}
      >
        New Quote
      </button>
    </div>
  );
}
