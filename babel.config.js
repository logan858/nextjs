module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      'styled-components',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-syntax-export-default-from',
      '@babel-plugin-styled-components',
    ],
    env: {
      production: {
        only: ['app'],
        plugins: [
          'lodash',
          'transform-react-remove-prop-types',
          '@babel/plugin-transform-react-inline-elements',
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-syntax-export-default-from',
          '@babel-plugin-styled-components',
        ],
      },
      test: {
        plugins: [
          '@babel/plugin-transform-modules-commonjs',
          'dynamic-import-node',
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-syntax-export-default-from',
          '@babel-plugin-styled-components',
        ],
      },
    },
  };
  