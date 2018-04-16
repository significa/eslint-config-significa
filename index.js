module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    "jsx-a11y/href-no-hash": 0,
    "react/jsx-filename-extension": "off",
    "import/extensions": "never",
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ]
  }
};
