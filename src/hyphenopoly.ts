import Hyphenopoly from "hyphenopoly";

export const hyphenator = Hyphenopoly.config({
  require: ["de", "en-us"],
  // NOTE: setupはnodeの書き方だと使えない
  // setup: {
  //   selectors: {
  //     // defaultLanguage: "en-us",
  //     ".hyphenatePipe": {
  //       hyphen: "•",
  //       minWordLength: 15
  //     }
  //   }
  // },

  // 最小6文字からハイフネーション
  minWordLength: 6,

  // 左右の最小文字数を設定して1単語に1つのハイフネーションを実現
  leftmin: 3, // 左側最小3文字
  rightmin: 3, // 右側最小3文字

  // 言語ごとの設定も可能
  leftminPerLang: {
    "en-us": 3,
    ja: 3,
  },
  rightminPerLang: {
    "en-us": 3,
    ja: 3,
  },

  // ソフトハイフンを使用
  hyphen: "\u00AD",
  loader: async (file: string, patDir: string) => {
    try {
      // ブラウザ互換の方法でファイルパスを構築
      const filePath = new URL(
        `/node_modules/hyphenopoly/patterns/${file}`,
        import.meta.url,
      ).href;
      // hyphenopolyではwasmファイルのみ対応しているためその想定で実装する
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(
          `${filePath}の取得に失敗しました: ${response.status} ${response.statusText}`,
        );
      }
      const wasmBuffer = await response.arrayBuffer();
      if (wasmBuffer.byteLength === 0) {
        throw new Error(`${filePath}の内容が空です`);
      }
      return wasmBuffer;
    } catch (error) {
      console.error(error);
    }
  },
});
