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

import onboarding_1 from '../../assets/onboarding_1.png'
import onboarding_2 from '../../assets/onboarding_2.png'
import onboarding_3 from '../../assets/onboarding_3.png'

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
  _primary_color: "#FE3FA5",
  _secondary_color: "#ffffff",
  _main_text_color: "#000000",
  _text_color_1: "#595959",
  _primary_color_1: "#FFF0F7",
  _primary_color_2: "#FE85C9",
};

export const ONBOARDING_DATA = [
  {
    title: "Welcome to Lovify - Where Love Meets AI!",
    desc: "Discover a new way to connect with Lovify. The AI Dating App that revolutionizes the way you find love. Get started now!",
    img:onboarding_1
  },
  {
    title: "Meet Your Match from a World of Possibilities",
    desc: "Dive into a diverse of AI characters waiting to meet you. Swipe through profiles, chat and discover personalities that resonate with you.",
    img:onboarding_2
  },
  {
    title: "Unlock Premium, Explore More Benifits",
    desc: "Unlock exclusive benifits to supercharge your dating journey. Gain access to unlimited chats, swipes and premium contents.",
    img:onboarding_3
  },
];
