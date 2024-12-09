import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/constants";
import { scale } from "react-native-size-matters";
import Loader from "../common/Loader";

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS._primary_color,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          flex:1
        }}
      >
        <Image
          style={{ width: scale(80), height: scale(80), objectFit: "cover" }}
          source={require("../../../assets/logo-white.png")}
        />
        <Text
          style={{
            fontSize: scale(30),
            fontFamily: "_700",
            color: COLORS._secondary_color,
          }}
        >
          Lovify
        </Text>
      </View>
      <Loader style={{position:'absolute',
        bottom:scale(30)
      }} width={scale(50)} height={scale(50)}/>
    </View>
  );
};

export default Splash;
