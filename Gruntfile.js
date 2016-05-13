module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'index.html' // point to your HTML file.
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/sk.css': ['css/font.css', 'css/images.css', 'css/materialize.min.css', 'css/style.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },

            target: {
                files: {

                    'js/sk.js': ['js/jquery.min.js', 'js/materialize.min.js', 'js/init.js']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-wiredep');
}