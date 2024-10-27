# React Redux Toolkit Query Table with Item Details

This project demonstrates a simple data table using React, Redux Toolkit Query, and Material UI. It fetches a list of items from an API, displays them in a table, and shows detailed information when a row is clicked.

## Features

- **Redux Toolkit Query** for data fetching
- **Material UI Table** for UI layout
- **State Management** with Redux Toolkit slices
- **TypeScript** support for type safety

## Project Structure

````plaintext
src/
├── components/
│   ├── MainTable.tsx         # Main table component displaying items
│   └── DetailsTabs.tsx       # Component displaying detailed item information
├── redux/
│   ├── api.ts                # Redux Toolkit Query API setup
│   └── itemSlice.ts          # Redux slice for item state management
└── App.tsx                   # Main app component




## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
````

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
