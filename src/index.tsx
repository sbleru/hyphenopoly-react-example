import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Hyphenopoly from "hyphenopoly";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

// Hyphenopolyの設定
// if ((window as any).Hyphenopoly) {
//   (window as any).Hyphenopoly.config({
//     require: {
//       "en-us": "FORCEHYPHENOPOLY"
//     },
//     paths: {
//       maindir: "/hyphenopoly/",
//       patterndir: "/hyphenopoly/patterns/"
//     },
//     setup: {
//       selectors: {
//         ".hyphenate": {
//           hyphen: "•"
//         }
//       }
//     }
//   });
// }


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
