import React from 'react';
import { StyleSheet, View, Text, ViewStyle, StyleProp } from 'react-native';
import Constants from 'expo-constants';

/**
 * Props for the MainContainer component.
 * @property {React.ReactNode} children - The content to be displayed inside the container.
 * @property {StyleProp<ViewStyle>} [style] - Optional custom style to be applied to the container.
 * @property {string} [backgroundColor] - Optional background color for the container.
 */
type MainContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
};

/**
 * A container component that wraps its children with a customizable background color and style.
 *
 * @param {MainContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered container component.
 */
export const MainContainer: React.FC<MainContainerProps> = ({
  children,
  style,
  backgroundColor,
}) => {
  // Combine default styles with the optional backgroundColor prop
  const containerStyle: ViewStyle = {
    ...styles.container,
    backgroundColor: backgroundColor,
  };

  // Render the container with combined styles and children
  return <View style={[containerStyle, style]}>{children}</View>;
};

// Define default styles for the container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
});
