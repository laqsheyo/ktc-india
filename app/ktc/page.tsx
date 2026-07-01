"use client";

import { useState } from "react";
import Image from "next/image";

type MonitorModel = {
  name: string;
  images: string[];
  video?: string;
  summary: string[];
  specs: string[][];
};

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
    summary: ["15.6 inch IPS", "1920 × 1080 @ 60Hz", "300 cd/m²", "Mini HDMI + Type-C"],
    specs: [
      ["Model Name", "H15F9"],
      ["Stand Model", "Rotary Support Square Plastic Fixed Base"],
      ["Tilt", "0°-90°"],
      ["Product Size Without Base", "358.646 × 222.876 × 11.8 mm"],
      ["Packing Size", "414 × 263 × 55 mm"],
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
      ["Maximum Resolution", "1920 × 1080 @ 60Hz"],
      ["Pixel Pitch", "0.17925(H) × 0.17925(V)"],
      ["PPI", "141"],
      ["Active Area", "344.16(H) × 193.59(V)"],
      ["Viewing Angle", "±89° Horizontal, ±89° Vertical"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "300 cd/m² Typical"],
      ["Contrast", "1000:1 Typical"],
      ["Response Time", "20 ms"],
      ["Display Colors", "16.7M (6bit + 2FRC)"],
      ["NTSC Color Gamut", "44% Coverage, 44% Volume"],
      ["Adobe RGB Color Gamut", "40% Coverage, 40% Volume"],
      ["DCI-P3 Color Gamut", "37% Coverage, 37% Volume"],
      ["sRGB Color Gamut", "61% Coverage, 62% Volume"],
      ["Mainboard Model", "RTD2525BE"],
      ["HDMI Input", "1 × Mini HDMI"],
      ["Type-C Input", "2 × Type-C"],
      ["Audio Output", "1 × Earphone"],
      ["Flicker Free", "Supported"],
      ["HDR10", "Supported"],
      ["Power Input", "DC 12V / 1A"],
      ["Working Consumption", "12W"],
      ["Standby Consumption", "≤0.5W"],
      ["Warranty Period", "1 Year"],
    ],
  },
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState(monitorModels[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = selectedModel.images[currentPhotoIndex];

  const nextPhoto = () => setCurrentPhotoIndex((p) => (p + 1) % selectedModel.images.length);
  const prevPhoto = () => setCurrentPhotoIndex((p) => (p - 1 + selectedModel.images.length) % selectedModel.images.length);

  return (
    <main className="ktc-page" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "40px 20px" }}>
      <section className="ktc-hero" style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "1px", marginBottom: "10px" }}>KTC Monitors</h1>
        <p style={{ color: "#aaa" }}>Premium display technology with professional specifications.</p>
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
            }}
            style={{
              padding: "10px 24px",
              backgroundColor: selectedModel.name === model.name ? "#fff" : "#111",
              color: selectedModel.name === model.name ? "#000" : "#fff",
              border: "1px solid #333",
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
        {/* Modern side-by-side flexbox container */}
        <div className="ktc-product-top" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start", marginBottom: "60px" }}>
          
          {/* Left Side: Model Info */}
          <div className="ktc-product-info" style={{ flex: "1 1 300px", minWidth: "280px" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px", letterSpacing: "-0.5px" }}>{selectedModel.name}</h2>
            <div className="ktc-product-summary" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {selectedModel.summary.map((item, i) => (
                <p key={i} style={{ color: "#ccc", fontSize: "1.1rem", margin: 0, paddingLeft: "10px", borderLeft: "2px solid #333" }}>{item}</p>
              ))}
            </div>
          </div>

          {/* Right Side: Media Showcase Container */}
          <div className="ktc-media-container" style={{ flex: "1.5 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div 
              className={`ktc-main-media ${isZoomed ? 'zoomed' : ''}`} 
              style={{ 
                backgroundColor: "#0a0a0a", 
                borderRadius: "16px", 
                border: "1px solid #1a1a1a", 
                overflow: "hidden", 
                position: "relative",
                aspectRatio: "16/10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
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
                <div style={{ width: "100%", height: "100%", position: "relative", transform: isZoomed ? "scale(1.25)" : "scale(1)", transition: "transform 0.3s ease" }}>
                  <Image 
                    src={currentImage} 
                    alt={selectedModel.name} 
                    fill
                    sizes="(max-width: 1200px) 100vw, 800px"
                    style={{ objectFit: "contain" }}
                    priority 
                  />
                </div>
              )}
            </div>

            {/* Premium, spaced out panel controls */}
            <div className="ktc-controls" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "15px", justifyContent: "space-between", padding: "0 5px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button 
                  onClick={() => { setShowVideo(false); prevPhoto(); }} 
                  className="nav-btn"
                  style={{ backgroundColor: "#111", color: "#fff", border: "1px solid #222", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
                >
                  ← Prev
                </button>
                <span className="photo-counter" style={{ color: "#888", fontSize: "0.9rem", minWidth: "45px", textAlign: "center" }}>
                  {currentPhotoIndex + 1} / {selectedModel.images.length}
                </span>
                <button 
                  onClick={() => { setShowVideo(false); nextPhoto(); }} 
                  className="nav-btn"
                  style={{ backgroundColor: "#111", color: "#fff", border: "1px solid #222", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
                >
                  Next →
                </button>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                {!showVideo && (
                  <button 
                    onClick={() => setIsZoomed(!isZoomed)} 
                    className="zoom-btn"
                    style={{ backgroundColor: "#111", color: "#fff", border: "1px solid #222", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
                  >
                    {isZoomed ? "Zoom Out" : "Zoom In"}
                  </button>
                )}
                {selectedModel.video && (
                  <button 
                    onClick={() => setShowVideo(!showVideo)} 
                    className="ktc-video-btn"
                    style={{ 
                      backgroundColor: showVideo ? "#fff" : "#222", 
                      color: showVideo ? "#000" : "#fff", 
                      border: "1px solid #444", 
                      padding: "8px 20px", 
                      borderRadius: "8px", 
                      cursor: "pointer",
                      fontWeight: "600"
                    }}
                  >
                    {showVideo ? "Show Photos" : "Watch Video"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full Specs Section */}
        <div className="ktc-specs-section" style={{ borderTop: "1px solid #222", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "30px" }}>Detailed Specifications</h3>
          <div className="ktc-spec-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))", gap: "0 40px" }}>
            {selectedModel.specs.map(([label, value], index) => (
              <div key={index} className="spec-row" style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #111", fontSize: "0.95rem" }}>
                <div className="spec-label" style={{ color: "#888", fontWeight: "500" }}>{label}</div>
                <div className="spec-value" style={{ color: "#fff", textAlign: "right", paddingLeft: "20px" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}