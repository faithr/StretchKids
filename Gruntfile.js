/**
 * Created by David Ziegelheim on 4/8/2016.
 */
module.exports = function (grunt) {
    // Configure grunt 
    grunt.initConfig({
        sprite: {
            all: {
                src: ['img/*.jpg', '!img/spritesheet.jpg'],
                dest: 'img/spritesheet.jpg',
                destCss: 'css/sprites.css'
            }
        },
        postcss: {
            options: {

                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'css/maps/' // ...to the specified directory
                },

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: ['css/*.css'],
                dest: 'dist/master.css'
            }
        }
    });

    // Load in `grunt-spritesmith` 
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-postcss');
};
