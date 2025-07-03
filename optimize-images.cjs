const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = './static/assets/img';
  const outputDir = './static/assets/img/optimized';
  
  // Criar diretório de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      try {
        // Otimizar para WebP com diferentes tamanhos
        await sharp(inputPath)
          .resize(400, 400, { fit: 'cover' })
          .webp({ quality: 85 })
          .toFile(outputPath);
        
        // Criar versão JPEG otimizada como fallback
        const jpegPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
        await sharp(inputPath)
          .resize(400, 400, { fit: 'cover' })
          .jpeg({ quality: 85 })
          .toFile(jpegPath);
        
        console.log(`✅ Otimizado: ${file}`);
      } catch (error) {
        console.error(`❌ Erro ao otimizar ${file}:`, error);
      }
    }
  }
}

optimizeImages().then(() => {
  console.log('🎉 Otimização concluída!');
}).catch(console.error); 