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
      "/images/ktc/h15f9/A (1).jpg",
      "/images/ktc/h15f9/A (2).jpg",
      "/images/ktc/h15f9/A (3).jpg",
      "/images/ktc/h15f9/A (4).jpg",
      "/images/ktc/h15f9/A (5).jpg",
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
  {
    name: "H24V27",
    images: [
      "/images/ktc/H24V27/A (1).jpg",
      "/images/ktc/H24V27/A (2).jpg",
      "/images/ktc/H24V27/A (3).jpg",
      "/images/ktc/H24V27/A (4).jpg",
      "/images/ktc/H24V27/A (5).jpg",
    ],
    summary: ["23.8 inch VA", "1920 x 1080 @ 100Hz", "250 cd/m2", "HDMI + VGA"],
    specs: [
      ["Model Name", "H24V27"],
      ["Stand Model", "Ordinary Base (Simple Structural Stand)"],
      ["Tilt", "-5 to 15 degrees"],
      ["Product Size Without Base", "539.2 x 321.2 x 39.5 mm"],
      ["Packing Size", "612 x 103 x 400 mm"],
      ["Gross Weight", "3.6 kg"],
      ["Net Weight With Stand", "2.7 kg"],
      ["Color", "Black"],
      ["Panel Size", "23.8 inch"],
      ["Panel Type", "VA"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "1920 x 1080 @ 100Hz"],
      ["Viewing Angle", "178 degree Horizontal, 178 degree Vertical"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "250 cd/m2 Typical"],
      ["Contrast", "4000:1 Typical"],
      ["Response Time", "12 ms (G2G)"],
      ["Display Colors", "16.7M"],
      ["sRGB Color Gamut", "99% Coverage"],
      ["HDMI Input", "1 x HDMI 1.4"],
      ["VGA Input", "1 x VGA"],
      ["Audio Output", "1 x Earphone"],
      ["Flicker Free", "Supported"],
      ["Low Blue Light", "Supported"],
      ["FreeSync", "Supported"],
      ["Power Input", "DC 12V / 2.5A"],
      ["Working Consumption", "24W"],
      ["Standby Consumption", "Less than or equal to 0.5W"],
    ],
  },
  {
    name: "H24F7",
    images: [
      "/images/ktc/H24F7/A (1).jpg",
      "/images/ktc/H24F7/A (2).jpg",
      "/images/ktc/H24F7/A (3).jpg",
      "/images/ktc/H24F7/A (4).jpg",
      "/images/ktc/H24F7/A (5).jpg",
    ],
    video: "/videos/ktc/H24F7.mp4",
    summary: ["23.8 inch Fast IPS", "1920 x 1080 @ 165Hz", "300 cd/m2", "2 x DP + 2 x HDMI"],
    specs: [
      ["Model Name", "H24T12"],
      ["Stand Model", "Simple Structural Base"],
      ["Tilt", "-5 to 15 degrees"],
      ["Product Size Without Base", "539.2 x 322.2 x 44.5 mm"],
      ["Packing Size", "614 x 113 x 403 mm"],
      ["Gross Weight", "4.1 kg"],
      ["Net Weight With Stand", "3.1 kg"],
      ["Color", "Black / White Accents"],
      ["Panel Size", "23.8 inch"],
      ["Panel Type", "Fast IPS"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "1920 x 1080 @ 165Hz"],
      ["Viewing Angle", "178 degree Horizontal, 178 degree Vertical"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "300 cd/m2 Typical"],
      ["Contrast", "1000:1 Typical"],
      ["Response Time", "1 ms (MPRT) / 2 ms (G2G)"],
      ["Display Colors", "16.7M"],
      ["sRGB Color Gamut", "100% Coverage"],
      ["HDMI Input", "2 x HDMI 2.0"],
      ["DP Input", "2 x DisplayPort 1.2"],
      ["Audio Output", "1 x Earphone"],
      ["Flicker Free", "Supported"],
      ["Low Blue Light", "Supported"],
      ["FreeSync & G-Sync", "Compatible"],
      ["Power Input", "DC 12V / 3A"],
      ["Working Consumption", "30W"],
      ["Standby Consumption", "Less than or equal to 0.5W"],
    ],
  },
  {
    name: "H27T27S",
    images: [
      "/images/ktc/H27T27S/A (1).jpg",
      "/images/ktc/H27T27S/A (2).jpg",
      "/images/ktc/H27T27S/A (3).jpg",
      "/images/ktc/H27T27S/A (4).jpg",
      "/images/ktc/H27T27S/A (5).jpg",
    ],
    video: "/videos/ktc/H27T22.mp4",
    summary: ["27 inch Fast IPS", "2560 x 1440 @ 165Hz", "350 cd/m2", "Professional Lift Stand"],
    specs: [
      ["Model Name", "H27T22"],
      ["Stand Model", "Ergonomic Lift & Pivot Adjusting Stand"],
      ["Tilt", "-5 to 20 degrees"],
      ["Swivel", "-45 to 45 degrees"],
      ["Pivot", "-90 to 90 degrees (Portrait orientation)"],
      ["Height Adjust", "0 to 130 mm"],
      ["Product Size Without Base", "616 x 364.3 x 53.5 mm"],
      ["Packing Size", "690 x 165 x 460 mm"],
      ["Gross Weight", "7.5 kg"],
      ["Net Weight With Stand", "5.2 kg"],
      ["Color", "Black with RGB light bar"],
      ["Panel Size", "27.0 inch"],
      ["Panel Type", "Fast IPS"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Maximum Resolution", "2560 x 1440 @ 165Hz"],
      ["Viewing Angle", "178 degree Horizontal, 178 degree Vertical"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "350 cd/m2 Typical"],
      ["Contrast", "1000:1 Typical"],
      ["Response Time", "1 ms (G2G)"],
      ["Display Colors", "16.7M (8bit)"],
      ["sRGB Color Gamut", "99% Coverage"],
      ["DCI-P3 Color Gamut", "84% Coverage"],
      ["HDMI Input", "1 x HDMI 2.0"],
      ["DP Input", "2 x DisplayPort 1.4"],
      ["Audio Output", "1 x Earphone"],
      ["Flicker Free", "Supported"],
      ["Low Blue Light", "Supported"],
      ["FreeSync & G-Sync", "Compatible"],
      ["HDR10", "Supported"],
      ["Power Input", "DC 12V / 4.5A"],
      ["Working Consumption", "54W"],
    ],
  },
  {
    name: "G27P5",
    images: [
      "/images/ktc/g27p5/1.png",
      "/images/ktc/g27p5/2.png",
      "/images/ktc/g27p5/3.png",
      "/images/ktc/g27p5/4.png",
      "/images/ktc/g27p5/5.png",
    ],
    video: "/videos/ktc/g27p5.mp4",
    summary: ["27 inch OLED", "2560 x 1440 @ 240Hz", "450 cd/m2", "0.03ms Ultra Response"],
    specs: [
      ["Model Name", "G27P5"],
      ["Stand Model", "Premium Metal Premium Lift Stand"],
      ["Tilt", "-5 to 20 degrees"],
      ["Swivel", "-30 to 30 degrees"],
      ["Pivot", "-90 to 90 degrees"],
      ["Height Adjust", "0 to 110 mm"],
      ["Product Size With Base", "611.3 x 411.3~521.3 x 241.6 mm"],
      ["Packing Size", "795 x 195 x 495 mm"],
      ["Gross Weight", "9.5 kg"],
      ["Net Weight With Stand", "5.2 kg"],
      ["Color", "Silver-Grey Metallic Body"],
      ["Panel Size", "27.0 inch"],
      ["Panel Type", "OLED (Self-lit Pixels)"],
      ["Aspect Ratio", "16:9"],
      ["Maximum Resolution", "2560 x 1440 @ 240Hz"],
      ["Viewing Angle", "178° (H) / 178° (V)"],
      ["Brightness", "450 cd/m2 (Peak Peak)"],
      ["Contrast", "1500000:1 (Dynamic OLED Contrast)"],
      ["Response Time", "0.03 ms (G2G Ultra Fast)"],
      ["Display Colors", "1.07 Billion (10bit)"],
      ["sRGB Color Gamut", "100% Coverage"],
      ["DCI-P3 Color Gamut", "98% Coverage"],
      ["HDMI Input", "2 x HDMI 2.1"],
      ["DP Input", "1 x DisplayPort 1.4"],
      ["Type-C Input", "1 x Type-C (Supports Reverse Delivery)"],
      ["USB Hub", "2 x USB 3.0 Upstream/Downstream"],
      ["Audio Output", "Built-in Speakers (2 x 5W)"],
      ["KVM Switch", "Supported"],
      ["FreeSync & G-Sync", "Compatible"],
    ],
  },
  {
    name: "H27T22C-3",
    images: [
      "/images/ktc/H27T22C-3/A (1).jpg",
      "/images/ktc/H27T22C-3/A (2).jpg",
      "/images/ktc/H27T22C-3/A (3).jpg",
      "/images/ktc/H27T22C-3/A (4).jpg",
      "/images/ktc/H27T22C-3/A (5).jpg",
    ],
    video: "/videos/ktc/H27T22C-3.mp4",
    summary: ["27 inch Curved HVA", "2560 x 1440 @ 180Hz", "300 cd/m2", "1500R Curvature"],
    specs: [
      ["Model Name", "H27T22C"],
      ["Stand Model", "V-Shaped Angular Gaming Base"],
      ["Tilt", "-5 to 15 degrees"],
      ["Product Size Without Base", "611 x 362.5 x 85 mm"],
      ["Packing Size", "685 x 135 x 440 mm"],
      ["Gross Weight", "5.8 kg"],
      ["Net Weight With Stand", "4.4 kg"],
      ["Panel Size", "27.0 inch"],
      ["Panel Type", "HVA (High Contrast VA)"],
      ["Module Type", "Curved (1500R)"],
      ["Aspect Ratio", "16:9"],
      ["Maximum Resolution", "2560 x 1440 @ 180Hz"],
      ["Viewing Angle", "178 degree Horizontal, 178 degree Vertical"],
      ["Brightness", "300 cd/m2 Typical"],
      ["Contrast", "4000:1 Typical"],
      ["Response Time", "1 ms (MPRT) / 3 ms (G2G)"],
      ["Display Colors", "16.7M"],
      ["sRGB Color Gamut", "99% Coverage"],
      ["HDMI Input", "2 x HDMI 2.0"],
      ["DP Input", "2 x DisplayPort 1.4"],
      ["Audio Output", "1 x Earphone Jack"],
      ["Flicker Free", "Supported"],
      ["Low Blue Light", "Supported"],
      ["FreeSync & G-Sync", "Compatible"],
      ["HDR10", "Supported"],
    ],
  },
  {
    name: "H27S5C",
    images: [
      "/images/ktc/H27S5C/A (1).jpg",
      "/images/ktc/H27S5C/A (2).jpg",
      "/images/ktc/H27S5C/A (3).jpg",
      "/images/ktc/H27S5C/A (4).jpg",
      "/images/ktc/H27S5C/A (5).jpg",
    ],
    video: "/videos/ktc/H27S5C.mp4",
    summary: ["31.5 inch Mini-LED IPS", "3840 x 2160 @ 144Hz", "1000 nits HDR Peak", "Full Functional KVM"],
    specs: [
      ["Model Name", "M235 (31.5 Mini-LED)"],
      ["Stand Model", "Heavy-Duty Ergonomic Lifter"],
      ["Tilt", "-5 to 20 degrees"],
      ["Swivel", "-45 to 45 degrees"],
      ["Pivot", "-90 to 90 degrees"],
      ["Height Adjust", "0 to 150 mm"],
      ["Product Size Without Base", "717.8 x 425.2 x 64.3 mm"],
      ["Packing Size", "820 x 210 x 510 mm"],
      ["Gross Weight", "11.8 kg"],
      ["Net Weight With Stand", "8.6 kg"],
      ["Panel Size", "31.5 inch"],
      ["Panel Type", "Fast IPS Backend"],
      ["Backlight Type", "Mini-LED Local Dimming (576 Zones)"],
      ["Maximum Resolution", "3840 x 2160 (4K UHD) @ 144Hz"],
      ["Brightness", "600 cd/m2 SDR / 1000 cd/m2 Peak HDR"],
      ["Contrast", "1000:1 SDR / 1000000:1 HDR Dynamic"],
      ["Response Time", "1 ms (G2G)"],
      ["Display Colors", "1.07 Billion Colors (10-bit)"],
      ["Quantum Dot Layer", "Supported (QLED Matrix)"],
      ["sRGB Color Gamut", "100% Coverage"],
      ["Adobe RGB Color Gamut", "99% Coverage"],
      ["DCI-P3 Color Gamut", "98% Coverage"],
      ["HDMI Input", "2 x HDMI 2.1 (Full Bandwidth)"],
      ["DP Input", "1 x DisplayPort 1.4 DSC"],
      ["Type-C Input", "1 x Type-C (90W PD Power Supply Delivery)"],
      ["USB Hub", "Upstream USB-B + Downstream USB-A Subports"],
    ],
  },
  {
    name: "H32S5",
    images: [
      "/images/ktc/H32S5/A (1).jpg",
      "/images/ktc/H32S5/A (2).jpg",
      "/images/ktc/H32S5/A (3).jpg",
      "/images/ktc/H32S5/A (4).jpg",
      "/images/ktc/H32S5/A (5).jpg",
    ],
    video: "/videos/ktc/H32S5.mp4",
    summary: ["34 inch UltraWide HVA", "3440 x 1440 @ 165Hz", "1500R Immersive Curve", "21:9 Cinema Scale"],
    specs: [
      ["Model Name", "G34w (Ultrawide Curve)"],
      ["Stand Model", "Integrated Adjusting Lift-Arm"],
      ["Tilt", "-5 to 15 degrees"],
      ["Height Adjust", "0 to 90 mm"],
      ["Product Size Without Base", "808 x 363 x 112 mm"],
      ["Packing Size", "910 x 185 x 475 mm"],
      ["Gross Weight", "9.8 kg"],
      ["Net Weight With Stand", "7.3 kg"],
      ["Panel Size", "34.0 inch Ultrawide"],
      ["Panel Type", "HVA High Contrast Matrix"],
      ["Module Type", "Curved (1500R Curvature Grid)"],
      ["Aspect Ratio", "21:9 Ultra-Wide"],
      ["Maximum Resolution", "3440 x 1440 @ 165Hz"],
      ["Viewing Angle", "178° Horizontal / 178° Vertical"],
      ["Brightness", "350 cd/m2 Typical"],
      ["Contrast", "4000:1 Static Ultra High"],
      ["Response Time", "1 ms (MPRT) / 4 ms (G2G)"],
      ["Display Colors", "16.7M Display Palette"],
      ["sRGB Color Gamut", "120% Volume Space, 95% Coverage"],
      ["HDMI Input", "2 x HDMI 2.0 Sub-ports"],
      ["DP Input", "2 x DisplayPort 1.4 Core-ports"],
      ["Audio Output", "1 x Line-out Stereo Speaker Terminal"],
      ["Flicker Free & Low Blue", "Hardware Protected System Control"],
    ],
  },
  {
    name: "H34S5",
    images: [
      "/images/ktc/H34S5/A (1).jpg",
      "/images/ktc/H34S5/A (2).jpg",
      "/images/ktc/H34S5/A (3).jpg",
      "/images/ktc/H34S5/A (4).jpg",
      "/images/ktc/H34S5/A (5).jpg",
    ],
    video: "/videos/ktc/H34S5.mp4",
    summary: ["34 inch UltraWide Curve", "21:9 Cinema Screen Ratio", "Ultimate Multitasking Canvas"],
    specs: [
      ["Model Name", "H34S5"],
      ["Panel Size", "34.0 inch Ultrawide"],
      ["Aspect Ratio", "21:9 Ultra-Wide"],
    ],
  }
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

      <section className="ktc-models" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px", justifyContent: "center" }}>
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