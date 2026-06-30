"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFruit } from "@/context/FruitContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FruitCanvasSequencer({ triggerRef }) {
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
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (images[index] && images[index].complete && images[index].naturalHeight !== 0) {
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
      } else {
        // Fallback drawing if image fails or hasn't loaded yet
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        const progress = index / Math.max(FRAME_COUNT - 1, 1);
        const cx = 400 + (progress * 1120);
        ctx.arc(cx, canvas.height / 2, 200, 0, Math.PI * 2);
        
        const colors = { apple: '#ef4444', mango: '#f59e0b', pineapple: '#eab308', orange: '#f97316' };
        ctx.fillStyle = colors[activeFruit] || '#94a3b8';
        ctx.globalAlpha = 0.2;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 80px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(activeFruit.toUpperCase() + ' PREVIEW', canvas.width/2, canvas.height/2 - 40);
        
        ctx.font = '60px sans-serif';
        ctx.fillStyle = colors[activeFruit] || '#94a3b8';
        ctx.fillText(`FRAME [${index.toString().padStart(3, '0')}]`, canvas.width/2, canvas.height/2 + 60);
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
            trigger: triggerRef ? triggerRef.current : containerRef.current,
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
  }, [activeFruit, isMobile, triggerRef]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[500px] z-10 overflow-hidden pointer-events-none rounded-3xl shadow-2xl border border-neutral-100 bg-white group">
      {/* Mobile Fallback */}
      {isMobile ? (
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(/images/sequence/${activeFruit}/frame_000.webp)` }}
        />
      ) : (
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out brightness-125 contrast-105 saturate-110 ${loadingProgress < 100 ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}
          />
      )}
    </div>
  );
}
