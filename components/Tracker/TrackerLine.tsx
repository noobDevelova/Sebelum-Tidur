import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { Colors } from '@/constants/Colors';

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
 * Props for the TrackerLine component.
 * @property {ActiveStatus} isActive - The active status of the line, determining its appearance.
 */
type LineProps = {
  isActive: ActiveStatus;
};

/**
 * Styles for active and inactive lines.
 */
const lineStyle: Record<ActiveStatus, ViewStyle> = {
  [ActiveStatus.Active]: {
    backgroundColor: Colors['light'].tint,
  },
  [ActiveStatus.InActive]: {
    backgroundColor: Colors['light'].lineDisabled,
  },
};

/**
 * A functional component that represents a tracker line with customizable active status.
 *
 * @param {LineProps} props - The props for the component.
 * @returns {JSX.Element} The rendered tracker line component.
 */
const TrackerLine: React.FC<LineProps> = ({ isActive }) => {
  // Render the tracker line with combined styles based on active status
  return <View style={[styles.baseLine, lineStyle[isActive]]} />;
};

/**
 * Default styles for the tracker line.
 */
const styles = StyleSheet.create({
  baseLine: {
    height: 2,
    width: 54,
  },
});

export default memo(TrackerLine);
