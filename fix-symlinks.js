#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all asset directories in .sst/dist
const sstDistPath = path.join(process.cwd(), '.sst', 'dist');

if (!fs.existsSync(sstDistPath)) {
  console.log('No .sst/dist directory found, skipping symlink fix');
  process.exit(0);
}

const assetDirs = fs.readdirSync(sstDistPath).filter(dir => dir.startsWith('asset.'));

assetDirs.forEach(assetDir => {
  const binPath = path.join(sstDistPath, assetDir, 'node_modules', '.bin');
  
  if (!fs.existsSync(binPath)) {
    return;
  }

  console.log(`Removing .bin directory from ${assetDir}...`);
  
  // Simply remove the entire .bin directory since it's not needed at runtime
  // Lambda functions don't need these CLI binaries
  fs.rmSync(binPath, { recursive: true, force: true });
  console.log(`  Removed ${binPath}`);
});

console.log('Symlink fix complete!');

