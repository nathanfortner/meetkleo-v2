#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all .svelte files
const findSvelteFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findSvelteFiles(fullPath));
    } else if (item.endsWith('.svelte')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix HTML structure issues
const fixHtmlStructure = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Fix 1: Replace </span> with </p> for paragraph elements
  const spanToPRegex = /<p([^>]*)>([^<]*)<\/span>/g;
  if (spanToPRegex.test(content)) {
    content = content.replace(spanToPRegex, '<p$1>$2</p>');
    changed = true;
  }
  
  // Fix 2: Fix nested heading elements (h6 inside p, h3, etc.)
  const headingInParagraphRegex = /<p([^>]*)>([^<]*)<h([1-6])([^>]*)>([^<]*)<\/h[1-6]>([^<]*)<\/p>/g;
  if (headingInParagraphRegex.test(content)) {
    content = content.replace(headingInParagraphRegex, '<div$1>$2<span$4>$5</span>$6</div>');
    changed = true;
  }
  
  // Fix 3: Fix paragraph inside heading elements
  const paragraphInHeadingRegex = /<h([1-6])([^>]*)>([^<]*)<p([^>]*)>([^<]*)<\/p>([^<]*)<\/h[1-6]>/g;
  if (paragraphInHeadingRegex.test(content)) {
    content = content.replace(paragraphInHeadingRegex, '<h$1$2>$3<span$4>$5</span>$6</h$1>');
    changed = true;
  }
  
  // Fix 4: Fix implicit closing tags
  const implicitClosingRegex = /<p([^>]*)>([^<]*)<div/g;
  if (implicitClosingRegex.test(content)) {
    content = content.replace(implicitClosingRegex, '<div$1>$2<div');
    changed = true;
  }
  
  // Fix 5: Fix missing closing tags for paragraphs
  const missingClosingPRegex = /<p([^>]*)>([^<]*)<div([^>]*)>([^<]*)<\/div>([^<]*)<\/div>/g;
  if (missingClosingPRegex.test(content)) {
    content = content.replace(missingClosingPRegex, '<div$1>$2<div$3>$4</div>$5</div>');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  
  return false;
};

// Main execution
const srcDir = path.join(__dirname, 'src');
const svelteFiles = findSvelteFiles(srcDir);

console.log(`Found ${svelteFiles.length} Svelte files to check...`);

let fixedCount = 0;
for (const file of svelteFiles) {
  if (fixHtmlStructure(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);

// Try building to see if issues are resolved
console.log('\nTesting build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build still has issues. Manual fixes needed.');
}
