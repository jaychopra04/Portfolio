import React, { useState, useEffect } from 'react';
import './styles.css'

function AnimatedCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const updateCursorPos = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPos);

    return () => {
      document.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPos.x, top: cursorPos.y }}
    ></div>
  );
}

export default AnimatedCursor;
