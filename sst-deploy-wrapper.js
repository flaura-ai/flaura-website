#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Starting SST deployment with symlink fix...\n');

// Start watching for .sst/dist directory
const sstDistPath = path.join(process.cwd(), '.sst', 'dist');
let fixApplied = false;
let watchInterval;

const applyFix = () => {
  if (fixApplied) return;
  
  if (fs.existsSync(sstDistPath)) {
    console.log('\n🔧 Detected .sst/dist directory, applying symlink fix...\n');
    
    exec('node fix-symlinks.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Fix script error: ${error}`);
        return;
      }
      console.log(stdout);
      if (stderr) console.error(stderr);
      fixApplied = true;
      
      // Keep watching for new asset directories
      watchInterval = setInterval(() => {
        exec('node fix-symlinks.js', () => {});
      }, 2000);
    });
  }
};

// Start watching
const preWatchInterval = setInterval(applyFix, 500);

// Start the actual SST deployment
const args = process.argv.slice(2);
const sstProcess = spawn('npx', ['sst', 'deploy', ...args], {
  stdio: 'inherit',
  shell: true
});

sstProcess.on('exit', (code) => {
  clearInterval(preWatchInterval);
  if (watchInterval) clearInterval(watchInterval);
  
  if (code === 0) {
    console.log('\n✅ Deployment successful!');
  } else {
    console.log(`\n❌ Deployment failed with exit code ${code}`);
  }
  
  process.exit(code);
});

sstProcess.on('error', (err) => {
  clearInterval(preWatchInterval);
  if (watchInterval) clearInterval(watchInterval);
  console.error('Failed to start deployment:', err);
  process.exit(1);
});

