import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Easing } from "react-native";
import { COLORS } from "../../utils/constants";

const Loader = ({ style, width = 100, height = 100 }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing:Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={[styles.container, style, { width, height }]}>
      <Animated.View
        style={{
          width,
          height: width, // Maintain a square shape
          borderBottomColor: COLORS._secondary_color,
          borderColor: COLORS._primary_color,
          borderWidth: 4,
          borderRadius: width / 2, // Ensures it's circular
          transform: [{ rotate: spin }], // Apply spinning animation
        }}
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
