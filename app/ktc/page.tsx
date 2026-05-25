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
  { name: "Model 2", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", contrast: "Coming soon", image: "" },
  { name: "Model 3", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", contrast: "Coming soon", image: "" },
  { name: "Model 4", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", contrast: "Coming soon", image: "" },
  { name: "Model 5", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", contrast: "Coming soon", image: "" },
  { name: "Model 6", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", contrast: "Coming soon", image: "" },
  { name: "Model 7", size: "Coming soon", resolution: "Coming soon", panel: "Coming soon", brightness: "Coming soon", panel: "Coming soon", contrast: "Coming soon", image: "" },
];

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState(monitorModels[0]);
  const [showImage, setShowImage] = useState(false);

  return (
    <main className="ktc-page">
      <section className="ktc-hero">
        <h1>KTC Monitors</h1>
        <p>
          Explore KTC display monitor models with detailed product specifications,
          connectivity features, display performance, and certification details.
        </p>
      </section>

      <section className="ktc-models">
        {monitorModels.map((model) => (
          <button
            key={model.name}
            className={`ktc-model-card ${
              selectedModel.name === model.name ? "active" : ""
            }`}
            onClick={() => {
              setSelectedModel(model);
              setShowImage(false);
            }}
          >
            <span>{model.name}</span>
            <small>{model.size}</small>
          </button>
        ))}
      </section>

      <section className="ktc-details">
        <div className="ktc-details-content">
          <h2>{selectedModel.name}</h2>

          <div className="ktc-spec-grid">
            <div>
              <span>Model Name</span>
              <strong>H15F9</strong>
            </div>
            <div>
              <span>Stand Model</span>
              <strong>Rotary Support Square Plastic Fixed Base</strong>
            </div>
            <div>
              <span>Tilt</span>
              <strong>0°-90° Rotary Support Square</strong>
            </div>
            <div>
              <span>Product Size Without Base</span>
              <strong>358.646 × 222.876 × 11.8 mm</strong>
            </div>
            <div>
              <span>Packing Size</span>
              <strong>414 × 263 × 55 mm</strong>
            </div>
            <div>
              <span>Net Weight With Stand</span>
              <strong>600 g</strong>
            </div>
            <div>
              <span>Color</span>
              <strong>Black</strong>
            </div>
            <div>
              <span>Panel Supplier</span>
              <strong>Goodstar</strong>
            </div>
            <div>
              <span>Panel Model</span>
              <strong>LCM156CS0174D</strong>
            </div>
            <div>
              <span>Panel Size</span>
              <strong>15.6 inch</strong>
            </div>
            <div>
              <span>Panel Type</span>
              <strong>IPS</strong>
            </div>
            <div>
              <span>Module Type</span>
              <strong>Flat</strong>
            </div>
            <div>
              <span>Aspect Ratio</span>
              <strong>16:9</strong>
            </div>
            <div>
              <span>Backlight Type</span>
              <strong>ELED</strong>
            </div>
            <div>
              <span>Maximum Resolution</span>
              <strong>1920 × 1080 @ 60Hz</strong>
            </div>
            <div>
              <span>Pixel Pitch</span>
              <strong>0.17925(H) × 0.17925(V)</strong>
            </div>
            <div>
              <span>Pixels Per Inch</span>
              <strong>141 PPI</strong>
            </div>
            <div>
              <span>Active Area</span>
              <strong>344.16(H) × 193.59(V)</strong>
            </div>
            <div>
              <span>Viewing Angle</span>
              <strong>±89° Horizontal, ±89° Vertical</strong>
            </div>
            <div>
              <span>Surface Treatment</span>
              <strong>Anti-Glare</strong>
            </div>
            <div>
              <span>Brightness</span>
              <strong>300 cd/m² Typical</strong>
            </div>
            <div>
              <span>Contrast</span>
              <strong>1000:1 Typical</strong>
            </div>
            <div>
              <span>Response Time</span>
              <strong>20 ms</strong>
            </div>
            <div>
              <span>Display Colors</span>
              <strong>16.7M, 6bit + 2FRC</strong>
            </div>
            <div>
              <span>NTSC Color Gamut</span>
              <strong>44% Coverage, 44% Volume</strong>
            </div>
            <div>
              <span>Adobe RGB Color Gamut</span>
              <strong>40% Coverage, 40% Volume</strong>
            </div>
            <div>
              <span>DCI-P3 Color Gamut</span>
              <strong>37% Coverage, 37% Volume</strong>
            </div>
            <div>
              <span>sRGB Color Gamut</span>
              <strong>61% Coverage, 62% Volume</strong>
            </div>
            <div>
              <span>Backlight Control</span>
              <strong>DC</strong>
            </div>
            <div>
              <span>Mainboard Model</span>
              <strong>RTD2525BE</strong>
            </div>
            <div>
              <span>HDMI Input</span>
              <strong>1 × Mini HDMI, 1920 × 1080 @ 60Hz</strong>
            </div>
            <div>
              <span>Type-C Input</span>
              <strong>2 × Type-C, 1920 × 1080 @ 60Hz</strong>
            </div>
            <div>
              <span>Audio Output</span>
              <strong>1 × Earphone</strong>
            </div>
            <div>
              <span>Flicker Free</span>
              <strong>Supported</strong>
            </div>
            <div>
              <span>HDR10</span>
              <strong>Supported</strong>
            </div>
            <div>
              <span>AMD Freesync & Nvidia G-Sync Compatible</span>
              <strong>Supported</strong>
            </div>
            <div>
              <span>Power Input</span>
              <strong>DC 12V / 1A</strong>
            </div>
            <div>
              <span>Working Consumption</span>
              <strong>12W</strong>
            </div>
            <div>
              <span>Standby Consumption</span>
              <strong>≤0.5W</strong>
            </div>
            <div>
              <span>Audio</span>
              <strong>2 × 0.8W</strong>
            </div>
            <div>
              <span>Signal Cable</span>
              <strong>HDMI to Mini HDMI × 1, Type-C × 1</strong>
            </div>
            <div>
              <span>Power Cord</span>
              <strong>Use Type-C</strong>
            </div>
            <div>
              <span>Certification</span>
              <strong>FCC, CE, ERP, HDMI Certification</strong>
            </div>
            <div>
              <span>Working Condition</span>
              <strong>0℃-40℃, 30%-90% Humidity, Non-condensing</strong>
            </div>
            <div>
              <span>Storage Condition</span>
              <strong>-20℃-55℃, 20%-93% Humidity, Non-condensing</strong>
            </div>
            <div>
              <span>Warranty Period</span>
              <strong>1 Year</strong>
            </div>
          </div>

          <button
            className="ktc-image-btn"
            onClick={() => setShowImage(!showImage)}
          >
            {showImage ? "Hide Monitor Image" : "Show Monitor Image"}
          </button>

          {showImage && selectedModel.image && (
            <img
              className="ktc-monitor-image"
              src={selectedModel.image}
              alt={`${selectedModel.name} Monitor`}
            />
          )}
        </div>
      </section>
    </main>
  );
}