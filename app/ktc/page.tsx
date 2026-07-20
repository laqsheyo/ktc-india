"use client";

import { useState, useRef, MouseEvent, useEffect, useCallback } from "react";
import Image from "next/image";
import Script from "next/script";

interface MonitorModel {
  name: string;
  images: string[];
  video?: string;
  summary: string[];
  specs: [string, string][];
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
      ["Tilt", "0° - 90°"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "N/A"],
      ["Product Size Without Base", "358.646 x 222.876 x 11.8 mm"],
      ["Product Size With Base", "N/A"],
      ["Packing Size", "414 x 263 x 55 mm"],
      ["Gross Weight", "TBD / 13 KG (12-in-1 box)"],
      ["Net Weight With Stand", "600 g"],
      ["Color", "Black"],
      ["VESA / Screw", "N/A"],
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
      ["Viewing Angle", "±89° (H), ±89° (V) (Typ.)"],
      ["Surface Treatment", "Anti-Glare"],
      ["Brightness", "300 cd/m² (Typ.)"],
      ["Contrast", "1000:1 (Typ.)"],
      ["Response Time (Panel)", "20 ms"],
      ["Response Time (with OD)", "TBD"],
      ["Display Colors", "16.7M (6bit + 2FRC)"],
      ["NTSC Color Gamut", "44% Coverage, 44% Volume"],
      ["Adobe RGB Color Gamut", "40% Coverage, 40% Volume"],
      ["DCI-P3 Color Gamut", "37% Coverage, 37% Volume"],
      ["sRGB Color Gamut", "61% Coverage, 62% Volume"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "RTD2525BE"],
      ["HDMI Input", "1 x Mini HDMI (1920x1080@60Hz)"],
      ["DP Input", "N/A"],
      ["Type-C Input", "2 x Type-C (1920x1080@60Hz)"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "N/A"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "N/A"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support"],
      ["MPRT", "Nonsupport"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Nonsupport"],
      ["Color Management", "Nonsupport"],
      ["Power Input", "DC 12V / 1A"],
      ["Adapter Input Voltage", "N/A"],
      ["Working Consumption", "12W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "2 x 0.8W"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "N/A"],
      ["Warranty Card", "In UG"],
      ["QSG", "In UG"],
      ["UG", "1 PCS"],
      ["Signal Cable", "2 PCS (HDMI to Mini HDMI x1, Type-C x1)"],
      ["Adaptor", "N/A"],
      ["Power Cord", "Use Type-C"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 2.5KV DC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "N/A"],
      ["Ground Bond Test", "N/A"],
      ["EMC Certification", "FCC / CE"],
      ["Energy Certification", "ERP (small size, no CEC)"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "< 5000 m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "1 Year"],
    ],
  },
  {
    name: "H24V27",
    images: [
      "/images/ktc/H24V27/A (1).png",
      "/images/ktc/H24V27/A (2).png",
      "/images/ktc/H24V27/A (3).png",
      "/images/ktc/H24V27/A (4).png",
      "/images/ktc/H24V27/A (5).png",
    ],
    summary: ["23.8 inch VA", "1920 x 1080 @ 100Hz", "300 cd/m2", "HDMI + VGA"],
    specs: [
      ["Model Name", "H24V27"],
      ["Stand Model", "BCEC-24 Rotary Support Square Plastic Fixed Base"],
      ["Tilt", "-5° ~ 15°"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "N/A"],
      ["Product Size Without Base", "540 x 319 x 46 mm"],
      ["Product Size With Base", "540 x 405 x 183 mm"],
      ["Packing Size", "620 x 115 x 475 mm"],
      ["Gross Weight", "4.0 kg"],
      ["Net Weight With Stand", "2.8 kg with stand / 2.4 kg without stand"],
      ["Color", "Black"],
      ["VESA / Screw", "100mm x 100mm"],
      ["Panel Supplier", "CSOT"],
      ["Panel Model", "SG2381B01-1"],
      ["Panel Size", "23.8 inch"],
      ["Panel Type", "VA"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "1920 x 1080 @ 100Hz"],
      ["Pixel Pitch", "0.2745(H) x 0.2745(V) mm"],
      ["PPI", "93"],
      ["Active Area", "527.04(H) x 296.46(V) mm"],
      ["Viewing Angle", "H: 178°, V: 178° (CR≥10)"],
      ["Surface Treatment", "AG25%"],
      ["Brightness", "300 cd/m² (Typ.)"],
      ["Contrast", "4000:1 (Typ.)"],
      ["Response Time (Panel)", "16 ms (typ)"],
      ["Response Time (with OD)", "5 ms"],
      ["Display Colors", "16.7M (8-bit)"],
      ["NTSC Color Gamut", "72% CIE1976 Volume, 71% CIE1976 Coverage"],
      ["Adobe RGB Color Gamut", "82% CIE1976 Volume, 82% CIE1976 Coverage"],
      ["DCI-P3 Color Gamut", "77% CIE1976 Volume, 77% CIE1976 Coverage"],
      ["sRGB Color Gamut", "103% CIE1931 Volume, 97% CIE1931 Coverage"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "MS6210BN M71E"],
      ["HDMI Input", "1 x HDMI 1.4 (1920x1080@100Hz)"],
      ["DP Input", "N/A"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "1 x VGA (1920x1080@75Hz)"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "N/A"],
      ["Earphone Output", "N/A"],
      ["Low Blue Light", "Support (Software LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support"],
      ["MPRT", "Nonsupport"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Nonsupport"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Nonsupport"],
      ["Color Management", "N/A"],
      ["Power Input", "DC 12V / 2A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤24W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "N/A"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In UG"],
      ["QSG", "1 PCS"],
      ["UG", "N/A"],
      ["Signal Cable", "1 PCS (HDMI Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "N/A"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 3.0KV AC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "≥4 MΩ @ 0.5KV DC / 5S"],
      ["Ground Bond Test", "N/A"],
      ["EMC Certification", "Yes"],
      ["Energy Certification", "/"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "≤5000m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
    ],
  },
  {
    name: "H24F7",
    images: [
      "/images/ktc/H24F7/A (1).png",
      "/images/ktc/H24F7/A (2).png",
      "/images/ktc/H24F7/A (3).png",
      "/images/ktc/H24F7/A (4).png",
      "/images/ktc/H24F7/A (5).png",
    ],
    video: "/videos/ktc/H24F7.mp4",
    summary: ["23.8 inch Fast IPS", "1920 x 1080 @ 240Hz", "400 cd/m2", "2 x HDMI + 1 x DP"],
    specs: [
      ["Model Name", "H24F7"],
      ["Stand Model", "BCEE-24 Trapezoidal Metal Base"],
      ["Tilt", "-5° ~ 15° (±3°)"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "N/A"],
      ["Product Size Without Base", "540 x 321 x 48 mm"],
      ["Product Size With Base", "540 x 400 x 137 mm"],
      ["Packing Size", "620 x 115 x 475 mm"],
      ["Gross Weight", "4.4 Kg"],
      ["Net Weight With Stand", "3.2 Kg"],
      ["Color", "Front frame: White / Rear cover: White"],
      ["VESA / Screw", "100mm x 100mm, M4x8-12mm"],
      ["Panel Supplier", "BOE"],
      ["Panel Model", "MV238FHB-NF7"],
      ["Panel Size", "23.8 inch Diagonal"],
      ["Panel Type", "Fast IPS"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "1920 x 1080 @ 240Hz"],
      ["Pixel Pitch", "0.2745(H) x 0.2745(V) mm"],
      ["PPI", "93"],
      ["Active Area", "527.04(H) x 296.46(V) mm"],
      ["Viewing Angle", "±89° (H), ±89° (V) (Typ.) (CR≥10)"],
      ["Surface Treatment", "Haze 25%, Hard Coating (3H)"],
      ["Brightness", "Typ: 400 cd/m²; Min: 350 cd/m²"],
      ["Contrast", "1000:1 (Typ.)"],
      ["Response Time (Panel)", "5 ms (Typ.)"],
      ["Response Time (with OD)", "2 ms"],
      ["Display Colors", "16.7M (8-bit)"],
      ["NTSC Color Gamut", "78% Coverage, 83% Area (±5%)"],
      ["Adobe RGB Color Gamut", "91% Coverage, 99% Area (±5%)"],
      ["DCI-P3 Color Gamut", "91% Coverage, 92% Area (±5%)"],
      ["sRGB Color Gamut", "99% Coverage, 116% Area (±5%)"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "MT9800BTFUDG-KM2H"],
      ["HDMI Input", "2 x HDMI 2.0 (1920x1080@240Hz)"],
      ["DP Input", "1 x DP 1.4 (1920x1080@240Hz)"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "1 x (Upgrade only)"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "Support (Hardware LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support"],
      ["MPRT", "Support"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Nonsupport"],
      ["Color Management", "YES (sRGB), ΔE<2"],
      ["Power Input", "DC 12V / 3A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤36W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "N/A"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In QSG"],
      ["QSG", "1 PCS"],
      ["UG", "In QSG"],
      ["Signal Cable", "1 PCS (HDMI Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "N/A"],
      ["Screwdriver", "1 PCS"],
      ["Screw", "2 PCS"],
      ["Withstand Voltage", "≤10mA @ 3.0KV AC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "≥4 MΩ @ 0.5KV DC / 5S"],
      ["Ground Bond Test", "N/A"],
      ["EMC Certification", "FCC, CE"],
      ["Energy Certification", "ERP, CEC"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "< 5000 m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
    ],
  },
  {
    name: "H27T27S",
    images: [
      "/images/ktc/H27T27S/A (1).png",
      "/images/ktc/H27T27S/A (2).png",
      "/images/ktc/H27T27S/A (3).png",
      "/images/ktc/H27T27S/A (4).png",
      "/images/ktc/H27T27S/A (5).png",
    ],
    video: "/videos/ktc/H27T22.mp4",
    summary: ["27 inch HVA", "2560 x 1440 @ 144Hz", "300 cd/m2", "2 x HDMI + 1 x DP"],
    specs: [
      ["Model Name", "H27T27S"],
      ["Stand Model", "BCES-27 Square Fixed Base"],
      ["Tilt", "-5° ~ 15° (±3°)"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "Yes"],
      ["Product Size Without Base", "616 x 364 x 46 mm"],
      ["Product Size With Base", "616 x 450 x 191 mm"],
      ["Packing Size", "690 x 465 x 130 mm"],
      ["Gross Weight", "5.5 kg"],
      ["Net Weight With Stand", "4.3 kg (with stand)"],
      ["Color", "Front frame: Black / Rear cover: Black"],
      ["VESA / Screw", "100mm x 100mm, M4x8"],
      ["Panel Supplier", "CSOT"],
      ["Panel Model", "SG270AG04-4"],
      ["Panel Size", "27 inch Diagonal"],
      ["Panel Type", "HVA"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "2560 x 1440 @ 144Hz"],
      ["Pixel Pitch", "0.0777(H) x 0.2331(V) mm"],
      ["PPI", "109"],
      ["Active Area", "596.736 x 335.664 mm"],
      ["Viewing Angle", "±89° (H), ±89° (V) (Typ.)"],
      ["Surface Treatment", "Anti-glare, AG25%, Hard Coating (3H)"],
      ["Brightness", "300 cd/m² (typ.)"],
      ["Contrast", "Typ: 4000:1"],
      ["Response Time (Panel)", "Typ: 11 ms"],
      ["Response Time (with OD)", "Typ: 5 ms"],
      ["Display Colors", "16.7M (8-bit)"],
      ["NTSC Color Gamut", "80% Coverage, 91% Volume"],
      ["Adobe RGB Color Gamut", "89% Coverage, 117% Volume"],
      ["DCI-P3 Color Gamut", "94% Coverage, 109% Volume"],
      ["sRGB Color Gamut", "99% Coverage, 129% Volume"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "HT6315E M61D"],
      ["HDMI Input", "2 x HDMI 2.0 (2560x1440@144Hz)"],
      ["DP Input", "1 x DP 1.4 (2560x1440@144Hz)"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "1 x (Upgrade only)"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "Support (Software LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support, HDR400"],
      ["MPRT", "Support"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Nonsupport"],
      ["Color Management", "Nonsupport"],
      ["Power Input", "DC 12V / 3A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤36W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "N/A"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In UG"],
      ["QSG", "In UG"],
      ["UG", "1 PCS"],
      ["Signal Cable", "1 PCS (HDMI Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "N/A"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 3.0KV AC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "≥4 MΩ @ 0.5KV DC / 5S"],
      ["Ground Bond Test", "≤100mΩ @ 25A DC / 20S"],
      ["EMC Certification", "CE / FCC / RCM"],
      ["Energy Certification", "ERP / CEC / MEPS"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "≤5000m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
    ],
  },
  {
    name: "H27T22C-3",
    images: [
      "/images/ktc/H27T22C-3/A (1).png",
      "/images/ktc/H27T22C-3/A (2).png",
      "/images/ktc/H27T22C-3/A (3).png",
      "/images/ktc/H27T22C-3/A (4).png",
      "/images/ktc/H27T22C-3/A (5).png",
    ],
    video: "/videos/ktc/H27T22.mp4",
    summary: ["27 inch Fast IPS", "2560 x 1440 @ 180Hz", "350 cd/m2", "2 x HDMI + 1 x DP"],
    specs: [
      ["Model Name", "H27T22C-3"],
      ["Stand Model", "/ Square Fixed Base"],
      ["Tilt", "-5° ~ 15° (±3°)"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "Yes"],
      ["Product Size Without Base", "616 x 364 x 60 mm"],
      ["Product Size With Base", "616 x 465 x 185 mm"],
      ["Packing Size", "690 x 485 x 160 mm"],
      ["Gross Weight", "7.1 kg (with stand)"],
      ["Net Weight With Stand", "5.1 kg (with stand) / 4.1 kg (without base)"],
      ["Color", "Front frame: Black / Rear cover: Black"],
      ["VESA / Screw", "100mm x 100mm; M4x8-12mm"],
      ["Panel Supplier", "AUO"],
      ["Panel Model", "M270DAN13.0"],
      ["Panel Size", "27 inch"],
      ["Panel Type", "Fast IPS"],
      ["Module Type", "Flat"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "2560 x 1440 @ 180Hz"],
      ["Pixel Pitch", "0.2328(H) x 0.2328(V) mm"],
      ["PPI", "109"],
      ["Active Area", "595.968(H) x 335.232(V) mm"],
      ["Viewing Angle", "H: 178°, V: 178° (CR≥10)"],
      ["Surface Treatment", "Anti-Glare, 3H"],
      ["Brightness", "350 cd/m² (Typ.)"],
      ["Contrast", "Typ: 1000:1"],
      ["Response Time (Panel)", "5 ms (typ)"],
      ["Response Time (with OD)", "N/A"],
      ["Display Colors", "1.07B (8-bit + FRC)"],
      ["NTSC Color Gamut", "82% Coverage, 88% Volume"],
      ["Adobe RGB Color Gamut", "99% Coverage, 125% Volume"],
      ["DCI-P3 Color Gamut", "94% Coverage, 98% Volume"],
      ["sRGB Color Gamut", "99% Coverage, 124% Volume"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "MT9800UTDUD M12U"],
      ["HDMI Input", "2 x HDMI 2.0 (2560x1440@144Hz)"],
      ["DP Input", "1 x DP 1.4 (2560x1440@180Hz)"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "1 x (Only for firmware upgrade, no data transmission)"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "Support (Hardware LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support"],
      ["MPRT", "Support"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Support"],
      ["Color Management", "N/A"],
      ["Power Input", "DC 12V / 4A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤48W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "N/A"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In UG"],
      ["QSG", "1 PCS"],
      ["UG", "In QSG"],
      ["Signal Cable", "1 PCS (DP Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "1 PCS"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 2.5KV DC / 60S"],
      ["Leakage Current", "≤3.5mA @ 264V AC / 60S"],
      ["Insulation Resistance", "N/A"],
      ["Ground Bond Test", "N/A"],
      ["EMC Certification", "VCCI / NOM"],
      ["Energy Certification", "ERP"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "< 5000 m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
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
    summary: ["31.5 inch HVA", "2560 x 1440 @ 185Hz", "300 cd/m2", "2 x HDMI + 2 x DP"],
    specs: [
      ["Model Name", "H27S5C"],
      ["Stand Model", "BCH0-32 V-type Die-cast Fixed Base"],
      ["Tilt", "-5° ~ 20° (±3°)"],
      ["Swivel", "N/A"],
      ["Pivot", "N/A"],
      ["Height Adjust", "N/A"],
      ["Quick Release", "Yes"],
      ["Product Size Without Base", "711 x 423 x 99 mm"],
      ["Product Size With Base", "711 x 520 x 148 mm"],
      ["Packing Size", "810 x 530 x 158 mm"],
      ["Gross Weight", "7.6 kg"],
      ["Net Weight With Stand", "5.6 kg"],
      ["Color", "Front frame: Black / Rear cover: Black"],
      ["VESA / Screw", "100mm x 100mm, M4x10mm"],
      ["Panel Supplier", "CSOT 华星"],
      ["Panel Model", "SG3151G02-3 Ver2.4"],
      ["Panel Size", "31.5 inch diagonal"],
      ["Panel Type", "HVA"],
      ["Module Type", "Curved R1500"],
      ["Aspect Ratio", "16:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "2560 x 1440 @ 185Hz"],
      ["Pixel Pitch", "0.2724(H) x 0.2724(V) mm"],
      ["PPI", "93"],
      ["Active Area", "697.344(H) x 392.256(V) mm"],
      ["Viewing Angle", "±89° (H), ±89° (V) (Typ.)"],
      ["Surface Treatment", "Anti-glare, AG25%, Hard Coating (3H)"],
      ["Brightness", "300 cd/m² (Typ.)"],
      ["Contrast", "Typ: 5000:1"],
      ["Response Time (Panel)", "Typ: 5 ms (FR=180Hz)"],
      ["Response Time (with OD)", "2 ms"],
      ["Display Colors", "1.07B (8-bit + FRC)"],
      ["NTSC Color Gamut", "82% Coverage, 91% Volume"],
      ["Adobe RGB Color Gamut", "92% Coverage, 108% Volume"],
      ["DCI-P3 Color Gamut", "96% Coverage, 100% Volume"],
      ["sRGB Color Gamut", "99% Coverage, 126% Volume"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "MT9800GWDUCG KM2G"],
      ["HDMI Input", "2 x HDMI 2.0 (2560x1440@144Hz)"],
      ["DP Input", "2 x DP 1.4 (2560x1440@180Hz) (OC 185Hz)"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "1 x (Upgrade only)"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "Support (Software LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support"],
      ["MPRT", "Support"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Nonsupport"],
      ["PIP/PBP", "Nonsupport"],
      ["MCC PC Client", "Support"],
      ["Color Management", "逐台校准 sRGB, ΔE<2"],
      ["Power Input", "DC 19V / 3.42A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤65W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "/"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In QSG"],
      ["QSG", "1 PCS"],
      ["UG", "In QSG"],
      ["Signal Cable", "1 PCS (DP Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "N/A"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 3.0KV AC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "≥4 MΩ @ 0.5KV DC / 5S"],
      ["Ground Bond Test", "N/A"],
      ["EMC Certification", "Yes"],
      ["Energy Certification", "高性能2级 (CEL2023)"],
      ["AMD FreeSync Cert", "支持功能"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "5000 m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
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
    summary: ["34 inch UltraWide HVA", "3440 x 1440 @ 180Hz", "300 cd/m2", "2 x HDMI + 2 x DP"],
    specs: [
      ["Model Name", "H32S5"],
      ["Stand Model", "BCR5-34"],
      ["Tilt", "-5° ~ 20° (±2°)"],
      ["Swivel", "±45°"],
      ["Pivot", "±5°"],
      ["Height Adjust", "110mm (±5mm)"],
      ["Quick Release", "Yes"],
      ["Product Size Without Base", "812 x 367 x 125 mm"],
      ["Product Size With Base", "812 x 521 x 307 mm"],
      ["Packing Size", "990 x 486 x 170 mm"],
      ["Gross Weight", "9.4 KG"],
      ["Net Weight With Stand", "7.6 KG"],
      ["Color", "Front frame: Black / Rear cover: Black"],
      ["VESA / Screw", "100mm x 100mm, M4x8-12mm"],
      ["Panel Supplier", "CSOT"],
      ["Panel Model", "SG3402H03-1"],
      ["Panel Size", "34 inch diagonal"],
      ["Panel Type", "HVA"],
      ["Module Type", "Curved R1500"],
      ["Aspect Ratio", "21:9"],
      ["Backlight Type", "ELED"],
      ["Maximum Resolution", "3440 x 1440 @ 180Hz"],
      ["Pixel Pitch", "0.23175(H) x 0.23175(V)"],
      ["PPI", "110"],
      ["Active Area", "797.22(H) x 333.72(V)"],
      ["Viewing Angle", "H: 178°, V: 178° (CR≥10)"],
      ["Surface Treatment", "Anti-glare AG25%"],
      ["Brightness", "Min: 250 cd/m²; Typ: 300 cd/m²"],
      ["Contrast", "4000:1 (Typ.)"],
      ["Response Time (Panel)", "5 ms (Typ.)"],
      ["Response Time (with OD)", "3 ms"],
      ["Display Colors", "1.07B (8-bit + FRC)"],
      ["NTSC Color Gamut", "82% Coverage, 89% Area (±5%)"],
      ["Adobe RGB Color Gamut", "92% Coverage, 104% Area (±5%)"],
      ["DCI-P3 Color Gamut", "95% Coverage, 96% Area (±5%)"],
      ["sRGB Color Gamut", "99% Coverage, 125% Area (±5%)"],
      ["Backlight Control", "DC"],
      ["Mainboard Model", "MT9800RTPTNG M12C"],
      ["HDMI Input", "2 x HDMI 2.0 (3440x1440@100Hz)"],
      ["DP Input", "2 x DP 1.4 (3440x1440@180Hz)"],
      ["Type-C Input", "N/A"],
      ["VGA Input", "N/A"],
      ["USB 3.0 Upstream", "N/A"],
      ["USB 3.0 Downstream", "N/A"],
      ["LAN (RJ45)", "N/A"],
      ["USB 2.0", "1 x (Upgrade only)"],
      ["Earphone Output", "x1"],
      ["Low Blue Light", "Support (Software LBL)"],
      ["Flicker Free", "Support"],
      ["HDR10", "Support, HDR10"],
      ["MPRT", "Support"],
      ["KVM", "Nonsupport"],
      ["FreeSync & G-Sync", "Support"],
      ["RGB Light", "Support (LOGO Light)"],
      ["PIP/PBP", "Support"],
      ["MCC PC Client", "Support"],
      ["Color Management", "Built-in data, ΔE<3"],
      ["Power Input", "DC 19V / 3.42A"],
      ["Adapter Input Voltage", "100V ~ 240V AC, 50/60 Hz"],
      ["Working Consumption", "≤65W"],
      ["Standby Consumption", "≤0.5W"],
      ["Type-C PD Power", "N/A"],
      ["Audio", "N/A"],
      ["Monitor (Accessory)", "1 PCS"],
      ["Base (Accessory)", "1 PCS"],
      ["Warranty Card", "In QSG"],
      ["QSG", "1 PCS"],
      ["UG", "In QSG"],
      ["Signal Cable", "1 PCS (DP Cable)"],
      ["Adaptor", "1 PCS"],
      ["Power Cord", "1 PCS (3-Pin Power Cord)"],
      ["Screwdriver", "N/A"],
      ["Screw", "N/A"],
      ["Withstand Voltage", "≤10mA @ 2.5KV DC / 60S"],
      ["Leakage Current", "≤0.35mA @ 264V AC / 60S"],
      ["Insulation Resistance", "N/A"],
      ["Ground Bond Test", "≤100mΩ @ 25A DC / 20S"],
      ["EMC Certification", "CE"],
      ["Energy Certification", "ERP"],
      ["AMD FreeSync Cert", "N/A"],
      ["VESA DisplayHDR", "N/A"],
      ["TÜV Low Blue Light", "N/A"],
      ["DP Certification", "N/A"],
      ["HDMI Certification", "Yes"],
      ["Max Working Altitude", "< 5000 m"],
      ["Working Condition", "Temp: 0°C~40°C, Humidity: 30%~90% Non-condensing"],
      ["Storage Condition", "Temp: -20°C~55°C, Humidity: 20%~93% Non-condensing"],
      ["Warranty Period", "3 Year"],
    ],
  },
];

const specCategories = [
  {
    key: "display",
    label: "Display",
    icon: "🖥",
    keywords: ["Panel", "Resolution", "Pixel", "PPI", "Active Area", "Viewing Angle", "Surface", "Brightness", "Contrast", "Response Time", "Display Colors", "Color Gamut", "Backlight", "Aspect Ratio", "Module Type"],
  },
  {
    key: "connectivity",
    label: "Connectivity",
    icon: "🔌",
    keywords: ["HDMI", "DP Input", "Type-C", "VGA", "USB", "LAN", "Earphone", "Audio"],
  },
  {
    key: "features",
    label: "Features",
    icon: "⚡",
    keywords: ["Low Blue Light", "Flicker Free", "HDR", "MPRT", "KVM", "FreeSync", "G-Sync", "RGB Light", "PIP/PBP", "MCC", "Color Management"],
  },
  {
    key: "power",
    label: "Power",
    icon: "🔋",
    keywords: ["Power Input", "Adapter", "Working Consumption", "Standby Consumption", "Type-C PD"],
  },
  {
    key: "physical",
    label: "Physical",
    icon: "📐",
    keywords: ["Stand", "Tilt", "Swivel", "Pivot", "Height", "Quick Release", "Product Size", "Packing Size", "Weight", "Color", "VESA"],
  },
  {
    key: "box",
    label: "In The Box",
    icon: "📦",
    keywords: ["Accessory", "Warranty Card", "QSG", "UG", "Signal Cable", "Adaptor", "Power Cord", "Screwdriver", "Screw"],
  },
  {
    key: "certification",
    label: "Certification",
    icon: "✅",
    keywords: ["Certification", "Withstand Voltage", "Leakage Current", "Insulation", "Ground Bond", "Max Working Altitude", "Working Condition", "Storage Condition", "Warranty"],
  },
];

const featureIcons: Record<string, string> = {
  "15.6 inch IPS": "🖥",
  "23.8 inch VA": "🖥",
  "23.8 inch Fast IPS": "🖥",
  "27 inch HVA": "🖥",
  "27 inch Fast IPS": "🖥",
  "31.5 inch HVA": "🖥",
  "34 inch UltraWide HVA": "🖥",
  "1920 x 1080 @ 60Hz": "📺",
  "1920 x 1080 @ 100Hz": "⚡",
  "1920 x 1080 @ 240Hz": "🎮",
  "2560 x 1440 @ 144Hz": "🎮",
  "2560 x 1440 @ 180Hz": "🎮",
  "2560 x 1440 @ 185Hz": "🎮",
  "3440 x 1440 @ 180Hz": "🎮",
  "300 cd/m2": "☀",
  "400 cd/m2": "☀",
  "350 cd/m2": "☀",
  "Mini HDMI + Type-C": "🔌",
  "HDMI + VGA": "🔌",
  "2 x HDMI + 1 x DP": "🔌",
  "2 x HDMI + 2 x DP": "🔌",
};

function getHighlights(model: MonitorModel): string[] {
  const highlights: string[] = [];
  const specsMap = new Map(model.specs);
  const res = specsMap.get("Maximum Resolution") || "";
  if (res.includes("240Hz") || res.includes("180Hz") || res.includes("185Hz") || res.includes("144Hz")) {
    highlights.push("High Refresh Rate Gaming");
  }
  const hdr = specsMap.get("HDR10") || "";
  if (hdr.includes("Support")) highlights.push("HDR10 Support");
  const panel = specsMap.get("Panel Type") || "";
  if (panel) highlights.push(`${panel} Panel`);
  const warranty = specsMap.get("Warranty Period") || "";
  if (warranty) highlights.push(`${warranty} Warranty`);
  const freesync = specsMap.get("FreeSync & G-Sync") || "";
  if (freesync.includes("Support")) highlights.push("Adaptive Sync");
  const curved = specsMap.get("Module Type") || "";
  if (curved.includes("Curved")) highlights.push("Curved Display");
  return highlights.slice(0, 5);
}

export default function KTCPage() {
  const [selectedModel, setSelectedModel] = useState<MonitorModel>(monitorModels[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["display"]));
  const [payLoading, setPayLoading] = useState(false);
  const [payStatus, setPayStatus] = useState<string | null>(null);

  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = selectedModel?.images?.[currentPhotoIndex] || "";
  const highlights = getHighlights(selectedModel);

  useEffect(() => {
    if (showVideo || !selectedModel?.images?.length) return;
    const interval = setInterval(() => {
      resetZoom();
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % selectedModel.images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [showVideo, selectedModel]);

  const handleModelChange = useCallback((model: MonitorModel) => {
    if (model.name === selectedModel.name) return;
    setIsChanging(true);
    setTimeout(() => {
      setSelectedModel(model);
      setCurrentPhotoIndex(0);
      setShowVideo(false);
      resetZoom();
      setExpandedSections(new Set(["display"]));
      setIsChanging(false);
    }, 300);
  }, [selectedModel.name]);

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
      transform: "scale(2)",
    });
  };

  const resetZoom = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => {
      const newLevel = Math.min(prev + 0.5, 3);
      setZoomStyle({ transformOrigin: "center center", transform: `scale(${newLevel})` });
      return newLevel;
    });
  };

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const newLevel = Math.max(prev - 0.5, 1);
      setZoomStyle({ transformOrigin: "center center", transform: `scale(${newLevel})` });
      return newLevel;
    });
  };
  const buyNow = async () => {
    setPayLoading(true);
    setPayStatus(null);
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1 }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${res.status}`);
      }

      const data = await res.json();
      if (!data.orderId) {
        throw new Error(data.error || "Failed to create order");
      }

      // Hardcoded test key for reliability
      const RAZORPAY_KEY = "rzp_test_TFip8ar2ihtAbp";

      const options = {
        key: RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency || "INR",
        name: "KTC India",
        description: `Purchase ${selectedModel.name}`,
        order_id: data.orderId,
        handler: async (response: any) => {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setPayStatus("✅ Payment Successful");
          } else {
            setPayStatus("❌ Payment Failed: " + (verifyData.message || "Verification failed"));
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#1a1b1e",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setPayStatus("❌ " + (err.message || "Payment Failed"));
    } finally {
      setPayLoading(false);
    }
  };


  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const categorizedSpecs = specCategories.map((cat) => ({
    ...cat,
    items: selectedModel.specs.filter(([label]) =>
      cat.keywords.some((kw) => label.toLowerCase().includes(kw.toLowerCase()))
    ),
  })).filter((cat) => cat.items.length > 0);

  const categorizedLabels = new Set(categorizedSpecs.flatMap((c) => c.items.map((i) => i[0])));
  const uncategorized = selectedModel.specs.filter(([label]) => !categorizedLabels.has(label));

  return (
    <main className="ktc-page">
      <section className="ktc-hero">
        <div className="ktc-hero-content">
          <h1>KTC Monitors</h1>
          <p>Premium display technology with professional specifications.</p>
        </div>
      </section>

      <section className="ktc-model-selector">
        <div className="ktc-model-scroll">
          {monitorModels.map((model) => (
            <button
              key={model.name}
              className={`ktc-model-chip ${selectedModel.name === model.name ? "active" : ""}`}
              onClick={() => handleModelChange(model)}
            >
              {model.name}
            </button>
          ))}
        </div>
      </section>

      <section className={`ktc-product-section ${isChanging ? "fade-out" : "fade-in"}`}>
        <div className="ktc-media-container">
          <div
            ref={containerRef}
            className="ktc-main-media"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetZoom}
          >
            {showVideo && selectedModel.video ? (
              <video
                autoPlay
                controls
                muted
                playsInline
                className="ktc-video-player"
                src={selectedModel.video}
              />
            ) : (
              currentImage && (
                <>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                    className="side-nav-bar side-nav-left"
                    aria-label="Previous image"
                  >
                    <span className="nav-arrow-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 19l-7-7 7-7"/></svg>
                    </span>
                  </button>

                  <div className="ktc-image-zoom-wrapper" style={{ ...zoomStyle, transition: "transform 0.2s ease-out" }}>
                    <Image
                      src={currentImage}
                      alt={selectedModel.name}
                      fill
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="ktc-monitor-image"
                      priority
                    />
                  </div>

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                    className="side-nav-bar side-nav-right"
                    aria-label="Next image"
                  >
                    <span className="nav-arrow-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </button>
                </>
              )
            )}
          </div>

          <div className="ktc-thumbnail-row">
            {selectedModel.images.map((img, idx) => (
              <button
                key={idx}
                className={`ktc-thumbnail ${currentPhotoIndex === idx ? "active" : ""}`}
                onClick={() => { resetZoom(); setCurrentPhotoIndex(idx); setShowVideo(false); }}
                aria-label={`View image ${idx + 1}`}
              >
                <Image src={img} alt={`${selectedModel.name} view ${idx + 1}`} fill sizes="80px" className="ktc-thumb-img" />
              </button>
            ))}
            {selectedModel.video && (
              <button
                className={`ktc-thumbnail video-thumb ${showVideo ? "active" : ""}`}
                onClick={() => { setShowVideo(!showVideo); resetZoom(); }}
                aria-label="Play video"
              >
                <span className="video-play-icon">▶</span>
                <span className="video-label">Video</span>
              </button>
            )}
          </div>

          <div className="ktc-controls">
            <span className="photo-counter">{currentPhotoIndex + 1} / {selectedModel?.images?.length || 0}</span>
            <div className="ktc-zoom-controls">
              <span className="hover-hint desktop-only">Hover to zoom</span>
              <button type="button" onClick={zoomOut} disabled={zoomLevel <= 1} className="zoom-btn">−</button>
              <span className="zoom-level">{zoomLevel}x</span>
              <button type="button" onClick={zoomIn} disabled={zoomLevel >= 3} className="zoom-btn">+</button>
            </div>
          </div>
        </div>

        <div className="ktc-product-info">
          <h2 className="ktc-model-name">{selectedModel.name}</h2>

          <div className="ktc-highlights">
            {highlights.map((h, i) => (
              <span key={i} className="ktc-highlight-tag">{h}</span>
            ))}
          </div>

          <div className="ktc-feature-cards">
            {selectedModel.summary.map((item, i) => (
              <div key={i} className="ktc-feature-card">
                <span className="feature-icon">{featureIcons[item] || "✦"}</span>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>

          {selectedModel.name === "H15F9" && (
            <div style={{ marginTop: "24px" }}>
              <button
                type="button"
                onClick={buyNow}
                disabled={payLoading}
                style={{
                  background: "#1a1b1e",
                  color: "#fefdfb",
                  padding: "14px 36px",
                  borderRadius: "30px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: payLoading ? "not-allowed" : "pointer",
                  opacity: payLoading ? 0.6 : 1,
                  transition: "all 0.2s ease",
                }}
              >
                {payLoading ? "Processing..." : "Buy Now — ₹1"}
              </button>
              {payStatus && (
                <p style={{ marginTop: "12px", fontWeight: 600, fontSize: "14px" }}>
                  {payStatus}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="ktc-specs-section">
        <h3 className="ktc-specs-title">Detailed Specifications</h3>
        <div className="ktc-specs-accordion">
          {categorizedSpecs.map((cat) => (
            <div key={cat.key} className={`ktc-spec-category ${expandedSections.has(cat.key) ? "expanded" : ""}`}>
              <button
                className="ktc-spec-category-header"
                onClick={() => toggleSection(cat.key)}
                aria-expanded={expandedSections.has(cat.key)}
              >
                <span className="spec-cat-icon">{cat.icon}</span>
                <span className="spec-cat-label">{cat.label}</span>
                <span className="spec-cat-count">{cat.items.length}</span>
                <svg className="spec-cat-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="ktc-spec-category-body">
                {cat.items.map(([label, value], idx) => (
                  <div key={idx} className="spec-row">
                    <div className="spec-label">{label}</div>
                    <div className="spec-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {uncategorized.length > 0 && (
            <div className={`ktc-spec-category ${expandedSections.has("other") ? "expanded" : ""}`}>
              <button
                className="ktc-spec-category-header"
                onClick={() => toggleSection("other")}
                aria-expanded={expandedSections.has("other")}
              >
                <span className="spec-cat-icon">📋</span>
                <span className="spec-cat-label">Other</span>
                <span className="spec-cat-count">{uncategorized.length}</span>
                <svg className="spec-cat-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="ktc-spec-category-body">
                {uncategorized.map(([label, value], idx) => (
                  <div key={idx} className="spec-row">
                    <div className="spec-label">{label}</div>
                    <div className="spec-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
    </main>
  );
}