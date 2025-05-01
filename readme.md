# 🧩 Section Bloc

**Section Bloc** is a lightweight VS Code extension that lets you create custom, foldable code sections using `@section:` comments.


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
![Gif 1](https://cdn.discordapp.com/attachments/677252152946851860/1367479363326709830/Gif_2.gif?ex=6814bbe6&is=68136a66&hm=483ed67d04303217554460fd74e6ae9e1d59d1caae58de1b4b002a06189ad391&)

---

### 2️⃣Command Palette

To quickly insert a new section block:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Run: Section Bloc: Insert Section
3. Enter a name like `Import`, `Auth`, or `Debug`
4. The section will be inserted with the right comment style for your language
![Gif 2](https://github.com/user-attachments/assets/022e3d62-91a7-4483-9845-ca114136e881)

---

## 🎨 Customize Highlighting (Optional)

You can configure section highlighting colors from VS Code settings.

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Search `Section Bloc`
3. Change:
  - Enable Highlight ✅
  - Highlight Background 🎨
  - Text Color 🖊️

![Gif 3](https://github.com/user-attachments/assets/e8596dff-c02b-4bf5-bd06-1b18ed63084f)

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

Available soon on the VS Code Marketplace:  
🔗 _Coming soon..._

---

## 💡 License

MIT – Do whatever you want 😄

---

> Created with ❤️ by [Apouuuuuuu](https://github.com/Apouuuuuuu)
