'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks('grunt-angular-templates');
	require('time-grunt')(grunt);

	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		yeoman: appConfig,
		watch: {
			bower: {files: ['bower.json'], tasks: ['wiredep']},
			js: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
				tasks: ['newer:jshint:all'],
				options: {livereload: '<%= connect.options.livereload %>'}
			},
			styles: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
				tasks: ['newer:copy:styles', 'autoprefixer']
			},
			gruntfile: {files: ['Gruntfile.js']},
			livereload: {
				options: {livereload: '<%= connect.options.livereload %>'},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},
		connect: {
			options: {
				port: 9002,
				hostname: '127.0.0.1',
				livereload: 35730
			},
			test: {
				options: {
					port: 9001,
					middleware: function (connect) {
						return [
							connect.static('.tmp'),
							connect.static('test'),
							connect().use(
								'/bower_components',
								connect.static('./bower_components')
							),
							connect.static(appConfig.app)
						];
					}
				}
			},
			livereload: {
				options: {
					open: true,
					middleware: function (connect) {
						return [
							connect.static('.tmp'), connect().use('/bower_components',connect.static('./bower_components')),
							connect.static(appConfig.app)
						];
					}
				}
			},
			dist: {
				options: {open: true, base: '<%= yeoman.dist %>'}
			}
		},
		ngdocs: {
			all: ['<%= yeoman.app %>/scripts/{,*/}*.js']
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/{,*/}*',
						'!<%= yeoman.dist %>/.git{,*/}*'
					]
				}]
			},
			server: '.tmp'
		},
		autoprefixer: {
			options: {browsers: ['last 1 version']},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: ['{,*/}*.css', '<%= yeoman.app %>/scripts/helpers/**/*.css'],
					dest: '.tmp/styles/'
				}]
			}
		},
		wiredep: {
			app: {
				src: ['<%= yeoman.app %>/index.html'],
				ignorePath:  /\.\.\//
			},
			test: {
				devDependencies: true,
				src: '<%= karma.unit.configFile %>',
				ignorePath:  /\.\.\//,
				fileTypes:{
					js: {
						block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
						detect: {
							js: /'(.*\.js)'/gi
						},
						replace: {
							js: '\'{{filePath}}\','
						}
					}
				}
			}
		},
		filerev: {
			dist: {
				src: [
					'<%= yeoman.dist %>/scripts/{,*/}*.js',
					'<%= yeoman.dist %>/styles/{,*/}*.css',
					//'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}',
					'<%= yeoman.dist %>/styles/fonts/*'
				]
			}
		},
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>',
				flow: {
					html: {
						steps: {js: ['concat', 'uglify'], css: ['cssmin']},
						post: {}
					}
				}
			}
		},
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html']
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					conservativeCollapse: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
		ngAnnotate: {
			options: {singleQuotes: true},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: ['*.js', '!oldieshim.js'],
					dest: '.tmp/concat/scripts'
				}]
			}
		},
		cdnify: {
			dist: {html: ['<%= yeoman.dist %>/*.html']}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'404.html',
						'index.html',
						'images/**/*.{png,jpg,jpeg,gif,webp,svg}',
						'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}',
						'styles/fonts/{,*/}*.*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap/dist',
					src: 'fonts/*',
					dest: '<%= yeoman.dist %>'
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},
		concurrent: {
			server: ['copy:styles'],
			test: ['copy:styles'],
			dist: ['copy:styles', 'svgmin']
		},
		ngtemplates: {
			dist: {
				options: {
					module: 'MapApp'
				},
				cwd: '<%= yeoman.app %>',
				src: 'views/**/*.html',
				dest: '<%= yeoman.app %>/scripts/templates.js'
			}
		},
		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				singleRun: true
			}
		}
	});

	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
		if(target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}
		grunt.task.run([
			'clean:server',
			'wiredep',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'ngtemplates',
			'watch'
		]);
	});

	grunt.registerTask('template', [
		'ngtemplates'
	]);

	grunt.registerTask('test', [
		'wiredep:test',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cssmin',
		'uglify',
		'filerev',
		'usemin',
		'htmlmin'
	]);
};
