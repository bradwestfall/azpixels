module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          //style: 'compressed'
        },
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      single_file: {
        src: 'css/styles.css',
        dest: 'css/styles.css'
      },
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer']);
  grunt.registerTask('default', ['watch']);

};