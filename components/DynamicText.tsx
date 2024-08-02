import { Text, TextStyle } from 'react-native';
import React from 'react';
import Fonts from '@/constants/Fonts';

/**
 * Props for the DynamicText component.
 * @property {string | number} value - The text to be displayed.
 * @property {TextStyle} [textStyle] - Optional custom style to be applied to the text.
 * @property {'D-lg' | 'D-md' | 'D-sm' | 'D-xs' | 'Text-xl' | 'Text-lg' | 'Text-md' | 'Text-small' | 'Text-xs'} [variant='Text-md'] - The variant of the text which determines its style.
 * @property {TextStyle['fontWeight']} [weight] - Optional font weight for the text.
 */
type TextProps = {
  value: string | number;
  textStyle?: TextStyle;
  variant?:
    | 'D-lg'
    | 'D-md'
    | 'D-sm'
    | 'D-xs'
    | 'Text-xl'
    | 'Text-lg'
    | 'Text-md'
    | 'Text-small'
    | 'Text-xs';
  weight?: TextStyle['fontWeight'];
};

/**
 * Mapping for text styles based on variant prop.
 */
const variantStyles: Record<string, TextStyle> = {
  'D-lg': {
    fontSize: Fonts.size.font48,
    lineHeight: 60,
  },
  'D-md': {
    fontSize: Fonts.size.font36,
    lineHeight: 44,
  },
  'D-sm': {
    fontSize: Fonts.size.font30,
    lineHeight: 38,
  },
  'D-xs': {
    fontSize: Fonts.size.font24,
    lineHeight: 32,
  },
  'Text-xl': {
    fontSize: Fonts.size.font20,
    lineHeight: 30,
  },
  'Text-lg': {
    fontSize: Fonts.size.font18,
    lineHeight: 28,
  },
  'Text-md': {
    fontSize: Fonts.size.font16,
    lineHeight: 24,
  },
  'Text-small': {
    fontSize: Fonts.size.font14,
    lineHeight: 20,
  },
  'Text-xs': {
    fontSize: Fonts.size.font12,
    lineHeight: 18,
  },
};

/**
 * A functional component that renders text with customizable styles and behavior.
 *
 * @param {TextProps} props - The props for the component.
 * @returns {JSX.Element} The rendered dynamic text component.
 */
export const DynamicText: React.FC<TextProps> = ({
  value,
  variant = 'Text-md',
  weight,
  textStyle,
}) => {
  // Combine styles based on the provided props
  const combinedStyle = [variantStyles[variant], weight && { fontWeight: weight }, textStyle];
  return <Text style={combinedStyle}>{value}</Text>;
};

export default DynamicText;
