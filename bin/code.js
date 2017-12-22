#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const packageJson = require('../package.json');

const { exec } = require('child_process');

program
  .version(packageJson.version)
  .description('Visual Studio Code')
  .action(function (dir) {
    console.log('rmdir %s', dir);
  });

program
  .command('*')
  .action(function (dir) {
    console.log(`open -a 'Visual Studio Code' ${dir}`);    
    exec(`open -a 'Visual Studio Code' ${dir}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log("❤ Enjoy your life！");
    });
  });

program.parse(process.argv);