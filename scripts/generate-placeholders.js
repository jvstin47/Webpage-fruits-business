const fs = require('fs');
const path = require('path');

const fruits = [
  { id: 'apple', color: '#dc2626' },
  { id: 'mango', color: '#f59e0b' },
  { id: 'pineapple', color: '#eab308' },
  { id: 'orange', color: '#ea580c' }
];

const TOTAL_FRAMES = 60;
const WIDTH = 800;
const HEIGHT = 600;

fruits.forEach(fruit => {
  const dir = path.join(__dirname, '..', 'public', 'images', 'sequence', fruit.id);
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const frameIndex = i.toString().padStart(3, '0');
    const filePath = path.join(dir, `frame_${frameIndex}.webp`);
    
    // Simulate motion by moving a circle across the screen based on frame index
    const progress = i / (TOTAL_FRAMES - 1);
    const cx = 100 + (progress * 600);
    
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#111" />
      <circle cx="${cx}" cy="${HEIGHT/2}" r="50" fill="${fruit.color}" opacity="0.5" />
      <text x="${WIDTH/2}" y="${HEIGHT/2 - 20}" font-family="sans-serif" font-size="48" fill="white" font-weight="bold" text-anchor="middle">
        ${fruit.id.toUpperCase()}
      </text>
      <text x="${WIDTH/2}" y="${HEIGHT/2 + 40}" font-family="sans-serif" font-size="36" fill="${fruit.color}" text-anchor="middle">
        FRAME ${frameIndex}
      </text>
    </svg>`;

    fs.writeFileSync(filePath, svgContent);
  }
  console.log(`Generated 60 SVG frames for ${fruit.id}`);
});
