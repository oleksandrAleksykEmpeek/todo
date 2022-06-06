module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  ignorePatterns: [".eslintrc.js"],
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "warn",
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
