import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const services = [
  {
    _type: 'service',
    isActive: true,
    title: "Turnkey CCTV & Surveillance",
    slug: { _type: 'slug', current: "surveillance" },
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
    _type: 'service',
    isActive: true,
    title: "Structured Cabling & Networking",
    slug: { _type: 'slug', current: "networking" },
    subtitle: "Fiber/UTP deployment, LAN integration, advanced splicing, terminations, and core switch configuration.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
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
    _type: 'service',
    isActive: true,
    title: "Data Centers & Racks",
    slug: { _type: 'slug', current: "data-center" },
    subtitle: "Building physical MDF/IDF closets and enterprise server rooms.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
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
    _type: 'service',
    isActive: true,
    title: "Industrial Wireless",
    slug: { _type: 'slug', current: "wireless" },
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
    _type: 'service',
    isActive: true,
    title: "Audio Visual Solutions",
    slug: { _type: 'slug', current: "audio-visual" },
    subtitle: "Conferencing, PA, & Massive Video Walls.",
    heroImage: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=2000",
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
    _type: 'service',
    isActive: true,
    title: "Web & Cloud Solutions",
    slug: { _type: 'slug', current: "cloud" },
    subtitle: "Collocation, Hosting, & Custom Web App Development.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
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

async function importData() {
  console.log('Starting data import...')
  
  // Create Site Settings Singleton
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: "Sonet Integrated Solutions",
    showFeaturedProjects: false
  })
  console.log('Created Site Settings')

  // Create Services
  for (const service of services) {
    console.log(`Importing ${service.title}...`)
    await client.create(service)
  }
  
  console.log('Import complete!')
}

importData().catch(console.error)
