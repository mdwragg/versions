#!/usr/bin/env node

var simpleGit = require('simple-git')( process.cwd() );

simpleGit.tags([], (err, tags)=>{
  console.log(`bower: ${bowerver()} | package: ${packagever()} | GitHub: ${tags.latest}`);
})

var bowerver = (() =>{
  try {
    const bowerj = require(`${process.cwd()}/bower.json`);
    return bowerj.version;
  }
  catch(e){
    console.error('bower.json not found')
    return ('NA');
  }
});

var packagever = (() =>{
  try {
    const packagej = require(`${process.cwd()}/package.json`);
    return packagej.version;
  }
  catch(e){
    console.error('package.json not found')
    return ('NA');
  }
});
