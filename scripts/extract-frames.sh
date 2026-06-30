#!/bin/bash

BASE_DIR="$(pwd)/public/images/sequence"
FOLDERS=("apple" "mango" "pineapple" "orange")

for FOLDER in "${FOLDERS[@]}"; do
    FOLDER_PATH="$BASE_DIR/$FOLDER"
    
    if [ ! -d "$FOLDER_PATH" ]; then
        echo "Folder not found: $FOLDER_PATH"
        continue
    fi
    
    # Find mp4 file
    MP4_FILE=$(ls -1 "$FOLDER_PATH"/*.mp4 2>/dev/null | head -n 1)
    
    if [ -z "$MP4_FILE" ]; then
        echo "No .mp4 file found in $FOLDER_PATH"
        continue
    fi
    
    echo "Processing $MP4_FILE..."
    
    # Get duration using ffprobe
    DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$MP4_FILE")
    echo "  Duration: $DURATION seconds"
    
    # Calculate FPS (60 frames / duration). Using awk since bash doesn't support floats
    FPS=$(awk "BEGIN {print 60 / $DURATION}")
    echo "  Extracting frames at $FPS fps..."
    
    # Clean existing webp
    rm -f "$FOLDER_PATH"/*.webp
    
    # Extract frames
    ffmpeg -v error -stats -i "$MP4_FILE" -vf "scale=1280:-1,fps=$FPS" -c:v libwebp -q:v 75 "$FOLDER_PATH/frame_%03d.webp" -y
    
    # Rename frames to be 0-indexed (frame_000 to frame_059)
    # ffmpeg outputs 001 to X
    FILES=("$FOLDER_PATH"/frame_*.webp)
    COUNT=0
    for FILE in "${FILES[@]}"; do
        if [ -f "$FILE" ]; then
            if [ $COUNT -ge 60 ]; then
                rm "$FILE"
            else
                NEW_NAME=$(printf "frame_%03d.webp" $COUNT)
                mv "$FILE" "$FOLDER_PATH/$NEW_NAME"
                ((COUNT++))
            fi
        fi
    done
    
    echo "  Renamed to 0-indexed and truncated to $COUNT frames."
done

echo "All extractions complete!"
