const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// We will use the binaries provided by the static packages
const ffmpeg = require('ffmpeg-static');
const ffprobe = require('ffprobe-static').path;

const targetFolders = ['apple', 'mango', 'pineapple', 'orange'];
const baseDir = path.join(__dirname, '..', 'public', 'images', 'sequence');

targetFolders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (!fs.existsSync(folderPath)) {
    console.log(`Folder not found: ${folderPath}`);
    return;
  }

  // Find the mp4 file
  const files = fs.readdirSync(folderPath);
  const mp4File = files.find(f => f.endsWith('.mp4'));
  
  if (!mp4File) {
    console.log(`No .mp4 file found in ${folderPath}`);
    return;
  }

  const videoPath = path.join(folderPath, mp4File);
  console.log(`Processing ${videoPath}...`);

  try {
    // Get duration using ffprobe
    const durationOutput = execSync(`"${ffprobe}" -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${videoPath}"`).toString().trim();
    const duration = parseFloat(durationOutput);
    
    if (isNaN(duration) || duration <= 0) {
      throw new Error(`Invalid duration: ${durationOutput}`);
    }

    console.log(`  Duration: ${duration} seconds`);
    
    // We want exactly 60 frames.
    const fps = 60 / duration;
    
    // Clean up existing webp frames if any
    files.forEach(f => {
      if (f.endsWith('.webp')) {
        fs.unlinkSync(path.join(folderPath, f));
      }
    });

    const outputPattern = path.join(folderPath, 'frame_%03d.webp');
    console.log(`  Extracting frames at ${fps} fps...`);
    
    // Run ffmpeg
    execSync(`"${ffmpeg}" -i "${videoPath}" -vf "scale=1280:-1,fps=${fps}" -c:v libwebp -q:v 75 "${outputPattern}" -y`);
    
    console.log(`  Finished processing ${folder}.`);
    
    // Rename to 0-indexed
    const extractedFiles = fs.readdirSync(folderPath).filter(f => f.startsWith('frame_') && f.endsWith('.webp')).sort();
    
    let count = 0;
    extractedFiles.forEach((file) => {
      if (count >= 60) {
        fs.unlinkSync(path.join(folderPath, file));
      } else {
        const newName = `frame_${count.toString().padStart(3, '0')}.webp`;
        fs.renameSync(path.join(folderPath, file), path.join(folderPath, newName));
        count++;
      }
    });
    
    console.log(`  Renamed to 0-indexed and truncated to ${count} frames.`);
  } catch (error) {
    console.error(`Error processing ${folder}:`, error.message);
  }
});

console.log('All extractions complete!');
