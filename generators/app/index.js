'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.log(yosay('Hello and welcome to the Restify generator !'));

        // this.option('no-install');
    }

    dirname() {
        if (this.options.dirname) {
            return true;
        }

        const prompt = [
            {
                type: 'input',
                name: 'dirname',
                message: 'Enter your project name'
            }
        ];

        return this.prompt(prompt).then(response => {
            this.options.dirname = response.dirname;
        });
    }

    writing() {
        // Create directory
        this.destinationRoot(this.options.dirname);
        this.appname = this.options.dirname;

        this.fs.copyTpl(this.templatePath('.'), this.destinationPath('.'), {
            appname: this.appname
        });
    }
};
