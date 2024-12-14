import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/constants";
import { fsp, hp, isValidEmail, wp } from "../../utils/helper";
import Button from "../../components/common/Button";
import Toast from "../../utils/Toast";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  // States
  const [_inputData, _setInputData] = useState({
    _email: "",
    _loading: false,
  });
  const router = useRouter();

  // Methods
  const handleSendOTP = () => {
    const { _email } = _inputData;
    if (isValidEmail(_email)) {
      _setInputData((prev) => ({ ...prev, _loading: true }));
      const timer = setTimeout(() => {
        router.push(
          "(auth)/otp"
        );
      }, 3000);
      return () => clearTimeout(timer);
    } else Toast.error("Not a valid email.");
  };
  return (
    <>
      {/* LoadingView */}
      {_inputData._loading && (
        <LoadingScreen text={"Sending OTP..."} loaderSize={hp(15)} />
      )}
      <View
        style={{
          width: wp(100),
          flex: 1,
          paddingVertical: hp(1),
          justifyContent: "flex-start",
          alignItems: "center",
          gap: hp(4),
        }}
      >
        {/* Title and desc View */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: wp(5),
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: hp(1),
          }}
        >
          <Text
            style={{
              fontFamily: "_600",
              fontSize: fsp(3.2),
              textAlign: "left",
              width: "100%",
              color: COLORS._main_text_color,
            }}
          >
            Forgot Your Password? 🔑
          </Text>
          <Text
            style={{
              fontFamily: "_300",
              fontSize: fsp(2),
              textAlign: "left",
              width: "100%",
              color: COLORS._main_text_color,
            }}
          >
            Enter the email associated with your Lovify account below. We'll
            send you one-time verification code to reset your password.
          </Text>
        </View>
        {/* Email form */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: wp(5),
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: hp(2),
            flex: 1,
          }}
        >
          {/* View for email */}
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: hp(0.5),
            }}
          >
            <Text
              style={{
                fontFamily: "_400",
                fontSize: fsp(2.2),
                color: COLORS._main_text_color,
                width: "100%",
                textAlign: "left",
              }}
            >
              Your Registered Email
            </Text>
            <View
              style={{
                width: "100%",
                backgroundColor: COLORS._primary_color_1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: fsp(1),
                padding: hp(1.5),
                borderRadius: hp(0.5),
              }}
            >
              <Ionicons
                color={COLORS._main_text_color}
                size={fsp(2.5)}
                name="mail-outline"
              />
              <TextInput
                style={{
                  fontFamily: "_300",
                  fontSize: fsp(2.2),
                  flex: 1,
                  color: COLORS._main_text_color,
                }}
                placeholder="Registered Email"
                placeholderTextColor={COLORS._placeholder_color}
                onChangeText={(text) =>
                  _setInputData((prev) => ({ ...prev, _email: text }))
                }
              />
            </View>
          </View>
        </View>
        {/* separator */}
        <View
          style={{
            width: "100%",
            height: hp(0.3),
            backgroundColor: COLORS._primary_color_1,
          }}
        ></View>
        {/* Send OTP Button */}
        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingHorizontal: wp(5),
          }}
        >
          <Button
            title="Send OTP"
            color="#fff"
            backgroundColor={COLORS._primary_color}
            width={"100%"}
            onPress={handleSendOTP}
          />
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;
