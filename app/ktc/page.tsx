"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";

interface MonitorModel {
  name: string;
  images: string[];
  video?: string;
  summary: string[];
  specs: string[][];
}

const monitorModels: MonitorModel[] = [
  {
    name: "H15F9",
    images: [
      "/images/ktc/h15f9/1.png",
      "/images/ktc/h15f9/2-2.png",
      "/images/ktc/h15f9/3.png",
      "/images/ktc/h15f9/4.png",
      "/images/ktc/h15f9/6.png",
    ],
    video: "/videos/ktc/h15f9.mp4",
    summary: ["15.6 inch IPS", "1920 x 1080 @ 60Hz", "300 cd/m2", "Mini HDMI + Type-C"],
    specs: [
      ["Model Name", "H15F9"],
      ["Stand Model", "Rotary Support Square Plastic Fixed Base"],
      ["Tilt", "0 degree - 90 degree"],
      ["Product Size Without Base", "358.646 x 222.876 x 11.8 mm"],
      ["Packing Size", "414 x 263 x 55 mm"],
      ["Gross Weight", "TBD / 13 KG (12-in-1 box)"],
      ["Net Weight With Stand", "600 g"],
      ["Color", "Black"],
      ["Panel Supplier", "Goodstar"],
      ["Panel Model", "LCM156CS0174D"],
      ["Panel Size", "15.6 inch"],
      ["Panel Type", "IPS"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "1920 x 1080 @ 60Hz"],
      ["Pixel Pitch", "0.17925(H) x 0.17925(V)"],
      ["PPI", "141"],
      ["Active Area", "344.16(H) x 193.59(V)"],
      ["Viewing Angle", "89 degree Horizontal, 89 degree Vertical"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "300 cd/m2 Typical"],
      ["Contrast", "10000:1 Typical"],
      ["Response Time", "20 ms"],
      ["Display Colors", "16.7M (6bit + 2FRC)"],
      ["NTSC Color Gamut", "44% Coverage, 44% Volume"],
      ["Adobe RGB Color Gamut", "40% Coverage, 40% Volume"],
      ["DCI-P3 Color Gamut", "37% Coverage, 37% Volume"],
      ["sRGB Color Gamut", "61% Coverage, 62% Volume"],
      ["Mainboard Model", "RTD2525BE"],
      ["HDMI Input", "1 x Mini HDMI"],
      ["Type-C Input", "2 x Type-C"],
      ["Audio Output", "1 x Earphone"],
      ["Flicker Free", "Supported"],
      ["HDR10", "Supported"],
      ["Power Input", "DC 12V / 1A"],
      ["Working Consumption", "12W"],
      ["Standby Consumption", "Less than or equal to 0.5W"],
      ["Warranty Period", "1 Year"],
    ],
  },
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState<MonitorModel>(monitorModels[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = selectedModel?.images?.[currentPhotoIndex] || "";

  // Auto-changing images every 2 seconds
  useEffect(() => {
    if (showVideo || !selectedModel?.images?.length) return;

    const interval = setInterval(() => {
      resetZoom();
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % selectedModel.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [showVideo, selectedModel]);

  const nextPhoto = () => {
    resetZoom();
    if (selectedModel?.images) {
      setCurrentPhotoIndex((p) => (p + 1) % selectedModel.images.length);
    }
  };
  
  const prevPhoto = () => {
    resetZoom();
    if (selectedModel?.images) {
      setCurrentPhotoIndex((p) => (p - 1 + selectedModel.images.length) % selectedModel.images.length);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || showVideo) return;

    const target = e.target as HTMLElement;
    if (target.closest(".side-nav-bar")) {
      resetZoom();
      return;
    }

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)"
    });
  };

  const resetZoom = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  return (
    <main className="ktc-page" style={{ backgroundColor: "#faf9f6", color: "#000", minHeight: "100vh", padding: "40px 20px" }}>
      <section className="ktc-hero" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "1px", marginBottom: "10px" }}>{"KTC Monitors"}</h1>
        <p style={{ color: "#666" }}>{"Premium display technology with professional specifications."}</p>
      </section>

      <section className="ktc-models" style={{ display: "flex", gap: "15px", marginBottom: "40px", justifyContent: "center" }}>
        {monitorModels.map((model) => (
          <button
            key={model.name}
            className={`ktc-model-card ${selectedModel.name === model.name ? "active" : ""}`}
            onClick={() => {
              setSelectedModel(model);
              setCurrentPhotoIndex(0);
              setShowVideo(false);
              resetZoom();
            }}
            style={{
              padding: "10px 24px",
              backgroundColor: selectedModel.name === model.name ? "#000" : "#fff",
              color: selectedModel.name === model.name ? "#fff" : "#000",
              border: "1px solid #ddd",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease"
            }}
          >
            {model.name}
          </button>
        ))}
      </section>

      <section className="ktc-details" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="ktc-product-top" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", marginBottom: "60px" }}>
          
          <div className="ktc-product-info" style={{ flex: "1 1 300px", minWidth: "280px" }}>
            <h2 style={{ fontSize: "4.5rem", fontWeight: "800", marginBottom: "20px", letterSpacing: "-1px" }}>{selectedModel.name}</h2>
            <div className="ktc-product-summary" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {selectedModel.summary.map((item, i) => (
                <p key={i} style={{ color: "#333", fontSize: "1.25rem", fontWeight: "600", margin: 0, paddingLeft: "15px", borderLeft: "3px solid #000" }}>{item}</p>
              ))}
            </div>
          </div>

          <div className="ktc-media-container" style={{ flex: "1.5 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div 
              ref={containerRef}
              className="ktc-main-media" 
              onMouseMove={handleMouseMove}
              onMouseLeave={resetZoom}
              style={{ 
                backgroundColor: "#fff", 
                border: "1px solid #ccc",
                borderRadius: "16px", 
                overflow: "hidden", 
                position: "relative",
                aspectRatio: "16/10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                cursor: showVideo ? "default" : "zoom-in"
              }}
            >
              {showVideo && selectedModel.video ? (
                <video 
                  autoPlay 
                  controls 
                  muted 
                  playsInline
                  className="ktc-video-player" 
                  src={selectedModel.video} 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              ) : (
                currentImage && (
                  <>
                    {/* Transparent Left Click Area */}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                      className="side-nav-bar"
                      aria-label="Previous image"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "60px",
                        zIndex: 10,
                        backgroundColor: "transparent",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <span style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 19l-7-7 7-7"/></svg>
                      </span>
                    </button>

                    <div 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        position: "relative", 
                        ...zoomStyle,
                        transition: "transform 0.1s ease-out, transform-origin 0.1s ease-out" 
                      }}
                    >
                      <Image 
                        src={currentImage} 
                        alt={selectedModel.name} 
                        fill
                        sizes="(max-width: 1200px) 100vw, 800px"
                        style={{ objectFit: "contain", padding: "40px" }}
                        priority 
                      />
                    </div>

                    {/* Transparent Right Click Area */}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                      className="side-nav-bar"
                      aria-label="Next image"
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "60px",
                        zIndex: 10,
                        backgroundColor: "transparent",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                      }}
                    >
                      <span style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7"/></svg>
                      </span>
                    </button>
                  </>
                )
              )}
            </div>

            <div className="ktc-controls" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px" }}>
              <div>
                <span style={{ color: "#666", fontSize: "0.95rem" }}>
                  {currentPhotoIndex + 1} / {selectedModel?.images?.length || 0}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                {!showVideo && (
                  <span style={{ color: "#888", fontSize: "0.85rem" }}>
                    {"Hover over image to zoom"}
                  </span>
                )}
                {selectedModel.video && (
                  <button 
                    type="button"
                    onClick={() => {
                      setShowVideo(!showVideo);
                      resetZoom();
                    }} 
                    style={{ 
                      backgroundColor: "#000", 
                      color: "#fff", 
                      border: "1px solid #000", 
                      padding: "8px 20px", 
                      borderRadius: "6px", 
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "0.9rem"
                    }}
                  >
                    {showVideo ? "Show Photos" : "Watch Video"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ktc-specs-section" style={{ borderTop: "1px solid #ddd", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "30px" }}>{"Detailed Specifications"}</h3>
          <div className="ktc-spec-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))", gap: "0 40px" }}>
            {selectedModel.specs.map(([label, value], index) => (
              <div key={index} className="spec-row" style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #eee", fontSize: "0.95rem" }}>
                <div className="spec-label" style={{ color: "#666", fontWeight: "500" }}>{label}</div>
                <div className="spec-value" style={{ color: "#000", textAlign: "right", paddingLeft: "20px" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}