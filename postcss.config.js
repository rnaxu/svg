module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: ['iOS >= 8', 'Android >= 4.2', 'last 2 ChromeAndroid versions']
    }),
    require('cssnano')({
      autoprefixer: false,
    }),
  ],
};