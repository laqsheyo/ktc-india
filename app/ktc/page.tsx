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
      ["Gross Weight", "TBD / 13 KG, 12-in-1 box"],
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
      ["Display Colors", "16.7M, 6bit + 2FRC"],
      ["NTSC Color Gamut", "44% Coverage, 44% Volume"],
      ["Adobe RGB Color Gamut", "40% Coverage, 40% Volume"],
      ["DCI-P3 Color Gamut", "37% Coverage, 37% Volume"],
      ["sRGB Color Gamut", "61% Coverage, 62% Volume"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "RTD2525BE"],
      ["HDMI Input", "1 × Mini HDMI"],
      ["Type-C Input", "2 × Type-C"],
      ["Audio Output", "1 × Earphone"],
      ["Flicker Free", "Supported"],
      ["HDR10", "Supported"],
      ["AMD Freesync & Nvidia G-Sync Compatible", "Supported"],
      ["Power Input", "DC 12V / 1A"],
      ["Working Consumption", "12W"],
      ["Standby Consumption", "≤0.5W"],
      ["Warranty Period", "1 Year"],
    ],
  },
  // Add other models similarly...
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState(monitorModels[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = selectedModel.images[currentPhotoIndex];

  const nextPhoto = () => setCurrentPhotoIndex((prev) => (prev + 1) % selectedModel.images.length);
  const prevPhoto = () => setCurrentPhotoIndex((prev) => (prev - 1 + selectedModel.images.length) % selectedModel.images.length);

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
            onClick={() => {
              setSelectedModel(model);
              setCurrentPhotoIndex(0);
              setShowVideo(false);
            }}
          >
            <span>{model.name}</span>
            <small>{model.summary[0]}</small>
          </button>
        ))}
      </section>

      <section className="ktc-details">
        <div className="ktc-details-content">
          <div className="ktc-product-top">
            <div className="ktc-product-info">
              <h2>{selectedModel.name}</h2>
              <div className="ktc-product-summary">
                {selectedModel.summary.map((item, i) => <p key={i}>{item}</p>)}
              </div>
            </div>

            {/* Main Gallery - Single Large Image */}
            <div className="ktc-media-gallery">
              <div className={`ktc-main-media ${isZoomed ? 'zoomed' : ''}`}>
                {showVideo && selectedModel.video ? (
                  <video controls muted className="ktc-video-player" src={selectedModel.video} poster={currentImage} />
                ) : (
                  <Image
                    src={currentImage}
                    alt={`${selectedModel.name} - View ${currentPhotoIndex + 1}`}
                    width={900}
                    height={600}
                    className="ktc-monitor-image"
                    priority
                  />
                )}
              </div>

              {/* Controls */}
              <div className="ktc-controls">
                {selectedModel.images.length > 1 && (
                  <>
                    <button onClick={prevPhoto} className="nav-btn">← Previous</button>
                    <span className="photo-counter">{currentPhotoIndex + 1} / {selectedModel.images.length}</span>
                    <button onClick={nextPhoto} className="nav-btn">Next →</button>
                  </>
                )}

                <button onClick={() => setIsZoomed(!isZoomed)} className="zoom-btn">
                  {isZoomed ? "Zoom Out" : "Zoom In"}
                </button>

                {selectedModel.video && (
                  <button onClick={() => setShowVideo(!showVideo)} className="ktc-video-btn">
                    {showVideo ? "Show Photos" : "Watch Product Video"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Full Specs */}
          <div className="ktc-spec-grid">
            {selectedModel.specs.map(([label, value], index) => (
              <div key={index}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}