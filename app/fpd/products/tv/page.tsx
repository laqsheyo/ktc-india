"use client";

import { useState } from "react";

const tvModels = [
  {
    model: "32N HD - KTC Basic",
    image: "/images/fpd-tv-32n-hd.jpg",
    specs: {
      Resolution: "HD Ready",
      Panel: "Standard",
      Brightness: "240 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "1GB",
      Storage: "8GB",
      Audio: "10W + 10W rated power, 6W + 6W output",
      HDR: "Optional",
      "Dolby Vision": "No",
      "Dolby Audio": "Dolby Audio",
      MEMC: "No",
      ALLM: "No",
      eARC: "No",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "2",
      USB: "2",
      "Voice Remote": "Yes",
    },
  },
  {
    model: "43N FHD - KTC Basic",
    image: "/images/fpd-tv-43n-fhd.jpg",
    specs: {
      Resolution: "FHD",
      Panel: "Standard",
      Brightness: "280 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "1GB",
      Storage: "8GB",
      Audio: "10W + 10W rated power, 8W + 8W output",
      HDR: "Optional",
      "Dolby Vision": "No",
      "Dolby Audio": "Dolby Audio",
      MEMC: "No",
      ALLM: "No",
      eARC: "No",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "2",
      USB: "2",
      "Voice Remote": "Yes",
    },
  },
  {
    model: "43J1U UHD",
    image: "/images/fpd-tv-43j1u-uhd.jpg",
    specs: {
      Resolution: "4K UHD",
      Panel: "IPS",
      Brightness: "280-300 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "1.5GB",
      Storage: "8GB",
      Audio: "15W + 15W rated power, 12W + 12W output",
      HDR: "HDR10",
      "Dolby Vision": "Optional",
      "Dolby Audio": "Dolby Audio",
      MEMC: "Optional",
      ALLM: "Optional",
      eARC: "Optional",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "2",
      USB: "2",
      "Voice Remote": "Yes",
    },
  },
  {
    model: "50J1U UHD",
    image: "/images/fpd-tv-50j1u-uhd.jpg",
    specs: {
      Resolution: "4K UHD",
      Panel: "VA",
      Brightness: "320-350 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "2GB",
      Storage: "16GB",
      Audio: "15W + 15W rated power, 12W + 12W output",
      HDR: "HDR10 + HLG",
      "Dolby Vision": "Yes",
      "Dolby Audio": "Dolby Audio",
      MEMC: "Yes",
      ALLM: "Yes",
      eARC: "Yes",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "3",
      USB: "2",
      "Voice Remote": "Premium Bluetooth Remote",
    },
  },
  {
    model: "55J1U QLED",
    image: "/images/fpd-tv-55j1u-qled.jpg",
    specs: {
      Resolution: "4K UHD",
      Panel: "QLED",
      Brightness: "400-450 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "2GB",
      Storage: "16GB",
      Audio: "15W + 15W rated power, 12W + 12W output",
      HDR: "HDR10 + Dolby Vision",
      "Dolby Vision": "Yes",
      "Dolby Audio": "Dolby Atmos",
      MEMC: "Yes",
      ALLM: "Yes",
      eARC: "Yes",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "3",
      USB: "2",
      "Voice Remote": "Premium Bluetooth Remote",
    },
  },
  {
    model: "65J1U QLED - KTC Basic",
    image: "/images/fpd-tv-65j1u-qled.jpg",
    specs: {
      Resolution: "4K UHD",
      Panel: "QLED",
      Brightness: "450-500 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "2GB",
      Storage: "16GB",
      Audio: "20W + 10W rated power, 20W + 8W output",
      HDR: "HDR10 + Dolby Vision",
      "Dolby Vision": "Yes",
      "Dolby Audio": "Dolby Atmos",
      MEMC: "Yes",
      ALLM: "Yes",
      eARC: "Yes",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "3",
      USB: "2",
      "Voice Remote": "Premium Bluetooth Remote",
    },
  },
  {
    model: "75J1U QLED - KTC Basic",
    image: "/images/fpd-tv-75j1u-qled.jpg",
    specs: {
      Resolution: "4K UHD",
      Panel: "QLED",
      Brightness: "450-500 nits",
      "Refresh Rate": "60Hz",
      OS: "Google TV",
      RAM: "2GB",
      Storage: "16GB",
      Audio: "20W + 10W rated power, 20W + 8W output",
      HDR: "HDR10 + Dolby Vision",
      "Dolby Vision": "Yes",
      "Dolby Audio": "Dolby Atmos",
      MEMC: "Yes",
      ALLM: "Yes",
      eARC: "Yes",
      WiFi: "Dual Band",
      Bluetooth: "5.0",
      HDMI: "3",
      USB: "2",
      "Voice Remote": "Premium Bluetooth Remote",
    },
  },
];

export default function FPDTVPage() {
  const [selectedTV, setSelectedTV] = useState(tvModels[0]);

  return (
    <main className="fpd-tv-page">
      <section className="fpd-tv-hero">
        <h1>FPD Google TVs</h1>
        <p>
          Explore FPD TV models across HD, FHD, UHD, and QLED categories with
          display, audio, smart TV, connectivity, and gaming-focused features.
        </p>
      </section>

      <section className="fpd-tv-models">
        {tvModels.map((tv) => (
          <button
            key={tv.model}
            className={`fpd-tv-card ${
              selectedTV.model === tv.model ? "active" : ""
            }`}
            onClick={() => setSelectedTV(tv)}
          >
            <img src={tv.image} alt={tv.model} />
            <span>{tv.model}</span>
            <small>{tv.specs.Resolution}</small>
          </button>
        ))}
      </section>

      <section className="fpd-tv-detail">
        <div className="fpd-tv-detail-top">
          <div>
            <h2>{selectedTV.model}</h2>
            <p>
              {selectedTV.specs.Resolution} · {selectedTV.specs.Panel} Panel ·{" "}
              {selectedTV.specs["Refresh Rate"]} · {selectedTV.specs.OS}
            </p>
          </div>

          <img src={selectedTV.image} alt={selectedTV.model} />
        </div>

        <div className="fpd-tv-spec-grid">
          {Object.entries(selectedTV.specs).map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}