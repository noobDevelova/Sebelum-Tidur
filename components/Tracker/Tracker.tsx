import React from 'react';
import { Container } from '../Containers/Container';
import TrackerPoint from './TrackerPoint';
import TrackerLine from './TrackerLine';

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
 * Props for the Tracker component.
 * @property {ActiveStatus} isActivePoint1 - The active status of the first tracker point.
 * @property {ActiveStatus} isActivePoint2 - The active status of the second tracker point and line.
 * @property {ActiveStatus} isActivePoint3 - The active status of the third tracker point.
 */
type TrackerProps = {
  isActivePoint1: ActiveStatus;
  isActivePoint2: ActiveStatus;
  isActivePoint3: ActiveStatus;
};

/**
 * A functional component that represents a tracker with three points and two connecting lines.
 *
 * @param {TrackerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered tracker component.
 */
const Tracker: React.FC<TrackerProps> = ({ isActivePoint1, isActivePoint2, isActivePoint3 }) => {
  return (
    <Container variant="row" position="center" style={{ alignItems: 'center' }}>
      <TrackerPoint value="1" isActive={isActivePoint1} />
      <TrackerLine isActive={isActivePoint2} />
      <TrackerPoint value="2" isActive={isActivePoint2} />
      <TrackerLine isActive={isActivePoint3} />
      <TrackerPoint value="3" isActive={isActivePoint3} />
    </Container>
  );
};

export default Tracker;
