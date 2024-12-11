import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomIcon from "../../components/common/CustomIcon";
import { fsp, hp, wp } from "../../utils/helper";
import { COLORS } from "../../utils/constants";
import Button from "../../components/common/Button";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";

const StartingScreen = () => {
  //states
  const router = useRouter();

  //methods
  const handleSignIn = () => router.push("(auth)/login");
  const handleSignUp = () => router.push("(auth)/register");

  return (
    <View
      style={{
        width: wp(100),
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: hp(4),
        paddingBottom: hp(2),
        paddingTop: hp(2),
      }}
    >
      {/* View for image and title */}
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: hp(3),
          width: "100%",
        }}
      >
        <Animated.Image
          style={{
            width: wp(20),
            objectFit: "contain",
          }}
          entering={FadeInUp.delay(300).duration(200).springify()}
          source={require("../../../assets/logo-primary.png")}
        />
        {/* View for title */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: hp(1),
            width: "100%",
            paddingLeft: wp(2),
            paddingRight: wp(2),
          }}
        >
          <Animated.Text
            style={{
              fontFamily: "_600",
              fontSize: fsp(4),
              color: COLORS._main_text_color,
              textAlign: "center",
            }}
            entering={FadeInUp.delay(400).duration(200).springify()}
          >
            Let's Get Started!
          </Animated.Text>
          <Animated.Text
            style={{
              fontFamily: "_300",
              fontSize: fsp(2.2),
              color: COLORS._text_color_1,
              textAlign: "center",
            }}
            entering={FadeInUp.delay(500).duration(200).springify()}
          >
            Let's dive in into your account
          </Animated.Text>
        </View>
      </View>
      {/* View for social btns */}
      <Animated.View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: hp(2),
          width: "100%",
          paddingLeft: wp(5),
          paddingRight: wp(5),
          flex: 1,
        }}
        entering={FadeInUp.delay(600).duration(200).springify()}
      >
        <TouchableOpacity style={styles._social_links}>
          <CustomIcon name="google" size={fsp(3.5)} />
          <Text style={styles._social_links_text}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._social_links}>
          <CustomIcon
            name="apple"
            color={COLORS._main_text_color}
            size={fsp(3.5)}
          />
          <Text style={styles._social_links_text}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._social_links}>
          <CustomIcon name="facebook" size={fsp(3.5)} />
          <Text style={styles._social_links_text}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._social_links}>
          <CustomIcon
            name="twitterX"
            color={COLORS._main_text_color}
            size={fsp(3.5)}
          />
          <Text style={styles._social_links_text}>Continue with X</Text>
        </TouchableOpacity>
      </Animated.View>
      {/* View for sign in/up btns */}
      <Animated.View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: hp(2),
          width: "100%",
          paddingLeft: wp(5),
          paddingRight: wp(5),
        }}
        entering={FadeInUp.delay(700).duration(200).springify()}
      >
        <Button
          title={"Sign up"}
          color={'#ffffff'}
          backgroundColor={COLORS._primary_color}
          width={"100%"}
          textStyle={{ fontSize: fsp(1.8) }}
          onPress={handleSignUp}
        />
        <Button
          title={"Sign in"}
          backgroundColor={COLORS._primary_color_1}
          color={COLORS._primary_color}
          width={"100%"}
          textStyle={{ fontSize: fsp(1.8) }}
          onPress={handleSignIn}
        />
      </Animated.View>
      {/* View for footer */}
      <Animated.View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: wp(4),
        }}
        entering={FadeInUp.delay(800).duration(200).springify()}
      >
        <TouchableOpacity>
          <Text style={styles._footer_text}>Privacy Policy</Text>
        </TouchableOpacity>
        <View
          style={{
            width: wp(0.7),
            height: wp(0.7),
            borderRadius: wp(1),
            backgroundColor: COLORS._text_color_1,
          }}
        ></View>
        <TouchableOpacity>
          <Text style={styles._footer_text}>Terms of Service</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  _social_links: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: COLORS._primary_color_1,
    borderWidth: fsp(0.2),
    padding: hp(1.5),
    borderRadius: hp(20),
  },
  _social_links_text: {
    fontSize: fsp(1.8),
    fontFamily: "_500",
    flex: 1,
    textAlign: "center",
    color: COLORS._main_text_color,
  },
  _footer_text: {
    fontSize: fsp(1.6),
    fontFamily: "_300",
    color: COLORS._text_color_1,
  },
});
