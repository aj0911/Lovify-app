import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fsp, hp, wp } from "../../utils/helper";

const Button = ({
  title,
  onPress = () => {},
  width,
  color,
  backgroundColor,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        padding: hp(2),
        width,
        borderRadius: wp(100),
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      onPress={onPress}
    >
      <Text
        style={{ color, fontSize: fsp(2), fontFamily: "_500", ...textStyle }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
