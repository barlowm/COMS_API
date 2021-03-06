/*
 * Make sure Grunt and it's necessary dependancies are installed...
 * npm install
 * npm install -g grunt-cli
 * npm install grunt --save-dev
 * npm install jshint-junit-reporter
 * npm install grunt-contrib-concat --save-dev
 * npm install grunt-contrib-jshint --save-dev
 * npm install grunt-junit-report --save-dev
 * npm install grunt-xsltproc --save-dev
 * npm install grunt-phplint
 * Ensure PHP is in the path
 */
var mode = "Dev";
// mode = "Prod";

module.exports = function(grunt) {
    var eslint_config = ".eslintrc";
    if ("Dev" === mode) {
        eslint_config = "Warning.eslintrc";
    }
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            files: [
                './LocalizedCode.js',
                './script/broken.js',
                './script/Consts.js',
                './script/Extensions.js',
                './script/Requires.js',
                './script/app/ux/**/*.js',
                './script/app/model/*.js',
                './script/app/store/*.js',
                './script/app/view/**/*.js',
                './script/app/controller/*.js',
                './script/app/controller/**/*.js',
                './script/app.js'
            ]
        },

            /* http://eslint.org/ */
        eslint: {
            target: ['<%= src.files %>'],
            options: {
                config : eslint_config,
                format: require("eslint-html-reporter"),
                outputFile: "./reports/output/eslint-output.html"
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['eslint']);
};