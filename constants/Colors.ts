/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const primaryColor = '#6172F3';
const primary200 = '#C7D7FE';
const gray900 = '#101828';
const gray500 = '#667085';
const primary25 = '#F5F8FF';

export const Colors = {
  light: {
    textPrimary: gray900,
    textSecondary: primary25,
    textGray: gray500,
    background: '#FCFCFD',
    tint: primaryColor,
    tintDisabled: primary200,
    lineDisabled: '#C7D7FE',
    icon: '#687076',
    tabIconDefault: gray900,
    tabIconSelected: primaryColor,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
