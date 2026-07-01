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
    images: ["/images/ktc/h15f9/1.png", "/images/ktc/h15f9/2-2.png", "/images/ktc/h15f9/3.png", "/images/ktc/h15f9/4.png", "/images/ktc/h15f9/6.png"],
    video: "/videos/ktc/h15f9.mp4",
    summary: ["15.6 inch IPS", "1920 × 1080 @ 60Hz", "300 cd/m²", "Mini HDMI + Type-C"],
    specs: [/* your full specs here */],
  },
  // ... other models
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
    <main className="ktc-page">
      <section className="ktc-hero">
        <h1>KTC Monitors</h1>
        <p>Explore our display monitor models with detailed specifications.</p>
      </section>

      <section className="ktc-models">
        {monitorModels.map((model) => (
          <button
            key={model.name}
            className={`ktc-model-card ${selectedModel.name === model.name ? "active" : ""}`}
            onClick={() => { setSelectedModel(model); setCurrentPhotoIndex(0); setShowVideo(false); }}
          >
            <span>{model.name}</span>
          </button>
        ))}
      </section>

      <section className="ktc-details">
        <div className="ktc-product-top">
          <div className="ktc-product-info">
            <h2>{selectedModel.name}</h2>
            <div className="ktc-product-summary">
              {selectedModel.summary.map((item, i) => <p key={i}>{item}</p>)}
            </div>
          </div>

          {/* Media Area */}
          <div className="ktc-media-container">
            <div className={`ktc-main-media ${isZoomed ? 'zoomed' : ''}`}>
              {showVideo && selectedModel.video ? (
                <video 
                  autoPlay 
                  controls 
                  muted 
                  className="ktc-video-player" 
                  src={selectedModel.video} 
                />
              ) : (
                <Image
                  src={currentImage}
                  alt={`${selectedModel.name} view`}
                  width={900}
                  height={600}
                  className="ktc-monitor-image"
                  priority
                />
              )}
            </div>

            {/* Controls */}
            <div className="ktc-controls">
              <button onClick={prevPhoto} className="nav-btn">← Previous</button>
              <span className="photo-counter">
                {currentPhotoIndex + 1} / {selectedModel.images.length}
              </span>
              <button onClick={nextPhoto} className="nav-btn">Next →</button>

              <button onClick={() => setIsZoomed(!isZoomed)} className="zoom-btn">
                {isZoomed ? "Zoom Out" : "Zoom In"}
              </button>

              {selectedModel.video && (
                <button 
                  onClick={() => setShowVideo(!showVideo)} 
                  className="ktc-video-btn"
                >
                  {showVideo ? "Show Photos" : "Watch Product Video"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="ktc-spec-grid">
          {selectedModel.specs.map(([label, value], i) => (
            <div key={i}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}