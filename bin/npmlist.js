#!/usr/bin/env node

const { exec } = require('child_process');

exec("npm ls --depth=0", (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stdout) {
        console.log(`stdout: ${stdout}`);
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
});