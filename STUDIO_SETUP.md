# Sanity CMS Studio Setup Guide

The frontend architecture is 100% ready. The website is now using a `useContent` hook to fetch data. Right now, it is safely falling back to our local data. 

To spin up your beautiful Sanity CMS dashboard, follow these exact steps on your local machine:

### 1. Initialize the Studio
Open your computer's terminal (or your IDE's terminal) and run this command inside the `X:\Antigrav\Sonet New` folder:

```bash
npm create sanity@latest
```
- It will ask you to log in. This will open your web browser so you can log in with GitHub/Google.
- When it asks for a project name, type: `sonet-studio`
- Use the default dataset: `production`
- Choose the **"Clean project with no predefined schemas"** template.

### 2. Connect the Frontend
Once it finishes, log into [manage.sanity.io](https://manage.sanity.io) in your browser.
1. Find your newly created project and copy the **Project ID** (a short string like `v2nx...`).
2. Open the file `/src/lib/sanityClient.js` in this codebase.
3. Replace the placeholder `'your-project-id'` with your actual Project ID.

### 3. Add Schemas
Inside your new `sonet-studio` folder, open the `schemas/index.js` file and add the following schema to define what the Hero Section looks like in the CMS:

```javascript
export const schemaTypes = [
  {
    name: 'hero',
    type: 'document',
    title: 'Hero Section',
    fields: [
      { name: 'title', type: 'string', title: 'Top Title Text' },
      { name: 'titleHighlight', type: 'string', title: 'Highlighted Gradient Text' },
      { name: 'titleEnd', type: 'string', title: 'Bottom Title Text' },
      { name: 'subtitle', type: 'text', title: 'Subtitle Description' },
    ]
  }
]
```

### 4. Run the Studio!
Open a new terminal window, navigate into the studio folder, and start it:
```bash
cd sonet-studio
npm run dev
```

You can now go to `http://localhost:3333` in your browser. You will see a beautiful dashboard where you can type in your new Hero Text. Click "Publish", and the main website will instantly update using the `useContent` hook!
