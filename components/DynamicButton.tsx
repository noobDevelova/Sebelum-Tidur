import {
  ViewStyle,
  StyleSheet,
  Pressable,
  TextStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DynamicText from './DynamicText';
import { Link, router } from 'expo-router';
import { Colors } from '@/constants/Colors';

/**
 * Props for the DynamicButton component.
 * @property {string} title - The text to be displayed on the button.
 * @property {'primary' | 'secondary'} [variant='primary'] - The variant of the button which determines its style.
 * @property {boolean} [active=true] - If true, the button is clickable; otherwise, it is disabled.
 * @property {() => void} [onPress] - Optional callback function to be called when the button is pressed.
 * @property {string} [screenName] - Optional screen name to navigate to when the button is pressed.
 * @property {'lg' | 'sm'} [size='lg'] - The size of the button.
 * @property {ViewStyle} [style] - Optional custom style to be applied to the button.
 */
type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  active?: boolean;
  onPress?: () => void;
  screenName?: string;
  size?: 'lg' | 'sm';
  style?: ViewStyle;
};

/**
 * Mapping for text size based on button size.
 */
const textButtonSize: Record<string, 'Text-md' | 'Text-xs'> = {
  lg: 'Text-md',
  sm: 'Text-xs',
};

/**
 * Mapping for button size styles based on size prop.
 */
const buttonSize: Record<string, ViewStyle> = {
  lg: {
    paddingVertical: 10,
  },
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
};

/**
 * Mapping for button variant styles.
 */
const buttonVariant: Record<string, ViewStyle> = {
  primary: {
    backgroundColor: Colors['light'].tint,
    borderWidth: 1,
    borderColor: Colors['light'].tint,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors['light'].tint,
  },
  primaryDisabled: {
    backgroundColor: Colors['light'].tintDisabled,
    borderColor: Colors['light'].tintDisabled,
  },
  secondaryDisabled: {
    backgroundColor: 'transparent',
    borderColor: Colors['light'].tintDisabled,
  },
};

/**
 * Mapping for text color styles based on button variant.
 */
const textColorVariant: Record<string, TextStyle> = {
  primary: {
    color: Colors['light'].textSecondary,
  },
  secondary: {
    color: Colors['light'].tint,
  },
  primaryDisabled: {
    color: Colors['light'].textSecondary,
  },
  secondaryDisabled: {
    color: Colors['light'].tintDisabled,
  },
};

/**
 * A functional component that renders a dynamic button with customizable styles and behavior.
 *
 * @param {ButtonProps} props - The props for the component.
 * @returns {JSX.Element} The rendered dynamic button component.
 */
export const DynamicButton: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  active = true,
  onPress,
  size = 'lg',
  screenName,
  style,
}) => {
  // Combine styles based on the provided props
  const buttonStyle: StyleProp<ViewStyle> = [
    styles.baseButton,
    buttonVariant[variant],
    buttonSize[size],
    !active && buttonVariant[`${variant}Disabled`],
    style,
  ];
  const textSize = textButtonSize[size];
  const textColor = textColorVariant[active ? variant : `${variant}Disabled`];

  // Handle button press event
  const handlePress = () => {
    if (screenName) {
      router.push(screenName);
    } else if (onPress) {
      onPress();
    }
  };

  // Render the button with combined styles and text
  return (
    <TouchableOpacity style={buttonStyle} disabled={!active} onPress={handlePress}>
      <DynamicText value={title} variant={textSize} weight="bold" textStyle={textColor} />
    </TouchableOpacity>
  );
};

/**
 * Default styles for the dynamic button.
 */
const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
