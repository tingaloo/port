module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'src/index.html': 'source/index.html.erb'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'source/javascripts/output.min.js':[
          'source/javascripts/all.js']
        }
      }
    },
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['source/javascripts/all.js']
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'source/stylesheets/output.min.css': ['source/stylesheets/all.css', 'source/stylesheets/custom.css', 'source/stylesheets/normalize.css']
        }
      }
    },
    sass: {
      dist: {
        files: {
          'source/stylesheets/custom.css' : 'source/stylesheets/sass/custom.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}
