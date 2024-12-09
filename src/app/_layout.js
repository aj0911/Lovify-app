import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Splash from "../components/extra/Splash";
import useFonts from "../hooks/useFonts";
import SafeArea from "../components/common/SafeArea";
import { COLORS } from "../utils/constants";
import OnBoardingScreen from "../screens/onboarding/OnBoardingScreen";

export default function Page() {
  const appReady = useFonts(); //custom hook takes splash screen

  if (!appReady)
    return (
      <SafeArea backgroundColor={COLORS._primary_color}>
        <Splash />
      </SafeArea>
    );

  return (
      <OnBoardingScreen />
    // <SafeArea backgroundColor={COLORS._primary_color}>
    // </SafeArea>
  );
}
