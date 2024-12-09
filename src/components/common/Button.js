import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

const Button = ({ title,onPress=()=>{}, width, color, backgroundColor, style }) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        backgroundColor,
        padding: scale(15),
        width,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color, fontSize: scale(14), fontFamily: "_600" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
