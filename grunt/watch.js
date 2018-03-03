module.exports = {
  files: ['application/public/**/*', 'application/src/**/*'],
  tasks: ['build'],
  options: {
    atBegin: true,
    spawn: false
  }
}
