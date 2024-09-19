import React, { useState, useEffect } from 'react';

const TypingEffect = ({ sentences, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    if (charIndex < currentSentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentSentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Pause briefly before moving to the next sentence
      const pauseTimeout = setTimeout(() => {
        setDisplayedText(''); // Clear the current sentence
        setCharIndex(0); // Reset character index

        // Move to the next sentence, or loop back to the first one
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 1000); // 1 second pause between sentences

      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, sentenceIndex, sentences, speed]);

  return (
    <span className='typing'>{displayedText}</span>
  );
};

export default TypingEffect;
