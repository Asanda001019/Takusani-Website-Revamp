import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;

  useEffect(() => {
    function type() {
      currentWord = words[i];
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 100); // Call the function again after 100ms
    }

    type(); // Start the typewriter effect

    return () => {
      clearTimeout();
    };
  }, [i, j, isDeleting]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold text-blue-600">{text}</h1>
    </div>
  );
};

export default Typewriter;
