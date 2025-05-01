# 🧩 Section Bloc

**Section Bloc** is a lightweight VS Code extension that lets you create custom, foldable code sections using `@section:` comments.  
🔗 [View on GitHub](https://github.com/Apouuuuuuu/Section-Bloc)


---

## ✨ Features

- ✅ Create foldable code sections with `@section:` and `@endsection`
- ✅ Customizable background and text colors for section headers
- ✅ Inline gutter icon on section lines
- ✅ Command to insert new section blocks from the command palette

---

## 🚀 How to Use

### 1️⃣ Manually
Just add this in your code:
```ts
// @section: Initialization
console.log("Start");
// @endsection
```
Then click the folding arrow on the left to collapse or expand the block.  
Works with many comment syntaxes: `//`, `#`, `<!-- -->`, `/* */`, etc.
![Gif 1](https://i.postimg.cc/K85SbQLp/Gif-1.gif)

---

### 2️⃣Command Palette

To quickly insert a new section block:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Run: Section Bloc: Insert Section
3. Enter a name like `Import`, `Auth`, or `Debug`
4. The section will be inserted with the right comment style for your language
![Gif 2](https://i.postimg.cc/rwRML5jv/Gif-2.gif)

---

## 🎨 Customize Highlighting (Optional)

You can configure section highlighting colors from VS Code settings.

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Search `Section Bloc`
3. Change:
  - Enable Highlight ✅
  - Highlight Background 🎨
  - Text Color 🖊️

![Gif 3](https://i.postimg.cc/28pxwDJh/Gif-3.gif)

## 🧠 Supported Languages

Section Bloc supports the following languages:

- Python  
- JavaScript  
- TypeScript  
- HTML  
- CSS  
- PHP  
- C++  
- C  
- Java  
- ShellScript  
- JSONC  
- XML  
- YAML  
- Markdown

---

## 📦 Install

You can install **Section Bloc** in two ways:

1. 🔗 From the VS Code Marketplace:  
   [https://marketplace.visualstudio.com/items?itemName=apouuuuuuu.section-bloc](https://marketplace.visualstudio.com/items?itemName=apouuuuuuu.section-bloc)

2. 🧩 Directly from the Extensions panel in VS Code:  
   - Open VS Code  
   - Go to the Extensions tab (`Ctrl+Shift+X`)  
   - Search for `Section Bloc`  
   - Click "Install"

![Install Screenshot](https://i.postimg.cc/vm0f9FFR/image-2025-05-01-150341960.png)

---

## 💡 License

MIT – Do whatever you want 😄

---

> Created with ❤️ by [Apouuuuuuu](https://github.com/Apouuuuuuu)
