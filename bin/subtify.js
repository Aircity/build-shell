#!/usr/bin/env node

const { execSync } = require('child_process');
const globby = require('globby');

execSync("export http_proxy='http://127.0.0.1:1080'")
execSync("export https_proxy='http://127.0.0.1:1080'")

const files  = globby.sync(['*.mp4','*.mkv'])

for (file of files)
{
  execSync(`autosub '${file}'`,  {stdio: 'inherit'})
}
