import { View, Text } from "react-native";
import React from "react";
import Loader from "../../components/common/Loader";
import { fsp, hp, wp } from "../../utils/helper";
import { BlurView } from "expo-blur";
import { COLORS } from "../../utils/constants";

const LoadingScreen = ({ loaderSize, text, fontSize = fsp(2.5) }) => {
  return (
    <BlurView
      intensity={10}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: wp(100),
        height: hp(100),
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp(10),
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS._secondary_color,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: wp(5),
          paddingBottom: hp(4),
          borderRadius: fsp(1.5),
        }}
      >
        <Loader size={loaderSize} />
        <Text
          style={{
            color: COLORS._main_text_color,
            fontFamily: "_500",
            fontSize,
          }}
        >
          {text}
        </Text>
      </View>
    </BlurView>
  );
};

export default LoadingScreen;
