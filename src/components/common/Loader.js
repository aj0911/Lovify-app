import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { COLORS } from "../../utils/constants";

const Loader = ({ style, size, color }) => {

  return (
    <View style={[styles.container, style, { width:size, height:size }]}>
      <LottieView
      autoPlay
      loop
      speed={1}
      source={require("../../../assets/loader.json")}
      style={{
        width: size,
        height: size,
      }}
      colorFilters={[
        {
          keypath: "Shape Layer 1.Stroke 1", // Path to the stroke element
          color // Set the desired color
        },
      ]}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
