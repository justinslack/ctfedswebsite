module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
        src: [
            'js/*.js', // All JS in the libs folder
            'js/global.js'  // This specific file
        ],
        dest: '_site/js/app.js',
        }
    },

        uglify: {
        build: {
            src: '_site/js/app.js',
            dest: '_site/js/app.min.js'
        }
    },
    sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            '_site/css/main.css': 'css/global.scss'
            }
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
    watch: {
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    css: {
        files: 'css/*.scss',
        tasks: ['sass']
    },
    }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass', 'uglify', 'imagemin', 'watch']);

};
