module.exports = function(grunt) {
  'use strict';
   grunt.initConfig({
     //all TASK configuration goes in here

     clean:['build/'],

     jshint: { //defined by the plugin
       options: {
         jshintrc: '.jshintrc',
         ignores: ['node_modules/**']

       },

       source: { ///abitrary name
         files: {
           src: ['src/js**/*.js']
         }
       },
       test:{
         files: {
           src: ['test/specs/**/*.js']
         }
       }
     },

     sass: { //taskname
       allStyles: { //targetname
         files: {
           'build/css/styles.css': 'src/sass/main.scss'
         }
       }

     },

     copy: {
       html: {
         files: [
          {
           expand: true,
           cwd: 'src/',
           src: ['index.html'],
           dest: 'build/'
         }
         ]
       }
     },

     vendorjs: {
       files: [
         {
           expand: true,
           cwd: 'node_modules/jquery/dist/',
           src: ['jquery.js'],
           dest: 'build/js/'
         }
       ]
     },

     concat: {
       js: {
         src: ['**/*.js'],
         dest: 'build/js/app.js'
       }
     },

     connect: {
       testing: {
         options: {
           port: 8888,
           base: '.'
         }
       }
     },

     mocha: {
       all: {
         options: {
           urls: [
             'http://localhost:8888/test/thoughter-test.html'
           ]
         }
       }
     }





   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-mocha');



   grunt.registerTask('test', 'jshint', [ 'connect', 'mocha']); // add jshint back
   grunt.registerTask('default', ['clean', 'test', 'sass','copy', 'concat'] ); //add back tests



};
