# Setup Instructions

## Prerequisites

You need to install Node.js on your Windows system first.

### Installing Node.js

1. Download Node.js from: https://nodejs.org/
2. Download the LTS (Long Term Support) version for Windows
3. Run the installer and follow the installation wizard
4. Make sure to check the box that says "Automatically install the necessary tools"
5. Restart your computer after installation

### Verify Installation

Open PowerShell and run:
```powershell
node --version
npm --version
```

Both commands should display version numbers.

## Project Setup

Once Node.js is installed, navigate to your project directory in PowerShell and run:

```powershell
npm install
```

This will install all the required dependencies.

## Running the Development Server

After installation is complete, start the development server:

```powershell
npm run dev
```

The website will be available at: http://localhost:5173

## Building for Production

To create a production build:

```powershell
npm run build
```

The built files will be in the `dist` folder.

## Preview Production Build

To preview the production build locally:

```powershell
npm run preview
```

---

## Troubleshooting

If you encounter any issues:

1. Make sure Node.js is properly installed
2. Delete `node_modules` folder and `package-lock.json` file
3. Run `npm install` again
4. If port 5173 is already in use, Vite will automatically use the next available port

---

🟢 **Stay dark, stay ethical. Upgrade yourself!** 🟢