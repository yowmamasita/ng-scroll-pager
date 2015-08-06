'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'dist/infinite-scroll.min.js': ['src/*.js']
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};

