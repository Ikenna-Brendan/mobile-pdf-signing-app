# Frontend App Project Overview

This document provides an overview of the files in the Mobile PDF Upload & Sign App project, built with React, TypeScript, and Vite.

## Project Structure

```
frontend_app/
├── docs/
│   └── project-overview.md  # This file
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   └── react.svg
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## File Explanations

### `package.json`
This file defines the project metadata, dependencies, and scripts.

- Lines 1-6: Project name, version, type (module).
- Lines 7-11: Scripts for development, build, lint, preview.
- Lines 12-15: Runtime dependencies (React, React DOM).
- Lines 16-29: Development dependencies (TypeScript, ESLint, Vite plugins).

### `index.html`
The main HTML template.

- Line 1: HTML doctype.
- Lines 2-7: Head with title, meta tags for mobile responsiveness, favicon.
- Lines 8-12: Body with div#root for React mounting, script tag for main.tsx.

### `src/main.tsx`
Entry point for the React application.

- Line 1: Import React.
- Line 2: Import createRoot from react-dom/client.
- Line 3: Import App component.
- Line 4: Import App.css.
- Lines 5-7: Create root and render App component in strict mode.

### `src/App.tsx`
Main application component handling PDF upload, signing, and viewing.

- Lines 1-2: Imports for React hooks and CSS.
- Lines 4-10: State variables for file, signed PDF URL, loading, and file input ref.
- Lines 12-19: handleFileSelect function to validate and set selected PDF file.
- Lines 21-33: handleUpload function to simulate server signing with timeout.
- Lines 35-63: JSX return for upload or view sections, with buttons and iframe.

### `src/App.css`
Styles for the application, mobile-responsive.

- Lines 1-13: #root styles for centering and font.
- Lines 15-21: .app-container for layout.
- Lines 23-28: Flex layout for sections.
- Lines 30-39: Button styles.
- Lines 41-43: Button hover.
- Lines 45-47: Disabled button.
- Lines 49-53: Iframe styles.
- Lines 55-69: Mobile media query for responsive design.

### `vite.config.ts`
Vite configuration.

- Line 1: Import defineConfig and react plugin.
- Lines 2-4: Export config with react plugin.

### `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
TypeScript configurations for different parts.

- `tsconfig.json`: Base config.
- `tsconfig.app.json`: For app code.
- `tsconfig.node.json`: For Node.js tools.

### `eslint.config.js`
ESLint configuration for code linting.

- Imports and rules for React, TypeScript.

### `public/vite.svg`, `src/assets/react.svg`
SVG icons for Vite and React logos (not used in current app).

### `.gitignore`
Git ignore file (standard Vite template).
