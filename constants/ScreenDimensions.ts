import { Dimensions } from 'react-native';

// Get the dimensions of the device window
const { width, height } = Dimensions.get('window');

/**
 * Interface defining the screen metrics of the device.
 */
interface Metrics {
  screenWidth: number;
  screenHeight: number;
  width: number;
  height: number;
}

/**
 * Contains the dimensions of the device window, including
 * the screen width and height. The screen width and height
 * are calculated based on the smaller and larger values of
 * the window's width and height to account for device orientation.
 *
 * @constant
 * @type {Metrics}
 */
const metrics: Metrics = {
  // The smaller dimension of the device window, used as the screen width
  screenWidth: width < height ? width : height,

  // The larger dimension of the device window, used as the screen height
  screenHeight: width < height ? height : width,

  // The actual width of the device window
  width,

  // The actual height of the device window
  height,
};

export default metrics;
