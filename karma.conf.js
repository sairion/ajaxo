module.exports = function(config) {
    var ci = !!process.env.ENV_CI;

    config.set({
        basePath: '.',
        frameworks: ['mocha', 'sinon'],
        files: [
          'test/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.spec.js': ['webpack']
        },
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sinon',
        ],
        browsers: ['Chrome'],
        browserNoActivityTimeout: 30000,
        port: 9876,
        reporters: ['dots'],
        autoWatch: !ci,
        singleRun: ci,
        logLevel: config.LOG_DEBUG,
        colors: true,
    });
}
