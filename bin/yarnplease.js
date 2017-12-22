#!/usr/bin/env node

const { exec } = require('child_process');

exec("rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && yarn install", (error, stdout, stderr) => {
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
    console.log("❤ Enjoy your life！");
});