module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
            '_site/css/main.css' : 'css/scss/global.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '_site/assets/'
        }]
        }
    },
  });

  // Load these required NPM tasks:
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default',['watch', 'imagemin']); // This registers the watch task as the default task. If you require more tasks, create another one

};