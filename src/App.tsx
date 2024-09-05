import { useEffect, useState } from "react";
import "./styles.css";
import { hyphenator } from "./hyphenopoly";

export default function App() {
  const [hyphenatedTextEn, setHyphenatedTextEn] = useState("");
  const [hyphenatedTextDe, setHyphenatedTextDe] = useState("");

  useEffect(() => {
    async function hyphenateTexts() {
      const hyphenateEn = await hyphenator.get("en-us");
      const hyphenateDe = await hyphenator.get("de");

      setHyphenatedTextEn(hyphenateEn("hyphenation enhances justification."));
      setHyphenatedTextDe(
        hyphenateDe("Silbentrennung verbessert den Blocksatz."),
      );
    }

    hyphenateTexts();
  }, []);

  return (
    <div className="App">
      <h1>Hyphenation Example</h1>
      <h2>English: {hyphenatedTextEn}</h2>
      <h2>German: {hyphenatedTextDe}</h2>
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
