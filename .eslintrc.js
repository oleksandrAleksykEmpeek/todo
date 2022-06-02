module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  ignorePatterns: [".eslintrc.js"],
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*js", "*.jsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
