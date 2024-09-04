import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// FIXME: これだとうまくいかない
// import Hyphenopoly from "hyphenopoly";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

// Hyphenopolyの設定
if ((window as any).Hyphenopoly) {
  (window as any).Hyphenopoly.config({
    require: {
      "en-us": "FORCEHYPHENOPOLY",
      "de": "FORCEHYPHENOPOLY"
    },
    paths: {
      patterndir: "./hyphenopoly/patterns/"
    },
    setup: {
      selectors: {
        ".hyphenate": {
          // ソフトハイフンを使用
          hyphen: "\u00AD"
        }
      }
    },
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);