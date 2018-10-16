let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    directConnect: true,

    capabilities: {
        browserName: 'chrome'
    },

    specs: ['../Tests/AddCustomers.spec.js'],

    // suites: {
    //     smoke: ['../Tests/BankManagerSimple.spec.js', '../Tests/demo.spec.js'],
    //     regression: ['../Tests/*.spec.js']

    // },

    onPrepare: function () {

        browser.manage().window().setPosition(2000, 0);
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../report/screenshots',
            preserveDirectory: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'CyberBank-Report.html'
        }).getJasmine2Reporter());

    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }

    }
};
