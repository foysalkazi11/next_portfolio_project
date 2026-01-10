const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const projectRoot = path.resolve(__dirname, '..');
const outputPath = path.join(projectRoot, 'portfolio-deployment.zip');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const outputPathWithTimestamp = path.join(projectRoot, `portfolio-deployment-${timestamp}.zip`);

const excludePatterns = [
  'node_modules/**',
  '.next/**',
  '.git/**',
  '*.log',
  '.DS_Store',
  '.env*.local',
  '.vercel/**',
  '*.tsbuildinfo',
  'coverage/**',
  '.pnp/**',
  'portfolio-deployment*.zip',
  '.pnp.js',
  'build/**',
  'out/**',
];

function shouldExclude(filePath) {
  const relativePath = path.relative(projectRoot, filePath);
  
  for (const pattern of excludePatterns) {
    if (pattern.includes('**')) {
      const prefix = pattern.replace('/**', '');
      if (relativePath.startsWith(prefix)) {
        return true;
      }
    } else if (pattern.includes('*')) {
      const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
      if (regex.test(path.basename(relativePath))) {
        return true;
      }
    } else if (relativePath === pattern || relativePath.startsWith(pattern + '/')) {
      return true;
    }
  }
  
  return false;
}

function createZip() {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPathWithTimestamp);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    output.on('close', () => {
      const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
      console.log(`\n✅ Deployment ZIP created successfully!`);
      console.log(`📦 File: ${path.basename(outputPathWithTimestamp)}`);
      console.log(`📊 Size: ${sizeInMB} MB`);
      console.log(`📍 Location: ${outputPathWithTimestamp}\n`);
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);

    function addDirectory(dirPath) {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relativePath = path.relative(projectRoot, fullPath);
        
        if (shouldExclude(fullPath)) {
          continue;
        }
        
        if (entry.isDirectory()) {
          addDirectory(fullPath);
        } else {
          archive.file(fullPath, { name: relativePath });
        }
      }
    }

    addDirectory(projectRoot);
    
    archive.finalize();
  });
}

async function main() {
  console.log('🚀 Creating deployment ZIP for Hostinger...\n');
  
  if (!fs.existsSync(path.join(projectRoot, '.env'))) {
    console.warn('⚠️  Warning: .env file not found. Make sure to create it with RESEND_API_KEY before deployment.\n');
  }
  
  try {
    await createZip();
  } catch (error) {
    console.error('❌ Error creating ZIP file:', error);
    process.exit(1);
  }
}

main();

