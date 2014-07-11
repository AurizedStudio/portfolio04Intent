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
        files: ['scss/*.scss', 'scss/mixins/*.scss', 'scss/owl/*.scss'],
        tasks: ['sass']
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
				src: [
					'<%= paths.dist %>/*.html',
					'<%= paths.dist %>/css/*.css',
				]
			},
			options: {
				watchTask: true,
				proxy: "192.168.0.8:8000"
//				proxy: "192.168.0.5:8000"
//				proxy: "192.168.1.185:8000"
//				proxy: "192.168.0.5:8000"
//				proxy: "192.168.24.53:8000"
			}
		}
	},
	stylestats: {
		src: ['<%= paths.dist %>/css/style.css']
	}
});

grunt.registerTask('default', ['connect', 'browserSync', 'watch']);
grunt.registerTask('stats', ['stylestats']);

};
