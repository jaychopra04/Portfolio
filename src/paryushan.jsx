import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const textToType = `
    Paryushan: One of the most important religious observances in Jainism. During this time, Jains engage in various spiritual practices, including fasting, meditation, and reading of sacred scriptures. Paryushan is a time for self-reflection, seeking forgiveness, and striving for spiritual growth.

    <br /><br />
    'Micchami Dukkadam' is a Prakrit phrase, which means "I seek forgiveness". Jains use this phrase to seek forgiveness from others for any harm they may have caused intentionally or unintentionally, physically or mentally, during the past year. It is a gesture of humility, remorse, and a commitment to not repeat the same mistakes.
    <br /><br />
    <span style="background-image: linear-gradient(45deg, blue, purple); -webkit-background-clip: text; color: transparent;">
    Today is a very special day because it gives us an official chance to seek forgiveness for our actions or words which have intentionally or intentionally hurt the ones around us…. Seeking your forgiveness on this day...
    </span>
    <br /><br /><span style="background-image: linear-gradient(45deg, orange, red); -webkit-background-clip: text; color: transparent;">
    Michhami Dukkadam
    </span>
  `;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 15); // Adjust the typing speed by changing the interval (e.g., 50ms for a moderate speed)

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, textToType]);

  const containerStyle = {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '800px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div dangerouslySetInnerHTML={{ __html: typedText }} />
    </div>
  );
};

export default TypingText;
