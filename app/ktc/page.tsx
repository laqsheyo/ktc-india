"use client";

import { useState } from "react";
import Image from "next/image";

type MonitorModel = {
  name: string;
  images: string[];           // Multiple photos
  video?: string;             // Optional video path
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
      // Add more as needed
    ],
    video: "/videos/ktc/h15f9.mp4",
    summary: ["15.6 inch IPS", "1920 × 1080 @ 60Hz", "300 cd/m²", "Mini HDMI + Type-C"],
    specs: [ /* ... your existing specs array unchanged ... */ ],
  },
  {
    name: "H24V27",
    images: [
      "/images/ktc/h24v27/1.png", // replace with actual files you have for this model
      // add more
    ],
    summary: ["23.8 inch VA", "1920 × 1080 @ 100Hz", "300 cd/m²", "HDMI + VGA"],
    specs: [ /* ... */ ],
  },
  // Repeat pattern for H24F7, H27T27S, H27T22C, H32S5, H34S5
  // Add images/video for each
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState(monitorModels[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const currentImage = selectedModel.images[currentPhotoIndex];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % selectedModel.images.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + selectedModel.images.length) % selectedModel.images.length);
  };

  return (
    <main className="ktc-page">
      <section className="ktc-hero">
        <h1>KTC Monitors</h1>
        <p>
          Explore KTC display monitor models with detailed product
          specifications, connectivity features, display performance, and
          certification details.
        </p>
      </section>

      {/* Model Selector */}
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

      {/* Details Section with Gallery + Video */}
      <section className="ktc-details">
        <div className="ktc-details-content">
          <div className="ktc-product-top">
            <div className="ktc-product-info">
              <h2>{selectedModel.name}</h2>
              <div className="ktc-product-summary">
                {selectedModel.summary.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            {/* Media Gallery */}
            <div className="ktc-media-gallery">
              <div className="ktc-main-media">
                {showVideo && selectedModel.video ? (
                  <video
                    controls
                    muted
                    className="ktc-video-player"
                    src={selectedModel.video}
                    poster={currentImage}
                  />
                ) : (
                  <Image
                    src={currentImage}
                    alt={`${selectedModel.name} - Photo ${currentPhotoIndex + 1}`}
                    width={800}
                    height={500}
                    className="ktc-monitor-image"
                    priority
                  />
                )}
              </div>

              {/* Navigation Arrows */}
              {selectedModel.images.length > 1 && (
                <div className="ktc-photo-nav">
                  <button onClick={prevPhoto} className="nav-btn">←</button>
                  <span className="photo-counter">
                    {currentPhotoIndex + 1} / {selectedModel.images.length}
                  </span>
                  <button onClick={nextPhoto} className="nav-btn">→</button>
                </div>
              )}

              {/* Video Button */}
              {selectedModel.video && (
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="ktc-video-btn"
                >
                  {showVideo ? "Show Photos" : "Watch Product Video"}
                </button>
              )}

              {/* Thumbnails */}
              {selectedModel.images.length > 1 && (
                <div className="ktc-thumbnails">
                  {selectedModel.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={60}
                      className={`thumbnail ${index === currentPhotoIndex ? "active" : ""}`}
                      onClick={() => {
                        setCurrentPhotoIndex(index);
                        setShowVideo(false);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Specs */}
          <div className="ktc-spec-grid">
            {selectedModel.specs.map(([label, value], index) => (
              <div key={`${label}-${index}`}>
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