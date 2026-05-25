"use client";

import { useState } from "react";

const monitorModels = [
  {
    name: "H15F9",
    size: "15.6 inch",
    resolution: "1920 × 1080 @ 60Hz",
    panel: "IPS",
    brightness: "300 cd/m²",
    contrast: "1000:1",
    image: "/images/ktc-h15f9.jpg",
  },
  {
    name: "Model 2",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
  {
    name: "Model 3",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
  {
    name: "Model 4",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
  {
    name: "Model 5",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
  {
    name: "Model 6",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
  {
    name: "Model 7",
    size: "Coming soon",
    resolution: "Coming soon",
    panel: "Coming soon",
    brightness: "Coming soon",
    contrast: "Coming soon",
    image: "",
  },
];

const h15f9Specs = [
  ["Model Name", "H15F9"],
  ["Stand Model", "Rotary Support Square Plastic Fixed Base"],
  ["Tilt", "0°-90° Rotary Support Square"],
  ["Product Size Without Base", "358.646 × 222.876 × 11.8 mm"],
  ["Packing Size", "414 × 263 × 55 mm"],
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
  ["Pixels Per Inch", "141 PPI"],
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
  ["HDMI Input", "1 × Mini HDMI, 1920 × 1080 @ 60Hz"],
  ["Type-C Input", "2 × Type-C, 1920 × 1080 @ 60Hz"],
  ["Audio Output", "1 × Earphone"],
  ["Flicker Free", "Supported"],
  ["HDR10", "Supported"],
  ["MPRT", "Not supported"],
  ["KVM", "Not supported"],
  ["AMD Freesync & Nvidia G-Sync Compatible", "Supported"],
  ["RGB Light", "Not supported"],
  ["PIP / PBP", "Not supported"],
  ["MCC PC Client", "Not supported"],
  ["Color Management", "Not supported"],
  ["Power Input", "DC 12V / 1A"],
  ["Working Consumption", "12W"],
  ["Standby Consumption", "≤0.5W"],
  ["Audio", "2 × 0.8W"],
  ["Monitor", "1 PCS"],
  ["Warranty Card", "In UG"],
  ["Quick Start Guide", "In UG"],
  ["User Guide", "1 PCS"],
  ["Signal Cable", "HDMI to Mini HDMI × 1, Type-C × 1"],
  ["Power Cord", "Use Type-C"],
  ["Certification", "FCC, CE, ERP, HDMI Certification"],
  ["Maximum Working Altitude", "<5000 m"],
  ["Working Condition", "0℃-40℃, 30%-90% Humidity, Non-condensing"],
  ["Storage Condition", "-20℃-55℃, 20%-93% Humidity, Non-condensing"],
  ["Warranty Period", "1 Year"],
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState(monitorModels[0]);
  const isH15F9 = selectedModel.name === "H15F9";

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

      <section className="ktc-models">
        {monitorModels.map((model) => (
          <button
            key={model.name}
            className={`ktc-model-card ${
              selectedModel.name === model.name ? "active" : ""
            }`}
            onClick={() => setSelectedModel(model)}
          >
            <span>{model.name}</span>
            <small>{model.size}</small>
          </button>
        ))}
      </section>

      <section className="ktc-details">
        <div className="ktc-details-content">
          <div className="ktc-product-top">
            <div className="ktc-product-info">
              <h2>{selectedModel.name}</h2>

              <div className="ktc-product-summary">
                <p>{selectedModel.size}</p>
                <p>{selectedModel.resolution}</p>
                <p>{selectedModel.panel}</p>
                <p>{selectedModel.brightness}</p>
                <p>{selectedModel.contrast}</p>
              </div>
            </div>

            {selectedModel.image ? (
              <img
                className="ktc-monitor-image"
                src={selectedModel.image}
                alt={`${selectedModel.name} Monitor`}
              />
            ) : (
              <div className="ktc-image-placeholder">
                Image coming soon
              </div>
            )}
          </div>

          {isH15F9 ? (
            <div className="ktc-spec-grid">
              {h15f9Specs.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          ) : (
            <p className="ktc-coming-soon">
              Detailed specifications for this model will be available soon.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}