const cwd = process.cwd();

module.exports = function(grunt) {
  return {
    build: {
      files: [
        {
          flatten: true,
          src: ['application/public/index.tpl'],
          dest: 'application/dist/index.tpl'
        }, {
          expand: true,
          filter: 'isFile',
          flatten: true,
          src: ['application/src/images/**'],
          dest: 'application/dist/images'
        }, {
          flatten: true,
          src: ['application/src/css/reset.css'],
          dest: 'application/dist/css/reset.css'
        }
      ]
    },
    javascript: {
      src: 'application/dist/index.html',
      dest: 'application/dist/index.html',
      options: {
        process: (ctx, path) => {
          let tpl = ctx;

          ['app', 'gtm', 'mixpanel'].forEach((source, idx) => {
            const regexp = new RegExp(`({{${source})}}`);
            const style = grunt.file.read(`${cwd}/application/dist/js/${source}.js`);

            tpl = tpl.replace(regexp, style);
          });

          return tpl;
        }
      }
    },
    stylesheets: {
      src: 'application/dist/index.tpl',
      dest: 'application/dist/index.html',
      options: {
        process: (ctx, path) => {
          let tpl = ctx;

          ['reset', 'index'].forEach((source, idx) => {
            const regexp = new RegExp(`({{${source})}}`);
            const style = grunt.file.read(`${cwd}/application/dist/css/${source}.css`);

            tpl = tpl.replace(regexp, style);
          });

          return tpl;
        }
      }
    }
  }
}
