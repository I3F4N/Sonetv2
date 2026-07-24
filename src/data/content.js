// This file acts as our Local CMS / Database.
// When Sanity is connected, this file acts as a safe fallback.

import { Server, Network, Shield, Wifi, MonitorPlay, Cloud } from 'lucide-react';

import adcKrone from '../assets/partners/adc-krone.png';
import amp from '../assets/partners/amp.png';
import aruba from '../assets/partners/aruba.png';
import avaya from '../assets/partners/avaya.png';
import aws from '../assets/partners/aws.png';
import bosch from '../assets/partners/bosch.png';
import cisco from '../assets/partners/cisco.png';
import commscope from '../assets/partners/commscope.png';
import dlink from '../assets/partners/dlink.png';
import engenius from '../assets/partners/engenius.png';
import fortinet from '../assets/partners/fortinet.png';
import google from '../assets/partners/google.png';
import hp from '../assets/partners/hp.png';
import microsoft from '../assets/partners/microsoft.png';
import netgear from '../assets/partners/netgear.png';
import ruckus from '../assets/partners/ruckus.png';
import samsung from '../assets/partners/samsung.png';
import tyco from '../assets/partners/tyco.png';

// Hero Images
import heroHome from '../assets/hero/hero_home.jpg';
import heroSurveillance from '../assets/hero/hero_surveillance.jpg';
import heroNetworking from '../assets/hero/hero_networking.jpg';
import heroDataCenter from '../assets/hero/hero_datacenter.jpg';
import heroAudioVisual from '../assets/hero/hero_audiovisual.jpg';
import featureWifiFactory from '../assets/features/feature_wifi_factory.jpg';
import heroCloud from '../assets/hero/hero_cloud.jpg';

import featureSurvWarehouse from '../assets/features/feature_surv_warehouse.jpg';
import featureSurvNvr from '../assets/features/feature_surv_nvr.jpg';

export const imageMap = {
  'surveillance': featureSurvWarehouse, // Reusing our amazing generated warehouse CCTV for Surveillance
  'networking': heroNetworking,
  'data-center': heroDataCenter,
  'wireless': featureWifiFactory, // Reusing our amazing factory AP for Wireless
  'audio-visual': featureSurvNvr, // Reusing the high-tech NVR control room for AV since it looks like an AV broadcast room
  'cloud': heroCloud
};

export const siteContent = {
  partnerCategory: [
    {
      category: "Core Networking & Infrastructure",
      order: 1,
      description: "The hardware backbone of our physical deployments.",
      logos: [cisco, hp, commscope, tyco, amp, adcKrone]
    },
    {
      category: "Wireless & Mobility",
      order: 2,
      description: "Enterprise-grade spatial connectivity solutions.",
      logos: [aruba, ruckus, engenius, netgear, dlink]
    },
    {
      category: "Security & Surveillance",
      order: 3,
      description: "Hardware systems for physical perimeter fortification.",
      logos: [fortinet, bosch, samsung, avaya]
    },
    {
      category: "Cloud & Compute Integration",
      order: 4,
      description: "Seamless integration into global cloud architectures.",
      logos: [aws, google, microsoft]
    }
  ],
  siteSettings: {
    title: "Sonet Integrated Solutions",
    showFeaturedProjects: false,
    whatsappNumber: "1234567890",
    whatsappMessage: "Hi, I am interested in deploying physical infrastructure."
  },
  hero: {
    title: "Building the",
    titleHighlight: "Physical Backbone",
    titleEnd: "of Enterprise.",
    subtitle: "We offer a comprehensive service and solution portfolio to clients, helping them to put their business in motion. Customers can benefit from an industry-leading portfolio that includes Mobility, Networking, Network Security, Cloud, Hosting, Voice, Unified Communications and Application services. Supporting many global enterprises across such industries as business services, hospitality, financial services, manufacturing and energy.",
    backgroundImage: heroHome
  },
  services: [
    {
      isActive: true,
      title: "Turnkey CCTV & Surveillance",
      slug: { current: "surveillance" },
      subtitle: "We supply the cameras, execute structured system integration, physically mount hardware, and integrate NVR infrastructure for massive corporate properties.",
      heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000",
      gridIcon: "Shield",
      gridSpan: "lg:col-span-2 lg:row-span-1",
      gridColor: "text-primary",
      features: [
        "Specialized in IP and analog systems, HD CCTV, PTZ, and Dome cameras.",
        "NVR and DVR integration for seamless recording and remote access.",
        "Biometric access control and time attendance systems (Fingerprint, Card, PIN).",
        "Boom barriers, walk-through detectors, and perimeter security.",
        "Executed surveillance across commercial sectors and massive 7000+ IP Camera University deployments."
      ]
    },
    {
      isActive: true,
      title: "Structured Cabling & Networking",
      slug: { current: "networking" },
      subtitle: "Fiber/UTP deployment, LAN integration, advanced splicing, terminations, and core switch configuration.",
      heroImage: heroNetworking,
      gridIcon: "Network",
      gridSpan: "lg:col-span-2 lg:row-span-2",
      gridColor: "text-accent",
      features: [
        "Outside plant fiber optic transmission systems & multi-location connectivity.",
        "Campus-wide backbone installations and splicing.",
        "UTP Cable Pulling, Termination, and Testing.",
        "Active networking component configuration (Core Switches, Routers, Firewalls).",
        "VSAT (Very Small Aperture Terminal) installation for satellite communications."
      ]
    },
    {
      isActive: true,
      title: "Data Centers & Racks",
      slug: { current: "data-center" },
      subtitle: "Building physical MDF/IDF closets and enterprise server rooms.",
      heroImage: heroDataCenter,
      gridIcon: "Server",
      gridSpan: "lg:col-span-1 lg:row-span-1",
      gridColor: "text-accent",
      features: [
        "Designing and implementing scalable MDF/IDF network closets.",
        "High-density physical rack mounting and cable management.",
        "UPS integration and power redundancy planning.",
        "Precision cooling and environmental monitoring setup.",
        "Zero downtime migration and infrastructure consolidation."
      ]
    },
    {
      isActive: true,
      title: "Industrial Wireless",
      slug: { current: "wireless" },
      subtitle: "Mounting APs in vast factories and campus environments.",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      gridIcon: "Wifi",
      gridSpan: "lg:col-span-1 lg:row-span-1",
      gridColor: "text-blue-400",
      features: [
        "Indoor and Outdoor AP deployment for enterprise and factory floors.",
        "Point-to-Point and Point-to-Multipoint wireless bridging.",
        "Wi-Fi hotspot creation and captive portal integration.",
        "RF site surveying and heat-mapping for zero dead zones.",
        "Seamless roaming configurations for logistics and warehouse barcode scanners."
      ]
    },
    {
      isActive: true,
      title: "Audio Visual Solutions",
      slug: { current: "audio-visual" },
      subtitle: "Conferencing, PA, & Massive Video Walls.",
      heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
      gridIcon: "MonitorPlay",
      gridSpan: "lg:col-span-2 lg:row-span-1",
      gridColor: "text-purple-400",
      features: [
        "Executive boardroom video conferencing setup.",
        "Campus-wide Public Address (PA) systems and paging.",
        "Massive LED video walls and digital signage deployment.",
        "Acoustic tuning and integrated touch-panel controls.",
        "Auditorium projector and high-fidelity sound systems."
      ]
    },
    {
      isActive: true,
      title: "Web & Cloud Solutions",
      slug: { current: "cloud" },
      subtitle: "Collocation, Hosting, & Custom Web App Development.",
      heroImage: heroCloud,
      gridIcon: "Cloud",
      gridSpan: "lg:col-span-2 lg:row-span-1",
      gridColor: "text-emerald-400",
      features: [
        "Server collocation and managed cloud hosting.",
        "Custom enterprise web application development (React, Node).",
        "Disaster recovery and automated cloud backups.",
        "SaaS integration and API development.",
        "High-availability architecture design and load balancing."
      ]
    }
  ]
};
