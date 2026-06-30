import cv2
import os
import glob

base_dir = "/Users/justin/Public/projects/Pjj/public/images/sequence"
folders = ["apple", "mango", "pineapple", "orange"]

for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    if not os.path.exists(folder_path):
        continue

    # Clean existing webp files
    for f in glob.glob(os.path.join(folder_path, "*.webp")):
        os.remove(f)

    # Find the mp4 file
    mp4_files = glob.glob(os.path.join(folder_path, "*.mp4"))
    if not mp4_files:
        print(f"No .mp4 found in {folderPath}")
        continue

    video_path = mp4_files[0]
    print(f"Processing {video_path}...")

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error opening {video_path}")
        continue

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Total frames in video: {total_frames}")

    # We want exactly 60 frames evenly spaced out.
    # If video is shorter than 60 frames, we'll extract all frames and then pad by duplicating the last frame.
    
    extracted = 0
    indices_to_extract = [int(i * total_frames / 60) for i in range(60)]
    
    for i, frame_idx in enumerate(indices_to_extract):
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
        ret, frame = cap.read()
        
        if not ret:
            print(f"Failed to read frame {frame_idx}")
            continue

        # Resize to 1280 width, maintain aspect ratio
        h, w = frame.shape[:2]
        new_w = 1280
        new_h = int((new_w / w) * h)
        frame_resized = cv2.resize(frame, (new_w, new_h), interpolation=cv2.INTER_AREA)

        output_path = os.path.join(folder_path, f"frame_{i:03d}.webp")
        # Quality 75
        cv2.imwrite(output_path, frame_resized, [cv2.IMWRITE_WEBP_QUALITY, 75])
        extracted += 1

    cap.release()
    print(f"Successfully extracted {extracted} frames to {folder_path}.")

print("All extractions complete!")
