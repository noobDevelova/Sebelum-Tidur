import { View, ViewStyle } from 'react-native';
import React from 'react';

/**
 * Props for the Container component.
 * @property {React.ReactNode} children - The content to be displayed inside the container.
 * @property {ViewStyle} [style] - Optional custom style to be applied to the container.
 * @property {'row' | 'column'} [variant='row'] - The layout direction of the container's children.
 * @property {number} [gap=0] - The gap between the container's children.
 * @property {'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'} [position='center'] - The alignment of the container's children along the main axis.
 * @property {number} [marginTop=0] - The top margin of the container.
 * @property {number} [marginHorizontal=0] - The horizontal margin of the container.
 * @property {number} [marginBottom=0] - The bottom margin of the container.
 */
type ContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'row' | 'column';
  gap?: number;
  backgroundColor?: string;
  position?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  marginTop?: number;
  marginHorizontal?: number;
  marginBottom?: number;
};

/**
 * A container component that arranges its children with customizable layout direction, alignment, and spacing.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered container component.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  variant = 'row',
  gap = 0,
  position = 'center',
  marginTop = 0,
  marginHorizontal = 0,
  marginBottom = 0,
}) => {
  // Combine styles based on the provided props
  const containerStyle: ViewStyle = {
    flexDirection: variant === 'row' ? 'row' : 'column',
    gap: gap,
    justifyContent: position,
    marginTop: marginTop,
    marginHorizontal: marginHorizontal,
    marginBottom: marginBottom,
  };

  // Render the container with combined styles and children
  return <View style={[containerStyle, style]}>{children}</View>;
};
