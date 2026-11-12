import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/ev-charger/",
  seoTitle: "7kW, 11kW and 22kW AC EV Chargers | Auzbright",
  description:
    "Smart AC EV chargers in 7kW, 11kW and 22kW options for residential, commercial and public charging, with OCPP connectivity and app and RFID access.",
  crumbs: [
    {
      label: "EV charger",
    },
  ],
  hero: {
    eyebrow: "Smart EV charging solution",
    title: "7kW / 11kW / 22kW {AC EV charger.}",
    lead: "Fast, reliable and smart AC EV charging for residential, commercial and public charging environments.",
    primary: {
      label: "Get offer now",
      href: "/enquire-now/",
    },
  },
  sections: [
    {
      type: "features",
      eyebrow: "Key features",
      title: "Smart, connected and built for real-world use",
      columns: 3,
      items: [
        {
          icon: "bolt",
          title: "Up to 22kW charging",
          text: "Up to 32A output for high-performance AC charging.",
        },
        {
          icon: "shield",
          title: "IP65 protection",
          text: "Designed for demanding environments with -40°C to +55°C operation.",
        },
        {
          icon: "globe",
          title: "Cloud connected",
          text: "OCPP connectivity with remote monitoring and management.",
        },
        {
          icon: "chart",
          title: "Dynamic load balancing",
          text: "Intelligent power distribution for efficient charging.",
        },
        {
          icon: "phone",
          title: "App and RFID",
          text: "App, RFID and Plug & Charge supported.",
        },
        {
          icon: "wifi",
          title: "OTA updates",
          text: "Upgrade charger software remotely.",
        },
      ],
    },
    {
      type: "split",
      tone: "mist",
      eyebrow: "Applications",
      title: "Made for residential charging",
      image: {
        src: "/assets/images/pages/f58d2ebe-d51c-4e48-9295-4d2dc2f47090.webp",
        alt: "A wall-mounted EV charger at a home, plugged into a white electric car in the driveway",
        width: 1200,
        height: 400,
      },
    },
    {
      type: "split",
      flip: true,
      eyebrow: "Smart charging",
      title: "Connected charging, simplified",
      body: [
        "Manage your charging infrastructure with intelligent connectivity and power management.",
      ],
      bullets: [
        "**OCPP 1.6J** – Upgrade capability to OCPP 2.0.1.",
        "**Connectivity** – Ethernet, WiFi, Bluetooth and optional 4G.",
        "**RFID** – ISO 14443 protocol support.",
        "**Remote OTA** – Software upgrades remotely.",
      ],
      image: {
        src: "/assets/images/pages/ev-charger-feature-callout-infographicc-1.webp",
        alt: "EV charger on a pedestal with seven callouts: optional MID certified meter, dynamic load balancing, OTA, cloud portal and OCPP capability, 4G (optional), Ethernet, WiFi and Bluetooth, AC 30mA + DC 6mA leakage protection, and optional pedestal support",
        width: 1200,
        height: 876,
        fit: "contain",
      },
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Power options",
      title: "Three power levels. One smart charging platform.",
      intro: "Choose the configuration that matches your charging environment.",
      columns: 3,
      items: [
        {
          icon: "home",
          title: "7kW – Residential",
          text: "Ideal for homes and smaller charging applications.",
        },
        {
          icon: "plug",
          title: "11kW – Residential + commercial",
          text: "A balanced solution for everyday charging requirements.",
        },
        {
          icon: "bolt",
          title: "22kW – High demand",
          text: "High-power AC charging for commercial environments.",
        },
      ],
    },
  ],
};

export default data;
