import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.health9ja.app",
  appName: "health9ja",
  // webDir: "public",
  webDir: "out",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Adjust as needed
      backgroundColor: "#ffffff", // Set to match your splash screen background
      androidSplashResourceName: "splash",
      showSpinner: false,
    },
  },
};

export default config;
