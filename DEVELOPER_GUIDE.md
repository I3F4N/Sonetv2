# Sonet Integrated Solutions - Developer Guide

Welcome to the Sonet Integrated Solutions codebase! This document is designed to help beginner developers quickly understand the architecture, CMS integration, and routing of the application so you can make changes safely and easily.

## Tech Stack
- **Framework:** React 18 (built with Vite for lightning-fast HMR and optimized production builds)
- **CMS (Content Management System):** Sanity.io (Headless CMS for managing text and services)
- **Routing:** React Router v6 (`react-router-dom`)
- **Styling:** Tailwind CSS (configured in `tailwind.config.js` and `src/index.css`)
- **Animations:** Framer Motion (for all scroll, hover, and layout animations)
- **Icons:** Lucide React

---

## Architecture & CMS Integration

This application uses a hybrid data-fetching model. The core text and service configurations live in a live database (Sanity.io), but the codebase has a robust local fallback system to prevent the UI from breaking if the database connection drops.

### 1. Data Fetching (`useContent.js`)
All pages fetch their data using a custom React Hook located at `src/hooks/useContent.js`.
- When a component calls `const { data } = useContent('service', 'wireless');`, the hook first synchronously loads hardcoded fallback data to prevent layout shift.
- It then asynchronously reaches out to the Sanity database. If it finds matching data, it overwrites the local state and triggers a re-render with the live data.

### 2. Local Fallback Database (`content.js`)
Located at `src/data/content.js`, this file acts as the "offline database". 
- If you don't want to use Sanity, or if Sanity is down, the application will render everything perfectly using the JSON structures defined in this file.
- If you need to add a new service or change text *without* logging into Sanity Studio, you can do it here.

### 3. The Hero Image Map (`imageMap`)
Because external image libraries (like Unsplash) can change or return broken links, we bypass the CMS entirely for the main "Hero" and "Featured" images on the site.
- In `src/data/content.js`, there is an exported object called `imageMap`.
- `imageMap` binds the URL `slug` of a service (e.g., `surveillance`) to a high-quality, locally imported `.jpg` file (e.g., `featureSurvWarehouse.jpg`).
- Whenever a component needs to render a hero image, it checks `imageMap` first. If it exists, it forces the local image.

---

## Directory Structure

All application code lives in the `src/` directory.

### `/src/components/`
These are the reusable global UI elements.
- **`AnimatedBackground.jsx`:** The global "Cyber-Physical" 3D animated grid background.
- **`Navbar.jsx`:** The main site header and navigation. Automatically generates links based on the active services returned by Sanity/content.js.
- **`Footer.jsx`:** The site footer. Features a highly responsive grid layout that adapts intelligently for mobile screens.
- **`ScrollToTop.jsx`:** Ensures the browser viewport resets to the top of the page on route changes.

### `/src/pages/`
These are the main route views. Every page is a standalone React component.
- **`Home.jsx`:** The massive landing page. Features the main Parallax Hero and dynamically maps over all active services to generate the grid cards.
- **`[Service Name].jsx`:** Dedicated service pages (e.g., `Surveillance.jsx`, `Wireless.jsx`). These pages read their specific slug data via the `useContent` hook.
- **`Partners.jsx`:** The dedicated page showcasing the hardware partners ecosystem.

### `/src/assets/`
Contains static assets like local images (`/hero`, `/features`) and logos (`/partners`). **If you add a new hero image, place it here and update the `imageMap` in `content.js`.**

---

## How to Edit Content

### Editing Text
1. **Via Sanity (Recommended):** Log into your Sanity Studio, edit the document, and click Publish. The live website will instantly update.
2. **Via Code:** Open `src/data/content.js` and edit the text strings. (Note: Sanity data will override this if Sanity is connected).

### Adding a New Service Page
1. Add the new service object to the `services` array in `src/data/content.js` (give it a unique `slug`).
2. Add the corresponding document in Sanity Studio to match.
3. Add a new high-quality image to `src/assets/` and link it in the `imageMap` in `content.js`.
4. Create a new `NewService.jsx` file in `/src/pages/`.
5. Open `src/App.jsx` and add a new Route: `<Route path="/your-slug" element={<NewService />} />`.
6. The `Navbar` and `Home` grid will automatically update to include your new page!

---

## Deployment Guide: Getting Live on Vercel

Vercel is the absolute best platform for hosting React (Vite) applications. It is free and incredibly fast.

### Step 1: Push your code to GitHub
1. Create a free account on GitHub.
2. Initialize your project as a Git repository and push it to a new GitHub repository.

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import the GitHub repository you just created.
4. Vercel will automatically detect that you are using Vite/React.
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Step 3: Configure Client-Side Routing (Important!)
Because this is a Single Page Application (SPA) using React Router, if a user refreshes the page on `/surveillance`, Vercel will look for a literal file called `surveillance.html` and return a 404 error.

To fix this, you must tell Vercel to route all traffic to `index.html`:
1. Create a new file in the root of your project (outside of `src`) called `vercel.json`.
2. Add the following code to `vercel.json`:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/" }
     ]
   }
   ```
3. Commit this file and push to GitHub. Vercel will automatically trigger a new deployment and your routing will work perfectly!
