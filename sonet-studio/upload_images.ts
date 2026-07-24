import { getCliClient } from 'sanity/cli'
import { createReadStream } from 'fs'
import path from 'path'

const client = getCliClient()

async function uploadAndPatch(documentId, relativeFilePath) {
  try {
    const fullPath = path.resolve(process.cwd(), relativeFilePath);
    console.log(`Uploading ${fullPath}...`);
    
    // Upload the image
    const asset = await client.assets.upload('image', createReadStream(fullPath), {
      filename: path.basename(fullPath)
    });
    
    console.log(`Uploaded asset: ${asset._id}`);
    
    // Patch the document
    await client.patch(documentId).set({
      heroImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      }
    }).commit();
    
    console.log(`Successfully patched ${documentId}`);
  } catch (err) {
    console.error(`Error processing ${documentId}:`, err);
  }
}

async function main() {
  // surveillance: using the wall of cameras for the hero, so the warehouse camera can be the feature image
  await uploadAndPatch('eJ7skWqptDvdh6OpbPA6ow', '../src/assets/hero/hero_surveillance.jpg');
  
  // wireless: using the factory AP
  await uploadAndPatch('eJ7skWqptDvdh6OpbPA7J5', '../src/assets/features/feature_wifi_factory.jpg');
  
  // audio-visual: using the control room monitors
  await uploadAndPatch('eJ7skWqptDvdh6OpbPA7Rh', '../src/assets/features/feature_surv_nvr.jpg');
  
  console.log("All done!");
}

main();
