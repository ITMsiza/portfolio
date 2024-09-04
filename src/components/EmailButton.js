import React from 'react';
import '../App.css';

const EmailButton = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleClick} className="email-button">
      Say Hello
    </button>
  );
};

export default EmailButton;
