import { useEffect, useState } from "react";
import "./styles.css";
// import Hyphenopoly from "hyphenopoly";
import HyphenatedText from './HyphenatedText';

export default function App() {

  const [text, setText] = useState("This is a long text that needs hyphenation extraordinarily storyboard.");

  return (
    <div className="App">
      <HyphenatedText text={text} />
      <button onClick={() => setText("Another long text for hyphenation example.")}>
        Change Text
      </button>
    </div>
  );

  // const [hyphenatedTextEn, setHyphenatedTextEn] = useState("");
  // const [hyphenatedTextDe, setHyphenatedTextDe] = useState("");

  // useEffect(() => {
  //   // console.info(import.meta.url)
  //   console.info("Hyphenopoly", Hyphenopoly);
  //   const hyphenator = Hyphenopoly.config({
  //     require: {
  //       "en-us": "FORCEHYPHENOPOLY",
  //       "de": "FORCEHYPHENOPOLY"
  //     },
  //     paths: {
  //       patterndir: "/hyphenopoly/patterns/"
  //     },
  //     setup: {
  //       selectors: {
  //         ".hyphenate": {
  //           hyphen: "•"
  //         }
  //       }
  //     },
  //   });

  //   async function hyphenateTexts() {
  //     const hyphenateEn = await hyphenator.get("en-us");
  //     const hyphenateDe = await hyphenator.get("de");

  //     setHyphenatedTextEn(hyphenateEn("hyphenation enhances justification."));
  //     setHyphenatedTextDe(
  //       hyphenateDe("Silbentrennung verbessert den Blocksatz.")
  //     );
  //   }

  //   hyphenateTexts();
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>Hyphenation Example</h1>
  //     <h2>English: {hyphenatedTextEn}</h2>
  //     <h2>German: {hyphenatedTextDe}</h2>
  //   </div>
  // );
}
