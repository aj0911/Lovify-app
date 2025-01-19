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

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
