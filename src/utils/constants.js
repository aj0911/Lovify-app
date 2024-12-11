import {
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";

import onboarding_1 from "../../assets/onboarding_1.png";
import onboarding_2 from "../../assets/onboarding_2.png";
import onboarding_3 from "../../assets/onboarding_3.png";

export const FONTS = {
  _100: Lexend_100Thin,
  _200: Lexend_200ExtraLight,
  _300: Lexend_300Light,
  _400: Lexend_400Regular,
  _500: Lexend_500Medium,
  _600: Lexend_600SemiBold,
  _700: Lexend_700Bold,
  _800: Lexend_800ExtraBold,
  _900: Lexend_900Black,
};

export const COLORS = {
  // for light theme
  _primary_color: "#FE3FA5",
  _secondary_color: "#ffffff",
  _main_text_color: "#000000",
  _text_color_1: "#595959",
  _primary_color_1: "#FFF0F7",
  _primary_color_2: "#FE85C9",

  // for dark theme
  // _primary_color: "#FE3FA5",
  // _secondary_color: "#191A1F",
  // _main_text_color: "#ffffff",
  // _text_color_1: "#EFF0F6",
  // _primary_color_1: "#20222B",
  // _primary_color_2: "#FE85C9",
};

export const ONBOARDING_DATA = [
  {
    title: "Welcome to Lovify - Where Love Meets AI!",
    desc: "Discover a new way to connect with Lovify. The AI Dating App that revolutionizes the way you find love. Get started now!",
    img: onboarding_1,
  },
  {
    title: "Meet Your Match from a World of Possibilities",
    desc: "Dive into a diverse of AI characters waiting to meet you. Swipe through profiles, chat and discover personalities that resonate with you.",
    img: onboarding_2,
  },
  {
    title: "Unlock Premium, Explore More Benifits",
    desc: "Unlock exclusive benifits to supercharge your dating journey. Gain access to unlimited chats, swipes and premium contents.",
    img: onboarding_3,
  },
];

export const ICON_PATHS = {
  google: {
    viewBox: "0 0 256 256",
    paths: [
      {
        d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
        fill: "#4285F4",
      },
      {
        d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
        fill: "#34A853",
      },
      {
        d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
        fill: "#FBBC05",
      },
      {
        d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
        fill: "#EB4335",
      },
    ],
  },
  facebook: {
    viewBox: "0 0 1024 1024",
    paths: [
      {
        d: "M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z",
        fill: "#1877F2",
      },
      {
        d: "M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z",
        fill: "#fff",
      },
    ],
  },
  twitterX: {
    viewBox: "0 0 1668.56 1221.19",
    paths: [
      {
        d: "M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z",
        fill: "#1DA1F2",
      },
    ],
  },
  apple: {
    viewBox: "0 0 40 40",
    paths: [
      {
        d: "M21.3,6.6C23.3,4,26,4,26,4s0.4,2.5-1.5,4.8C22.4,11.4,20,11,20,11S19.6,9,21.3,6.6z M14.7,12.1C11,12.1,7,15.4,7,21.7C7,28.1,11.7,36,15.4,36c1.3,0,3.3-1.3,5.3-1.3c2,0,3.4,1.2,5.3,1.2c4.1,0,7.1-8.4,7.1-8.4s-4.3-1.6-4.3-6.4c0-4.2,3.4-6,3.4-6S30.4,12,25.9,12c-2.6,0-4.6,1.5-5.7,1.5C19,13.5,17.1,12.1,14.7,12.1z",
        fill: "#000",
      },
    ],
  },
};
