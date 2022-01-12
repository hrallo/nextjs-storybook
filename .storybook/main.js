const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    '@storybook/preset-scss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       modules: true,
    //       // localIdentName: '[name]__[local]--[hash:base64:5]',
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
