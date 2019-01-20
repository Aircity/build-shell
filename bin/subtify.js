#!/usr/bin/env node

const { execSync } = require('child_process');
const globby = require('globby');
const path = require('path');

const files  = globby.sync(['*.mp4','*.mkv','*.webm'])
const srtFiles  = globby.sync('*.srt')

for (file of files)
{
  let srtName = path.basename(file, path.extname(file))+'.srt'
  if(!srtFiles.includes(srtName)){
    execSync(`autosub "${file}"`,  {stdio: 'inherit'})
  }
}
