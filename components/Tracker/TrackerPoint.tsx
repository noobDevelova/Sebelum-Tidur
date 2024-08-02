import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { Colors } from '@/constants/Colors';
import DynamicText from '../DynamicText';

/**
 * Enumeration for active status.
 * @readonly
 * @enum {string}
 */
enum ActiveStatus {
  Active = 'active',
  InActive = 'inActive',
}

/**
 * Props for the TrackerPoint component.
 * @property {string} value - The text value to be displayed inside the point.
 * @property {ViewStyle} [style] - Optional custom style to be applied to the point.
 * @property {ActiveStatus} [isActive=ActiveStatus.Active] - The active status of the point, determining its appearance.
 */
type PointProps = {
  value: string;
  style?: ViewStyle;
  isActive?: ActiveStatus;
};

/**
 * Styles for active and inactive points.
 */
const isActivePoint: Record<ActiveStatus, ViewStyle> = {
  [ActiveStatus.Active]: {
    backgroundColor: Colors['light'].tint,
    borderColor: Colors['light'].tint,
  },
  [ActiveStatus.InActive]: {
    backgroundColor: 'transparent',
    borderColor: Colors['light'].tint,
  },
};

/**
 * Text styles for active and inactive points.
 */
const pointTextColor: Record<ActiveStatus, TextStyle> = {
  [ActiveStatus.Active]: {
    color: Colors['light'].textSecondary,
  },
  [ActiveStatus.InActive]: {
    color: Colors['light'].tint,
  },
};

/**
 * A functional component that represents a tracker point with customizable text and active status.
 *
 * @param {PointProps} props - The props for the component.
 * @returns {JSX.Element} The rendered tracker point component.
 */
const TrackerPoint: React.FC<PointProps> = ({ value, isActive = ActiveStatus.Active, style }) => {
  const textColor = pointTextColor[isActive];
  const pointStyle = isActivePoint[isActive];

  // Render the tracker point with combined styles and text
  return (
    <View style={[styles.basePoint, pointStyle, style]}>
      <DynamicText value={value} variant="Text-small" weight="regular" textStyle={textColor} />
    </View>
  );
};

/**
 * Default styles for the tracker point.
 */
const styles = StyleSheet.create({
  basePoint: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    borderWidth: 1,
  },
});

export default memo(TrackerPoint);
