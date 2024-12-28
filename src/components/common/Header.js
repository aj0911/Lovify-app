import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fsp, hp, wp } from "../../utils/helper";
import { COLORS } from "../../utils/constants";

const Header = ({
  title,
  LeftView = () => <View />,
  RightView = () => <View />,
  style={}
}) => {
  return (
    <View style={{
        width:'100%',
        paddingVertical:hp(2),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        gap:wp(2),
        ...style
    }}>
      <LeftView />
      <Text style={{
        fontFamily:"_600",
        fontSize:fsp(2.8),
        textAlign:'center',
        color:COLORS._main_text_color,
      }}>{title}</Text>
      <RightView />
    </View>
  );
};

export default Header;
