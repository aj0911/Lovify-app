import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "../../components/common/Checkbox";
import { COLORS } from "../../utils/constants";
import { fsp, hp, isValidEmail, wp } from "../../utils/helper";
import CustomIcon from "../../components/common/CustomIcon";
import Button from "../../components/common/Button";
import Toast from "../../utils/Toast";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "expo-router";

const SignInScreen = () => {
  // States
  const [_inputData, _setInputData] = useState({
    _email: "",
    _password: "",
    _showPassword: false,
    _rememberMe: false,
    _loading: false,
  });
  const router = useRouter();

  // Methods
  const handleShowPassword = () =>
    _setInputData((prev) => ({ ...prev, _showPassword: !prev._showPassword }));

  const handleChecked = useCallback((val) => {
    _setInputData((prev) => ({
      ...prev,
      _rememberMe: val,
    }));
  }, []);

  const handleSignIn = () => {
    const { _email, _password, _rememberMe } = _inputData;
    if (_email && _password && _rememberMe) {
      if (isValidEmail(_email)) {
        _setInputData((prev) => ({ ...prev, _loading: true }));
        const timer = setTimeout(() => {
          router.replace(
            "(auth)/starting?text=Your account has been created by Lovify."
          );
        }, 3000);
        return () => clearTimeout(timer);
      } else Toast.error("Not a valid email.");
    } else Toast.error("All fields are mandatory.");
  };

  const handleForgotPassword = ()=>{
    router.push('(auth)/forgot')
  }
  return (
    <>
      {/* LoadingView */}
      {_inputData._loading && (
        <LoadingScreen text={"Sign in..."} loaderSize={hp(15)} />
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
              fontSize: fsp(4),
              textAlign: "left",
              width: "100%",
              color: COLORS._main_text_color,
            }}
          >
            Welcome Back! 👋
          </Text>
          <Text
            style={{
              fontFamily: "_300",
              fontSize: fsp(2.2),
              textAlign: "left",
              width: "100%",
              color: COLORS._main_text_color,
            }}
          >
            Your AI-powered dating adventure awaits
          </Text>
        </View>
        {/* Sign In form */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: wp(5),
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: hp(2),
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
              Email
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
                placeholder="Email"
                placeholderTextColor={COLORS._placeholder_color}
                onChangeText={(text) =>
                  _setInputData((prev) => ({ ...prev, _email: text }))
                }
              />
            </View>
          </View>
          {/* View for password */}
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
              Password
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
                secureTextEntry={!_inputData._showPassword}
                placeholderTextColor={COLORS._placeholder_color}
                placeholder="Password"
                onChangeText={(text) =>
                  _setInputData((prev) => ({ ...prev, _password: text }))
                }
              />
              <TouchableOpacity onPress={handleShowPassword}>
                <Ionicons
                  color={COLORS._main_text_color}
                  size={fsp(2.5)}
                  name={`eye${_inputData._showPassword ? "" : "-off"}-outline`}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* View for Remember and forgot password */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: fsp(1),
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={false}
                color={COLORS._primary_color}
                size={fsp(3)}
                onChecked={handleChecked}
              />
              <Text
                style={{
                  fontFamily: "_400",
                  fontSize: fsp(2),
                  color: COLORS._main_text_color,
                  textAlign: "left",
                }}
              >
                Remember Me
              </Text>
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text
                style={{
                  fontFamily: "_400",
                  fontSize: fsp(2),
                  color: COLORS._primary_color,
                  textAlign: "right",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* or continue with */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: wp(5),
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: wp(2),
          }}
        >
          <View
            style={{
              flex: 1,
              height: hp(0.3),
              backgroundColor: COLORS._primary_color_1,
            }}
          ></View>
          <Text
            style={{
              fontFamily: "_300",
              fontSize: fsp(2.2),
              color: COLORS._text_color_1,
            }}
          >
            or continue with
          </Text>
          <View
            style={{
              flex: 1,
              height: hp(0.3),
              backgroundColor: COLORS._primary_color_1,
            }}
          ></View>
        </View>
        {/* Social links */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: wp(5),
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: wp(2),
            flex: 1,
          }}
        >
          <TouchableOpacity style={styles._social_links}>
            <CustomIcon name="google" size={fsp(3)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._social_links}>
            <CustomIcon
              color={COLORS._main_text_color}
              name="apple"
              size={fsp(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles._social_links}>
            <CustomIcon name="facebook" size={fsp(3)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._social_links}>
            <CustomIcon
              color={COLORS._main_text_color}
              name="twitterX"
              size={fsp(3)}
            />
          </TouchableOpacity>
        </View>
        {/* separator */}
        <View
          style={{
            width: "100%",
            height: hp(0.3),
            backgroundColor: COLORS._primary_color_1,
          }}
        ></View>
        {/* Sign In Button */}
        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingHorizontal: wp(5),
          }}
        >
          <Button
            title="Sign in"
            color="#fff"
            backgroundColor={COLORS._primary_color}
            width={"100%"}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  _social_links: {
    width: wp(21),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: fsp(0.3),
    borderColor: COLORS._primary_color_1,
    padding: wp(3),
    borderRadius: fsp(10),
  },
});
