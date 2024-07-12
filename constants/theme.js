import { Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
import { getStatusBarHeight } from "react-native-status-bar-height";

const windowDimensions = Dimensions.get("window");
const statusBarHeight = getStatusBarHeight();
const height =
  Platform.OS === "android"
    ? windowDimensions.height + statusBarHeight + 40
    : windowDimensions.height - statusBarHeight;

const COLORS = {
  primary: "#30b9b2",
  primary1: "#00fff53c",

  secondary: "#ffa44f",
  secondary1: "#ffe5db",
  tertiary: "#0078a6",

  gray: "#E0E0E0",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
  blue: "blue",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };