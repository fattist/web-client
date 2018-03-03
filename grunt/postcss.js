module.exports = {
  options: {
    map: false,
    processors: [
      require('pixrem')(),
      require('autoprefixer')({ browsers: 'last 2 versions' }),
      require('cssnano')()
    ]
  },
  dist: {
    src: 'application/dist/css/*.css'
  }
}
