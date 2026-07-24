import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const partnerCategories = [
  {
    _type: 'partnerCategory',
    category: "Core Networking & Infrastructure",
    order: 1,
    description: "The hardware backbone of our physical deployments.",
  },
  {
    _type: 'partnerCategory',
    category: "Wireless & Mobility",
    order: 2,
    description: "Enterprise-grade spatial connectivity solutions.",
  },
  {
    _type: 'partnerCategory',
    category: "Security & Surveillance",
    order: 3,
    description: "Hardware systems for physical perimeter fortification.",
  },
  {
    _type: 'partnerCategory',
    category: "Cloud & Compute Integration",
    order: 4,
    description: "Seamless integration into global cloud architectures.",
  }
]

async function importPartners() {
  console.log('Starting partner categories import...')
  
  for (const cat of partnerCategories) {
    console.log(`Importing ${cat.category}...`)
    await client.create(cat)
  }
  
  console.log('Partner categories imported! Note: Logos will need to be uploaded manually via the Studio UI since they are local image files.')
}

importPartners().catch(console.error)
