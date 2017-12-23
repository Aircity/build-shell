#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');

const { exec } = require('child_process');

program
  .version(packageJson.version)
  .description('Sublime Text')

program
  .command('*')
  .action(function (dir) {
    console.log(`open -a 'Sublime Text' ${dir}`);    
    exec(`open -a 'Sublime Text' ${dir}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log("❤ Enjoy your life！");
    });
  });

program.parse(process.argv);