/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: ["eslint-config-project", "plugin:vue/vue3-recommended"],
    plugins: ["vue"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    ignorePatterns: ["vite-env.d.ts"],
    rules: {},
};
