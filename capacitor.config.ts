import type { CapacitorConfig } from '@capacitor/cli';

const isDev = process.env.NODE_ENV === 'development';

const config: CapacitorConfig = {
  appId: 'com.snapgram.app',
  appName: 'snapgram',
  webDir: 'dist',
  ...(isDev && {
    server: {
      url: 'http://192.168.100.20:3000',   // Your dev machine’s LAN IP and port
      cleartext: true                      // allow HTTP (not HTTPS) on device/emulator
    }
  })
};

export default config;
