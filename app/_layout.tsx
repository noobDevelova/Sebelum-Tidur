import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevents the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

/**
 * RootLayout component sets up the navigation and theme for the application.
 *
 * It handles the following:
 * - Loads custom fonts using `expo-font`.
 * - Displays a splash screen until the fonts are loaded.
 * - Applies a theme based on the current color scheme.
 * - Configures navigation with the `Stack` from `expo-router`.
 *
 * @returns {JSX.Element | null} - The rendered RootLayout component or null if fonts are not yet loaded.
 */
export default function RootLayout() {
  // Get the current color scheme (light or dark)
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Mulish-Regular.ttf'),
  });

  useEffect(() => {
    // Hide splash screen when fonts are loaded
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Render nothing while fonts are loading
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
