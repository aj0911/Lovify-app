import Splash from "../components/extra/Splash";
import useFonts from "../hooks/useFonts";
import SafeArea from "../components/common/SafeArea";
import { COLORS } from "../utils/constants";
import { Stack } from "expo-router";
import Toast, { BaseToast } from "react-native-toast-message";
import { fsp, hp, wp } from "../utils/helper";

export default function Layout() {
  const appReady = useFonts(); //custom hook takes splash screen
  // Toast Config
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          top: hp(3),
          borderLeftColor: COLORS._primary_color,
          backgroundColor: COLORS._secondary_color,
        }}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        text1Style={{
          fontFamily: "_600",
          color: COLORS._main_text_color,
          fontSize: fsp(2),
        }}
        text2Style={{
          fontFamily: "_400",
          color: COLORS._text_color_1,
          fontSize: fsp(1.5),
        }}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{
          top: hp(3),
          borderLeftColor: COLORS._warn_color,
          backgroundColor: COLORS._secondary_color,
        }}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        text1Style={{
          fontFamily: "_600",
          color: COLORS._main_text_color,
          fontSize: fsp(2),
        }}
        text2Style={{
          fontFamily: "_400",
          color: COLORS._text_color_1,
          fontSize: fsp(1.5),
        }}
      />
    ),
  };

  if (!appReady)
    return (
      <SafeArea backgroundColor={COLORS._primary_color}>
        <Splash />
      </SafeArea>
    );
  return (
    <>
      {/* Navigation stack */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/starting" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/forgot" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/otp" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/updatepassword"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* Toast component outside of the Stack */}
      <Toast config={toastConfig} />
    </>
  );
}
