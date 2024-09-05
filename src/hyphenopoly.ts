import Hyphenopoly from "hyphenopoly";

export const hyphenator = Hyphenopoly.config({
  require: ["de", "en-us"],
  // ソフトハイフンを使用
  hyphen: "\u00AD",
  loader: async (file: string, patDir: string) => {
    try {
      // ブラウザ互換の方法でファイルパスを構築
      const filePath = new URL(
        `../node_modules/hyphenopoly/patterns/${file}`,
        import.meta.url
      ).href;
      // WebAssemblyファイルの場合は fetch を使用
      if (file.endsWith(".wasm")) {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(
            `${filePath}の取得に失敗しました: ${response.status} ${response.statusText}`
          );
        }
        const wasmBuffer = await response.arrayBuffer();
        if (wasmBuffer.byteLength === 0) {
          throw new Error(`${filePath}の内容が空です`);
        }
        return wasmBuffer; // ArrayBuffer を直接返す
      } else {
        // 通常のファイルの場合は従来通り
        const fileContent = await import(/* @vite-ignore */ filePath);
        return fileContent.default;
      }
    } catch (error) {
      console.error(error);
    }
  },
});
