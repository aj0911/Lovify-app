import Splash from "../components/extra/Splash";
import useFonts from "../hooks/useFonts";
import SafeArea from "../components/common/SafeArea";
import { COLORS } from "../utils/constants";
import { Stack } from "expo-router";

export default function Layout() {
  const appReady = useFonts(); //custom hook takes splash screen

  if (!appReady)
    return (
      <SafeArea backgroundColor={COLORS._primary_color}>
        <Splash />
      </SafeArea>
    );
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)/login" options={{headerShown:false}}/>
    </Stack>
  );
}
