module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "jsx-a11y/href-no-hash": 0,
    "react/jsx-filename-extension": "off",
    "import/extensions": "never",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: false,
        parser: "babylon",
        printWidth: 100,
        tabWidth: 2
      }
    ]
  },
  plugins: ["react", "prettier"]
};
