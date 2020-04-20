module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "@react-native-community",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "react/display-name": 0,
        "react/prop-types": 0,
    },
};
