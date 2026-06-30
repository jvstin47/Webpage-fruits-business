"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFruit } from "@/context/FruitContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FruitCanvasSequencer() {
  const { activeFruit } = useFruit();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const FRAME_COUNT = 60;

  useEffect(() => {
    // Check mobile initially
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Bypass heavy load on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset state and clear canvas for new fruit
    setLoadingProgress(0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let images = [];
    let loadedCount = 0;
    const playhead = { frame: 0 };
    let isActive = true; // For unmount cleanup

    const loadImages = async () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        if (!isActive) break;
        
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/images/sequence/${activeFruit}/frame_${frameIndex}.webp`;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
            resolve();
          };
          img.onerror = () => {
            // Silently resolve to not block loop if file missing in dev
            resolve();
          };
        });
        images.push(img);
      }

      if (!isActive) return;

      // Draw initial frame once loaded
      if (images[0]) {
        drawFrame(0);
      }

      setupScrollTrigger();
    };

    const drawFrame = (index) => {
      if (images[index] && images[index].complete && images[index].naturalHeight !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio fit (cover)
        const hRatio = canvas.width / images[index].width;
        const vRatio = canvas.height / images[index].height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - images[index].width * ratio) / 2;
        const centerShift_y = (canvas.height - images[index].height * ratio) / 2;
        
        ctx.drawImage(
          images[index], 
          0, 0, images[index].width, images[index].height,
          centerShift_x, centerShift_y, images[index].width * ratio, images[index].height * ratio
        );
      }
    };

    let ctxMm = gsap.matchMedia();

    const setupScrollTrigger = () => {
      ctxMm.add("(min-width: 769px)", () => {
        const tl = gsap.to(playhead, {
          frame: FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 0.5,
            pin: true,
          },
          onUpdate: () => drawFrame(Math.round(playhead.frame))
        });
        
        return () => {
          tl.kill();
        };
      });
    };

    loadImages();

    return () => {
      isActive = false;
      ctxMm.revert();
      images = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [activeFruit, isMobile]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {/* Mobile Fallback */}
      {isMobile ? (
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/images/sequence/${activeFruit}/frame_000.webp)` }}
        />
      ) : (
        <>
          {loadingProgress < 100 && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#fafafa]/50 backdrop-blur-sm transition-opacity duration-500">
               <div className="flex flex-col items-center gap-4">
                  <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                     <div 
                        className="h-full bg-brand-500 transition-all duration-300"
                        style={{ width: `${loadingProgress}%` }}
                     />
                  </div>
                  <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-widest">Loading Engine {loadingProgress}%</span>
               </div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </>
      )}
    </div>
  );
}
