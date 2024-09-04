import React, { useEffect, useRef } from 'react';

const HyphenatedText = ({ text }: { text: string }) => {
  const textRef = useRef(null);

  useEffect(() => {
    console.info('passss')
    console.info('(window as any).Hyphenopoly', (window as any).Hyphenopoly)
    console.info(textRef.current)
    if ((window as any).Hyphenopoly && textRef.current) {
      (window as any).Hyphenopoly.hyphenators["HTML"].then(hyphenator => {
        console.info('hyphenator', hyphenator)
        hyphenator(textRef.current);
      });
    }
  }, [text]);

//   console.info(textRef.current)

  return (
    <p ref={textRef} className="hyphenate">
      {text}
    </p>
  );
};

export default HyphenatedText;