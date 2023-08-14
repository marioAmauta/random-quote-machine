export function Quote({ currentQuote, randomColor }) {
  return (
    <>
      <p
        id='text'
        style={{
          color: randomColor
        }}
      >
        {currentQuote.quote}
      </p>
      <span
        id='author'
        style={{
          color: randomColor
        }}
      >
        {currentQuote.author}
      </span>
    </>
  );
}
