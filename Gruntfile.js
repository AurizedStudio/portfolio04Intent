module.exports = function (grunt) {

var pkg = grunt.file.readJSON('package.json');
var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
		grunt.loadNpmTasks(taskName);
		}
	}

grunt.initConfig({
	paths: {
		dist: './htdocs'
	},
	connect: {
		uses_defaults: {}
	},
	sass: {
        dist: {
		    options: {
                sourcemap: 'true',
			    style: 'expanded'
		    },
            files: {
                '<%= paths.dist %>/css/style.css':'scss/style.scss'
            }
        }
	},
	autoprefixer: {
		options: {
			browsers: ['last 2 version', 'ie 8', 'ie 9']
		},
		no_dest:{
			src: '<%= paths.dist %>/css/style.css',
		}
	},
    watch: {
        css: {
            files: ['scss/*.scss', 'scss/mixins/*.scss', 'scss/owl/*.scss'],
            tasks: ['sass', 'autoprefixer']
        }
    },
	esteWatch: {
		options: {
			dirs: ['scss/','scss/mixins/','scss/owl/'],
			livereload: {
				enabled: false
			}
		},
		'scss': function(filepath) {
//			return ['less', 'autoprefixer']
			return ['sass:dist']
		}
	},
	browserSync: {
		default_options: {
			files: {
				src: ['<%= paths.dist %>/js/*.js','<%= paths.dist %>/css/*.css','<%= paths.dist %>/*.html']
			},
			options: {
				watchTask: true,
//				proxy: "192.168.0.28:8000"
				proxy: "192.168.0.4:8000"
//				proxy: "192.168.0.30:8000"
//				proxy: "192.168.0.8:8000"
//				proxy: "192.168.0.5:8000"
//				proxy: "192.168.1.185:8000"
//				proxy: "192.168.0.5:8000"
//				proxy: "192.168.24.53:8000"
			}
		}
	},
	stylestats: {
		src: ['<%= paths.dist %>/css/style.css']
	},
    sprite: {
        all:{
            src: 'sprite-sns-img/*.png',
            destCSS: 'scss/_sprite-sns-img.scss',
            destImg: '<%= paths.dist %>/img/bg-sns.png',
            'algorithm': 'binary-tree',
            'imgPath': '../img/bg-sns.png'
        }
    },
    webfont: {
        icons: {
            src: 'svg/*.svg',
            dest: '<%= paths.dist %>/fonts',
            destCss: 'scss',
            options: {
                engine: 'node',
                stylesheet: 'scss',
                relativeFontPath: '../fonts'
            }
        }
    }
});

grunt.registerTask('default', ['connect', 'browserSync', 'watch']);
grunt.registerTask('stats', ['stylestats']);

};
