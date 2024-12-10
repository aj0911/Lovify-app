import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/constants";
import Loader from "../common/Loader";
import { fsp, hp, wp } from "../../utils/helper";

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS._primary_color,
        width:wp(100)
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: hp(2),
          flex: 1,
          width:'100%'
        }}
      >
        <Image
          style={{ width: wp(30), height:hp(15),objectFit: "contain" }}
          source={require("../../../assets/logo-white.png")}
        />
        <Text
          style={{
            fontSize: fsp(3.5),
            fontFamily: "_500",
            color: COLORS._secondary_color,
          }}
        >
          Lovify
        </Text>
      </View>
      <Loader
        style={{ position: "absolute", bottom: hp(5) }}
        width={hp(7)}
        height={hp(7)}
      />
    </View>
  );
};

export default Splash;
