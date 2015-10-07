# COMS_API
Documenting the COMS Service API using swagger

Setting up Continuous Integration on Windows - 
https://jhipster.github.io/setting_up_ci_windows.html


Getting started with Grunt
http://gruntjs.com/getting-started

How to automate with "watch" and grunt
http://www.thegeekstuff.com/2014/10/grunt-contrib-watch-automate/


https://www.npmjs.com/package/grunt-eslint
https://www.npmjs.com/package/eslint-html-reporter
https://www.npmjs.com/package/eslint-config-defaults
http://spdufeu.co.uk/add-grunt-and-eslint-to-a-mvc-project/

    eslint: {
        target: ['<%= src.files %>'],
        options: {
            format: require("eslint-html-reporter"),
            outputFile: "./reports/output/eslint-output.html"
        }
    }

    grunt.loadNpmTasks('grunt-eslint');


Global NPM Modules
bower@1.5.3
grunt@0.4.5
grunt-cli@0.1.13
grunt-contrib-concat@0.5.1
grunt-contrib-uglify@0.9.2

grunt-junit-report@0.0.4
grunt-qunit-cov@0.3.6

grunt-plato@1.2.1

mocha@2.3.3
mocha-unfunk-reporter@0.4.0

node-gyp@3.0.3

swagger@0.6.3
swagger-tools@0.9.5

Uninstall???
grunt-jscs@2.1.0
grunt-contrib-jshint@0.11.3
jscs@2.2.1
jshint-junit-reporter@0.2.2

Local NPM Modules
buildify@0.4.0
concat@1.0.0
concat-cli@1.0.1
eslint@1.6.0
eslint-config-defaults@7.0.1
eslint-html-reporter@0.4.14
grunt@0.4.5
grunt-cli@0.1.13
grunt-contrib-concat@0.5.1
grunt-contrib-jshint@0.11.3
grunt-contrib-uglify@0.9.2
grunt-contrib-watch@0.6.1
grunt-eslint@17.2.0
grunt-junit-report@0.0.4
grunt-xsltproc@0.5.1
jshint-junit-reporter@0.2.2
uglify@0.1.5


    "buildify": "*",
    "concat": "*",
    "concat-cli": "*",
    "eslint": "*",
    "eslint-config-defaults": "*",
    "eslint-html-reporter": "*",
    "grunt": "*",
    "grunt-cli": "*",
    "grunt-contrib-concat": "*",
			    "grunt-contrib-jshint": "*",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-watch": "*",
    "grunt-eslint": "*",
    "grunt-junit-report": "*",
    "grunt-xsltproc": "*",
			    "jshint-junit-reporter": "*",
    "uglify": "*"
