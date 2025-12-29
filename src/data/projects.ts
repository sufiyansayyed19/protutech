import { Zap, Thermometer, Activity, Cpu, Wifi } from "lucide-react";

// --- PROJECT 1 IMAGES ---
import imgVarSupply1 from "../assets/1ph-variable-automated- -supply-system/1ph-variable-automated-_-supply-system-1.png";
import imgVarSupply2 from "../assets/1ph-variable-automated- -supply-system/1ph-variable-automated-_-supply-system-2.png";
import imgVarSupply3 from "../assets/1ph-variable-automated- -supply-system/1ph-variable-automated-_-supply-system-3.png";
import imgVarSupply4 from "../assets/1ph-variable-automated- -supply-system/1ph-variable-automated-_-supply-system-4.png";

// --- PROJECT 2 IMAGES ---
import imgThermal1 from "../assets/thermal-safety-unit/thermal-safety-unit-1.png";
import imgThermal2 from "../assets/thermal-safety-unit/thermal-safety-unit-2.png";
import imgThermal3 from "../assets/thermal-safety-unit/thermal-safety-unit-3.png";
import imgThermal4 from "../assets/thermal-safety-unit/thermal-safety-unit-4.png";

// --- PROJECT 3 IMAGES ---
import imgVariac1 from "../assets/3ph-variac-motorised-system/3ph-variac- motorised-system-1.jpg";
import imgVariac2 from "../assets/3ph-variac-motorised-system/3ph-variac- motorised-system-2.jpg";
import imgVariac3 from "../assets/3ph-variac-motorised-system/3ph-variac- motorised-system-3.jpg";
import imgVariac4 from "../assets/3ph-variac-motorised-system/3ph-variac- motorised-system-4.jpg";

// --- PROJECT 4 IMAGES ---
import imgSmartAC1 from "../assets/ac-supply-unit-with-programmable-ol-trip/ac-supply-unit-with-programmable-ol-trip-1.jpg";
import imgSmartAC2 from "../assets/ac-supply-unit-with-programmable-ol-trip/ac-supply-unit-with-programmable-ol-trip-2.jpg";

// --- PROJECT 5 IMAGES ---
import imgEnergy1 from "../assets/smart-prepaid-energy-meter/smart-prepaid-energy-meter-1.jpg";
import imgEnergy2 from "../assets/smart-prepaid-energy-meter/smart-prepaid-energy-meter-2.jpg";
import imgEnergy3 from "../assets/smart-prepaid-energy-meter/smart-prepaid-energy-meter-3.jpg";
import imgEnergy4 from "../assets/smart-prepaid-energy-meter/smart-prepaid-energy-meter-4.jpg";


export const projectsData = [
  {
    id: "variable-supply",
    title: "Dual AC/DC Power Station",
    category: "Power Electronics",
    image: imgVarSupply1, // Main thumbnail for Home Page
    gallery: [imgVarSupply1, imgVarSupply2, imgVarSupply3, imgVarSupply4], // Full Gallery
    description: "A versatile lab bench supply providing variable AC & DC output with short-circuit protection and automated cutoff.",
    fullDescription: "The Variable Automated Supply System is designed to provide both AC and DC variable output using a single-phase 230V AC input. It features controlled variation through autotransformers and includes safety mechanisms for efficient and protected power delivery.",
    tags: ["AC/DC", "Autotransformer", "Protection"],
    icon: Zap,
    specs: [
      { label: "Input Voltage", value: "230V AC" },
      { label: "Output 1", value: "0-230V AC (10A)" },
      { label: "Output 2", value: "0-24V DC (5A)" },
      { label: "Control", value: "Push Button + Contactor" },
      { label: "Protection", value: "Overload + Short Circuit" }
    ],
    features: [
      "Push-button control for autotransformer",
      "Contactor-based switching system",
      "Emergency stop mechanism",
      "Audio-visual alarm system"
    ]
  },
  {
    id: "thermal-safety",
    title: "Smart Thermal Guard",
    category: "Safety Systems",
    image: imgThermal1,
    gallery: [imgThermal1, imgThermal2, imgThermal3, imgThermal4],
    description: "Intelligent fire prevention system using Arduino to monitor temp in real-time and cut power during critical overheating.",
    fullDescription: "The Thermal Safety Unit is an automated safety system designed to protect electrical equipment from overheating. It uses real-time temperature monitoring via an Arduino-controlled circuit to detect unsafe thermal conditions.",
    tags: ["Arduino", "Sensors", "Safety"],
    icon: Thermometer,
    specs: [
      { label: "Controller", value: "Arduino Microcontroller" },
      { label: "Sensor", value: "Real-time Temp Sensor" },
      { label: "Switching", value: "Relay + Contactor" },
      { label: "Display", value: "Digital Temp Readout" }
    ],
    features: [
      "Real-time temperature monitoring",
      "Automatic high-load cutoff",
      "Manual override control",
      "Fire hazard prevention logic"
    ]
  },
  {
    id: "3ph-variac",
    title: "IoT 3-Phase Motor Control",
    category: "Industrial IoT",
    image: imgVariac1,
    gallery: [imgVariac1, imgVariac2, imgVariac3, imgVariac4],
    description: "Industrial-grade voltage control with wireless web monitoring, motorized autotransformer, and overload protection.",
    fullDescription: "The Three-Phase Variac Motorised System allows both manual and wireless control of voltage for three-phase loads. It includes real-time monitoring and advanced safety features for high-current operations.",
    tags: ["IoT", "3-Phase", "Wireless"],
    icon: Activity,
    specs: [
      { label: "Input", value: "3-Phase 415V AC" },
      { label: "Load Capacity", value: "15A - 20A" },
      { label: "Control", value: "Wireless Web Server" },
      { label: "Protection", value: "Numeric Relay" }
    ],
    features: [
      "Wireless control via Web Server",
      "Numeric relay for intelligent tripping",
      "Digital Voltmeter, Ammeter, Frequency Meter",
      "Emergency stop push-button"
    ]
  },
  {
    id: "smart-ac-trip",
    title: "Smart Grid AC Analyzer",
    category: "Smart Grid",
    image: imgSmartAC1,
    gallery: [imgSmartAC1, imgSmartAC2],
    description: "Next-gen AC supply unit with programmable numeric relay for precise overload tripping and web-based monitoring.",
    fullDescription: "The Smart AC Supply Unit is equipped with intelligent protection features. It allows users to monitor and control power delivery both manually and wirelessly, with programmable overload settings.",
    tags: ["Smart Grid", "Numeric Relay", "Web"],
    icon: Cpu,
    specs: [
      { label: "Input", value: "230V AC" },
      { label: "Current Monitoring", value: "Up to 5A (CT)" },
      { label: "Protection", value: "Programmable Overload Trip" },
      { label: "Display", value: "V, I, PF, Energy" }
    ],
    features: [
      "Programmable overload protection",
      "Wireless control/monitoring",
      "Real-time power factor display",
      "Dual-mode safety (Auto/Manual)"
    ]
  },
  {
    id: "smart-energy-meter",
    title: "Smart Prepaid Energy Meter",
    category: "Consumer IoT",
    image: imgEnergy1,
    gallery: [imgEnergy1, imgEnergy2, imgEnergy3, imgEnergy4],
    description: "GSM-based energy meter allowing users to recharge electricity via SMS/App with real-time balance tracking and auto-cutoff.",
    fullDescription: "A smart metering solution that enables prepaid electricity consumption. Users receive SMS alerts for low balance and the system automatically disconnects supply when the balance is zero.",
    tags: ["GSM", "Energy", "Automation"],
    icon: Wifi,
    specs: [
      { label: "Comms", value: "GSM Module" },
      { label: "Control", value: "SMS / App" },
      { label: "Mechanism", value: "Relay Cutoff" },
      { label: "Feedback", value: "LCD + SMS Alerts" }
    ],
    features: [
      "SMS-based recharge system",
      "Automatic low-balance cutoff",
      "Real-time usage tracking",
      "Tamper alert system"
    ]
  },
];