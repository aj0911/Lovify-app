import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Splash from "../components/extra/Splash";
import useFonts from "../hooks/useFonts";
import SafeArea from "../components/common/SafeArea";
import { COLORS } from "../utils/constants";

export default function Page() {
  const appReady = useFonts(); //custom hook takes splash screen

  if(!appReady)
  return (
    <SafeArea backgroundColor={COLORS._primary_color}>
      <Splash/>
    </SafeArea>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World </Text>
        <Text style={styles.subtitle}>So, this is the layout page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontFamily: "_500",
  },
  subtitle: {
    fontSize: 36,
    fontFamily: "_100",
    color: "#38434D",
  },
});
