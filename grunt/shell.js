const cwd = process.cwd();
const grunt = require('grunt');

module.exports = {
  start: {
    command: () => {
      const cmd = grunt.option('port') ? `npx http-server -p ${port}` : 'npx http-server';

      return `${cmd} ${cwd}/application/dist -o`;
    }
  }
};
