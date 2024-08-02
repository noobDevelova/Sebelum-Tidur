import Metrics from './ScreenDimensions';

/**
 * Defines the font sizes used throughout the application.
 */
type FontSizes = {
  font10: number;
  font12: number;
  font14: number;
  font16: number;
  font18: number;
  font20: number;
  font22: number;
  font24: number;
  font26: number;
  font28: number;
  font30: number;
  font32: number;
  font34: number;
  font36: number;
  font38: number;
  font40: number;
  font42: number;
  font44: number;
  font46: number;
  font48: number;
};

/**
 * Calculates the font sizes based on the screen width.
 *
 * @constant
 * @type {FontSizes}
 */
const size: FontSizes = {
  font10: Metrics.screenWidth * (10 / 375),
  font12: Metrics.screenWidth * (12 / 375),
  font14: Metrics.screenWidth * (14 / 375),
  font16: Metrics.screenWidth * (16 / 375),
  font18: Metrics.screenWidth * (18 / 375),
  font20: Metrics.screenWidth * (20 / 375),
  font22: Metrics.screenWidth * (22 / 375),
  font24: Metrics.screenWidth * (24 / 375),
  font26: Metrics.screenWidth * (26 / 375),
  font28: Metrics.screenWidth * (28 / 375),
  font30: Metrics.screenWidth * (30 / 375),
  font32: Metrics.screenWidth * (32 / 375),
  font34: Metrics.screenWidth * (34 / 375),
  font36: Metrics.screenWidth * (36 / 375),
  font38: Metrics.screenWidth * (38 / 375),
  font40: Metrics.screenWidth * (40 / 375),
  font42: Metrics.screenWidth * (42 / 375),
  font44: Metrics.screenWidth * (44 / 375),
  font46: Metrics.screenWidth * (46 / 375),
  font48: Metrics.screenWidth * (48 / 375),
};

export default { size };
