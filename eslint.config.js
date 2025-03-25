const perfectionist = require("eslint-plugin-perfectionist");

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/coverage/**',
      '**/build/**'
    ],
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "side-effect",
            "style",
            "object",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
];
