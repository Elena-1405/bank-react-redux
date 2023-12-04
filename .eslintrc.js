module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/button-has-type': 'off',
        'react/destructuring-assignment': 'off',
        'no-unused-vars': 'off',
        'no-underscore-dangle': 0,
        'allowIndentationTabs': 0,
        'eslint no-mixed-spaces-and-tabs': 0,
        'assignment': 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        },
}
