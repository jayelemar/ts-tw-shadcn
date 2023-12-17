module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier" // Add Prettier configuration
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "@typescript-eslint", "prettier"], // Add Prettier plugin
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ],
        "prettier/prettier": "error" // Use Prettier for formatting
    }
};
