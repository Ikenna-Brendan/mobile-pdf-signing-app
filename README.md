# Mobile PDF Signing App 📱📄

A responsive web application for uploading PDFs, simulating digital signing, and viewing signed documents on mobile devices. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Features

- 📱 **Mobile-First Design**: Responsive layout optimized for touch devices
- 📄 **PDF Upload & Validation**: Secure file selection with PDF type checking
- ✍️ **Mock Digital Signing**: Simulated server-side signing with loading states
- 👁️ **PDF Viewer**: Embedded browser-based PDF display
- 🏗️ **Object-Oriented Architecture**: PDFSigningApp class implementing OOP principles
- 🔄 **Reusable Component Library**: Modular Button, PDFUploader, PDFViewer, and LoadingSpinner components
- 🎨 **Modern UI**: Glassmorphism design with gradient backgrounds and animations
- ⚡ **Fast Development**: Hot reload and optimized builds with Vite
- 🔒 **Type Safety**: Full TypeScript implementation with comprehensive interfaces
- 📦 **Component Composition**: Clean separation between business logic and UI

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with Hooks and functional components
- **Architecture**: Object-Oriented Programming with class-based business logic
- **Language**: TypeScript with comprehensive interface definitions
- **Component Design**: Reusable component library with composition patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Modern CSS with Flexbox, Grid, animations, and CSS custom properties
- **Code Quality**: ESLint with React-specific rules and TypeScript strict mode
- **State Management**: React useState hooks with controlled component communication

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ikenna-Brendan/mobile-pdf-signing-app.git
   cd mobile-pdf-signing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📱 Usage

1. **Select PDF**: Click the "Select PDF" button to choose a PDF file from your device
2. **Upload & Sign**: Click "Upload & Sign" to simulate the signing process (2-second delay)
3. **View Signed PDF**: The signed document displays in the embedded viewer
4. **Upload Another**: Reset the app to process additional documents

## 🏗️ Project Structure

```
mobile-pdf-signing-app/
├── public/
│   ├── vite.svg
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── PDFUploader.tsx # PDF upload interface
│   │   ├── PDFViewer.tsx   # PDF display component
│   │   └── LoadingSpinner.tsx # Loading indicator
│   ├── App.tsx             # Main application with OOP class
│   ├── App.css             # Application styles
│   ├── main.tsx            # React entry point
│   ├── types.ts            # TypeScript interfaces
│   ├── index.css           # Global styles (Vite default)
│   └── assets/
│       └── react.svg
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Build configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # Linting configuration
└── README.md              # This file
```

## 🎯 Development Highlights

This project demonstrates advanced frontend development practices:

- **Object-Oriented Architecture**: PDFSigningApp class with encapsulation, abstraction, and single responsibility principles
- **Component Reusability**: Modular component library (Button, PDFUploader, PDFViewer, LoadingSpinner) for scalable development
- **TypeScript Excellence**: Comprehensive interface definitions and type safety throughout the application
- **Component Composition**: Clean separation between business logic and UI presentation layers
- **Professional State Management**: Centralized state management with controlled component communication
- **Responsive Design**: Mobile-first approach with CSS media queries and touch-optimized interactions
- **Performance Optimization**: Efficient rendering, minimal bundle size, and optimized build process
- **Code Quality**: ESLint configuration with React-specific rules and TypeScript strict mode

### 🏛️ Architecture Principles Demonstrated

**Object-Oriented Design:**
- **Encapsulation**: Private methods and properties in PDFSigningApp class
- **Single Responsibility**: Each component and method has one clear purpose
- **Abstraction**: Complex file processing hidden behind simple interfaces
- **Composition over Inheritance**: Component composition patterns

**React Best Practices:**
- **Functional Components**: Modern React patterns with TypeScript
- **Props Interface**: Strongly typed component communication
- **State Management**: Controlled state flow with immutable updates
- **Performance**: Optimized re-renders and efficient component lifecycle

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🔮 Future Enhancements

- Real API integration for actual PDF signing
- Multiple file upload support
- User authentication and session management
- PDF annotation and markup tools
- Cloud storage integration
- Progressive Web App (PWA) capabilities

## 🤝 Contributing

This project showcases modern React and TypeScript development practices suitable for production applications. The codebase follows industry standards for:

- Code organization and structure
- Type safety and error prevention
- Responsive and accessible design
- Performance optimization
- Developer experience

## 📄 License

This project is created for demonstration purposes in job applications and portfolio showcases.

---

Built with ❤️ using React, TypeScript, and Vite
