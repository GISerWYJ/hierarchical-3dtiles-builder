#!/usr/bin/env node
'use strict';

var argv = require('yargs')
    .usage('\nUsage: $0 --setting path --output directory')
    .alias('h', 'help')
    .help()
    .options({
        setting: {
            alias: 's',
            describe: 'Path to the setting file',
            type: 'string',
            normalize: true,
            demandOption: true
        },
        output: {
            alias: 'o',
            describe: 'Directory path for output',
            type: 'string',
            normalize: true,
            demandOption: true
        }
    })
    .parse();

console.log(argv);

