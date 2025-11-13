<div align="center">
  <h3 align="center">SnapGram - A Modern Social Media App</h3>
  <p align="center">
    A full-stack social media application with web and mobile support built with React, Capacitor, and Appwrite.
  </p>
</div>

## 📋 Table of Contents

1. [🤖 Introduction](#introduction)
2. [⚙️ Tech Stack](#tech-stack)
3. [✨ Features](#features)
4. [🚀 Quick Start](#quick-start)
5. [📱 Mobile Development](#mobile-development)
6. [🔧 Configuration](#configuration)
7. [📄 License](#license)

## 🤖 Introduction

SnapGram is a modern social media platform that allows users to share moments, connect with friends, and explore content. Built with a focus on performance and user experience, it offers a responsive design that works seamlessly across web and mobile platforms.

Key aspects:
- 🖥️ **Progressive Web App** with offline capabilities
- 📱 **Native Mobile App** using Capacitor
- ⚡ **Real-time** updates and interactions
- 🔒 **Secure Authentication** with Appwrite
- 🎨 **Beautiful UI** with Tailwind CSS and Shadcn components

## ⚙️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **UI Components**: Shadcn UI (Radix UI + Tailwind CSS)
- **State Management**: React Query v4
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Drag & Drop**: React Dropzone

### Backend (Appwrite)
- **Authentication**: User management, OAuth, JWT
- **Database**: Appwrite Database
- **Storage**: File uploads and management
- **Realtime**: Live updates and notifications

### Mobile
- **Framework**: Capacitor 7
- **Platforms**:
  - Android
  - iOS (requires macOS for development)

### Development Tools
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier
- **Styling**: Tailwind CSS with custom theming
- **Type Checking**: TypeScript

## <a name="features">🔋 Features</a>

👉 **Authentication System**: A robust authentication system ensuring security and user privacy

👉 **Explore Page**: Homepage for users to explore posts, with a featured section for top creators

👉 **Like and Save Functionality**: Enable users to like and save posts, with dedicated pages for managing liked and saved content

👉 **Detailed Post Page**: A detailed post page displaying content and related posts for an immersive user experience

👉 **Profile Page**: A user profile page showcasing liked posts and providing options to edit the profile

👉 **Browse Other Users**: Allow users to browse and explore other users' profiles and posts

👉 **Create Post Page**: Implement a user-friendly create post page with effortless file management, storage, and drag-drop feature

👉 **Edit Post Functionality**: Provide users with the ability to edit the content of their posts at any time

👉 **Responsive UI with Bottom Bar**: A responsive UI with a bottom bar, enhancing the mobile app feel for seamless navigation

👉 **React Query Integration**: Incorporate the React Query (Tanstack Query) data fetching library for, Auto caching to enhance performance, Parallel queries for efficient data retrieval, First-class Mutations, etc

👉 **Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service solution for streamlined backend development, offering features like authentication, database, file storage, and more

and many more, including code architecture and reusability 

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v8 or later)
- [Git](https://git-scm.com/)
- [Appwrite](https://appwrite.io/) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fotsopliya/ISOC_dev_mobile.git
   cd ISOC_dev_mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_STORAGE_ID=your_storage_id
   VITE_APPWRITE_USER_COLLECTION_ID=users
   VITE_APPWRITE_POST_COLLECTION_ID=posts
   VITE_APPWRITE_SAVES_COLLECTION_ID=saves
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Mobile Development

### Prerequisites
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- [Capacitor CLI](https://capacitorjs.com/docs/getting-started) (installed globally)

### Running on Android

1. **Sync Android project**
   ```bash
   npx cap sync android
   ```

2. **Open in Android Studio**
   ```bash
   npx cap open android
   ```

3. **Run on device/emulator**
   - Use Android Studio to run the app
   - Or use the CLI:
     ```bash
     npx cap run android
     ```

### Running on iOS (macOS only)

1. **Sync iOS project**
   ```bash
   npx cap sync ios
   ```

2. **Open in Xcode**
   ```bash
   npx cap open ios
   ```

3. **Run on simulator/device** through Xcode

## 🔧 Configuration

### App Configuration
Edit `capacitor.config.ts` to configure app settings like app ID and name:

```typescript
const config: CapacitorConfig = {
  appId: 'com.snapgram.app',
  appName: 'snapgram',
  webDir: 'dist',
  // ... other options
};
```

### Environment Variables
All environment variables should be prefixed with `VITE_` to be accessible in the Vite application.

