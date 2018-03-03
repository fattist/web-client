const cwd = process.cwd();
const uuid = require('node-uuid');

module.exports = function(grunt) {
  grunt.registerTask('setup', '', () => {
    const config = grunt.file.readJSON(`${cwd}/secrets/aws.json`);
    const _uuid = uuid.v1();

    grunt.config.set('aws', config);
    grunt.config.set('uuid', _uuid);

    grunt.log.writeln(`uuid: ${_uuid}`);
    grunt.log.writeln(`cfdi: ${config.AWS_DISTRIBUTIONID}`);
  });
}
