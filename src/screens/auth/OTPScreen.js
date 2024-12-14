import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/constants";
import { fsp, hp, isValidEmail, wp } from "../../utils/helper";
import Button from "../../components/common/Button";
import Toast from "../../utils/Toast";
import LoadingScreen from "./LoadingScreen";
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from "expo-router";

const OTPScreen = () => {
  // States
  const _resendOTPTime = 60;
  const [_inputData, _setInputData] = useState({
    _otp: "",
    _loading: false,
    _canResend: false,
    _counter: _resendOTPTime,
  });
  const router = useRouter();

  // Methods
  const handleVerifyOTP = () => {
    if (_inputData._otp.length === 4){
      _setInputData((prev) => ({ ...prev, _loading: true }));
      const timer = setTimeout(() => {
        router.replace(
          "(auth)/updatepassword"
        );
      }, 3000);
      return () => clearTimeout(timer);
    }
  };
  const handleResendOTP = () => {
    _setInputData((prev) => ({ ...prev, _canResend: false, _counter: _resendOTPTime }));
  };

  //Rendering
  useEffect(() => {
    if (_inputData._counter > 0) {
      const timer = setInterval(() => {
        _setInputData((prev) => ({ ...prev, _counter: prev._counter - 1 }));
      }, 1000);
      return () => clearInterval(timer);
    } else _setInputData((prev) => ({ ...prev, _canResend: true }));
  }, [_inputData._counter]);

  return (
    <>
      {/* LoadingView */}
      {_inputData._loading && (
        <LoadingScreen text={"Verify OTP..."} loaderSize={hp(15)} />
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
            Enter OTP Code 🔐
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
            Check your email inbox for a message from Lovify. Enter the one-time
            verification code below to proceed with reseting your password.
          </Text>
        </View>
        {/* OTP View */}
        <View style={{
            flex:1,
            paddingHorizontal:wp(5),
            justifyContent:'flex-start',
            alignItems:'center',
            gap:hp(4)
        }}>
          {/* OTP box */}
            <OtpInput
              numberOfDigits={4}
              onTextChange={(_otp) =>
                _setInputData((prev) => ({ ...prev, _otp }))
              }
              focusColor={COLORS._primary_color}
              theme={{
                pinCodeContainerStyle:{
                    borderWidth:0,
                    width:wp(18),
                    height:wp(18),
                    backgroundColor:COLORS._primary_color_1,
                    borderRadius:fsp(1)
                },
                pinCodeTextStyle:{
                    fontFamily:'_600',
                    fontSize:fsp(3.5),
                    color:COLORS._main_text_color
                },
                focusedPinCodeContainerStyle:{
                    borderWidth:3
                }
              }}
              type="numeric"
            />
            {!_inputData._canResend && (
              <Text style={{
                fontFamily:'_400',
                    fontSize:fsp(2),
                    color:COLORS._text_color_1,
                    textAlign:'center'
              }}>
                You can resend the code in <Text style={{
                    fontFamily:'_600',
                    color:COLORS._primary_color
                }}>{_inputData._counter}</Text>{" "}
                seconds
              </Text>
            )}
            {_inputData._canResend && (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text style={{
                fontFamily:'_600',
                    fontSize:fsp(2.2),
                    color:COLORS._text_color_1,
                    textAlign:'center'
              }}>Resend Code</Text>
              </TouchableOpacity>
            )}
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
            title="Verify OTP"
            color="#fff"
            backgroundColor={COLORS._primary_color}
            width={"100%"}
            onPress={handleVerifyOTP}
          />
        </View>
      </View>
    </>
  );
};
export default OTPScreen;
