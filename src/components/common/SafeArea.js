import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fsp, hp, wp } from "../../utils/helper";
import { useRouter } from "expo-router";

const SafeArea = ({
  children,
  backgroundColor = COLORS._secondary_color,
  backBtnShown = false,
}) => {

  // States
  const router = useRouter();

  // Methods
  const handleBack = ()=>router.back();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor,position:'relative' }}>
      {backBtnShown && 
      <View style={styles._backBtnView}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" color={COLORS._main_text_color} size={fsp(4)}/>
        </TouchableOpacity>
        </View>}
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  _backBtnView:{
    width:wp(100),
    padding:hp(1)
  }
})
