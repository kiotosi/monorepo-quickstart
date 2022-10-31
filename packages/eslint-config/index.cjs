module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    overrides: [
        // Lint Jest only in __test__ folder
        {
            files: ["__test__/**"],
            plugins: ["jest"],
            extends: ["plugin:jest/recommended"],
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint", "jest"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
    },
};
