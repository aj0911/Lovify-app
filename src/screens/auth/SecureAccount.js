import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/constants";
import { fsp, hp, wp } from "../../utils/helper";
import Button from "../../components/common/Button";
import Toast from "../../utils/Toast";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "expo-router";

const SecureAccount = () => {
  // States
  const [_inputData, _setInputData] = useState({
    _newPassword: "",
    _confirmPassword: "",
    _loading: false,
    _showNewPassword: false,
    _showConfirmPassword: false,
  });
  const router = useRouter();

  // Methods
  const handleShowNewPassowrd = () =>
    _setInputData((prev) => ({
      ...prev,
      _showNewPassword: !prev._showNewPassword,
    }));

  const handleShowConfirmPassowrd = () =>
    _setInputData((prev) => ({
      ...prev,
      _showConfirmPassword: !prev._showConfirmPassword,
    }));

  const handleSaveNewPassword = () => {
    const { _newPassword, _confirmPassword } = _inputData;
    if (_newPassword && _confirmPassword) {
      if (_newPassword === _confirmPassword) {
        _setInputData((prev) => ({ ...prev, _loading: true }));
        const timer = setTimeout(() => {
          router.replace(
            "(auth)/starting?text=Your password has been updated successfully."
          );
        }, 3000);
        return () => clearTimeout(timer);
      } else Toast.error("Password and confirm password must be same!");
    } else Toast.error("All Fields are mandatory");
  };
  return (
    <>
      {/* LoadingView */}
      {_inputData._loading && (
        <LoadingScreen text={"Updating Password..."} loaderSize={hp(15)} />
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
            Secure Your Account 🔒
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
            Enter a new password for your Lovify account below. Make sure it's
            secure and easy for you to remember.
          </Text>
        </View>
        {/* Secure Account form */}
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
          {/* View for new password */}
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
              New Password
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
                name="lock-closed-outline"
              />
              <TextInput
                style={{
                  fontFamily: "_300",
                  fontSize: fsp(2.2),
                  flex: 1,
                  color: COLORS._main_text_color,
                }}
                secureTextEntry={!_inputData._showNewPassword}
                placeholderTextColor={COLORS._placeholder_color}
                placeholder="New Password"
                onChangeText={(text) =>
                  _setInputData((prev) => ({ ...prev, _newPassword: text }))
                }
              />
              <TouchableOpacity onPress={handleShowNewPassowrd}>
                <Ionicons
                  color={COLORS._main_text_color}
                  size={fsp(2.5)}
                  name={`eye${
                    _inputData._showNewPassword ? "" : "-off"
                  }-outline`}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* View for confirm password */}
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
              Confirm Password
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
                name="lock-closed-outline"
              />
              <TextInput
                style={{
                  fontFamily: "_300",
                  fontSize: fsp(2.2),
                  flex: 1,
                  color: COLORS._main_text_color,
                }}
                secureTextEntry={!_inputData._showConfirmPassword}
                placeholderTextColor={COLORS._placeholder_color}
                placeholder="Confirm Password"
                onChangeText={(text) =>
                  _setInputData((prev) => ({
                    ...prev,
                    _confirmPassword: text,
                  }))
                }
              />
              <TouchableOpacity onPress={handleShowConfirmPassowrd}>
                <Ionicons
                  color={COLORS._main_text_color}
                  size={fsp(2.5)}
                  name={`eye${
                    _inputData._showConfirmPassword ? "" : "-off"
                  }-outline`}
                />
              </TouchableOpacity>
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
            title="Save New Password"
            color="#fff"
            backgroundColor={COLORS._primary_color}
            width={"100%"}
            onPress={handleSaveNewPassword}
          />
        </View>
      </View>
    </>
  );
};

export default SecureAccount;
