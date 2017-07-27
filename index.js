#!/usr/bin/env node

const simpleGit = require('simple-git')( process.cwd() );
const semver = require('semver')

simpleGit.tags([], (err, tags)=>{
  let cleanTags = tags.all.map((x) => {
   return semver.clean(x);
  }).filter((x) => {
    return x !== null;
  });
  console.log(`bower: ${bowerver()} | package: ${packagever()} | GitHub: ${cleanTags.sort(semver.compare).pop()}`);

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
