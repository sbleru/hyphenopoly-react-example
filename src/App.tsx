import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [hyphenatedTextEn, setHyphenatedTextEn] = useState("");
  const [hyphenatedTextDe, setHyphenatedTextDe] = useState("");

  useEffect(() => {
    const hyphenator = (window as any).Hyphenopoly

    async function hyphenateTexts() {

      const hyphenateEn = await hyphenator.hyphenators["en-us"]
      const hyphenateDe = await hyphenator.hyphenators["de"]

      setHyphenatedTextEn(hyphenateEn("hyphenation enhances justification."));
      setHyphenatedTextDe(
        hyphenateDe("Silbentrennung verbessert den Blocksatz.")
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
