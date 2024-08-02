import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

/**
 * Custom hook to get a theme-specific color based on the current color scheme.
 *
 * This hook returns a color value based on the current color scheme (light or dark).
 * If a color is specified in the `props` for the current theme, it will be returned.
 * Otherwise, it falls back to the default color defined in the `Colors` object for the current theme.
 *
 * @param {Object} props - An object containing color values for light and dark themes.
 * @param {string} props.light - The color value for the light theme (optional).
 * @param {string} props.dark - The color value for the dark theme (optional).
 * @param {string} colorName - The key to access the color from the `Colors` object for the current theme.
 * @returns {string} - The color value for the current theme.
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // Get the current color scheme (light or dark)
  const theme = useColorScheme() ?? 'light';

  // Get the color from props based on the current theme
  const colorFromProps = props[theme];

  // Return the color from props if available, otherwise return the default color from the Colors object
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
