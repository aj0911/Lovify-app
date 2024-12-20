import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const fsp = (percentage) => responsiveFontSize(percentage);
export const hp = (percentage) => responsiveHeight(percentage);
export const wp = (percentage) => responsiveWidth(percentage);

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
