module.exports = function(config) {
	config.set({

		basePath: '',

		frameworks: ['jasmine'],

		files: [
			// 3rd-party
			'../lib/angular-1.2/angular.js',
			'../lib/angular-1.2/angular-touch.js',

			// App-specific
			'./demo-10a.js',

			// Testing-specific
			'../lib/angular-1.2/angular-mocks.js',
			'../lib/angular-1.2/angular-loader.js',
			'../lib/angular-1.2/ngMidwayTester.js',

			// Tests
			'tests/**/*.js'
		],

		// list of files to exclude
		exclude: [],

		// use dots reporter, as travis terminal does not support escaping sequences
		// possible values: 'dots', 'progress'
		// CLI --reporters progress
		// reporters: ['progress', 'junit'],
		// reporters: ['progress'],
		reporters: ['dots'],

		junitReporter: {
			// will be resolved to basePath (in the same way as files/exclude patterns)
			outputFile: 'test-results.xml'
		},

		// web server port
		// CLI --port 9876
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		// CLI --colors --no-colors
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		// CLI --log-level debug
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		// CLI --auto-watch --no-auto-watch
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		// CLI --browsers Chrome,Firefox,Safari
		//browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
		browsers: ['PhantomJS'],	// Oliver says: way less crashy and cluttered than Chrome or other browser with a UI

		// If browser does not capture in given timeout [ms], kill it
		// CLI --capture-timeout 5000
		captureTimeout: 20000,

		// Auto run tests on start (when browsers are captured) and exit
		// CLI --single-run --no-single-run
		singleRun: false,

		// report which specs are slower than 500ms
		// CLI --report-slower-than 500
		reportSlowerThan: 500,

		// compile coffee scripts
		// preprocessors: {
		//	'**/*.coffee': 'coffee'
		//},

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher'
			// 'karma-firefox-launcher'
			// 'karma-junit-reporter'
		]
	});
};
