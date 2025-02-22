#!/usr/bin/env node
import { execSync } from "child_process"

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'})
    } catch (error) {
        console.error(`Failed to excute`, error)
        return false
    }
    return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/denishsuthar/node-starter.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`;

console.log("Installing.......");

const checkout = runCommand(gitCheckoutCommand)
if(!checkout) process.exit(-1)

console.log(`Installing dependencies for denish starter template`);

const installDeps = runCommand(installDepsCommand)
if(!installDeps) process.exit(-1)

console.log(`Done....Denish Template has been installed. Start Backend using below command`);
console.log(`cd ${repoName} && npm start`);