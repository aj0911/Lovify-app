import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { scale } from "react-native-size-matters";
import { COLORS, ONBOARDING_DATA } from "../../utils/constants";
import Button from "../../components/common/Button";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const OnBoardingScreen = () => {
  //States
  const [_currentPage, _setCurrentPage] = useState(0);

  //Methods
  const handleSkip = () => {};

  const handleContinue = () => _setCurrentPage((prev) => prev + 1);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: scale(20),
      }}
    >
      <View
        style={{
          width: "200%",
          flex: 0.55,
          overflow: "hidden",
          backgroundColor: COLORS._primary_color,
          paddingLeft: scale(20),
          paddingRight: scale(20),
          justifyContent: "flex-start",
          alignItems: "center",
          borderBottomLeftRadius: 450,
          borderBottomRightRadius: 450,
        }}
      >
        <Image
          style={{
            width: "40%",
            height: "160%",
            objectFit: "contain",
          }}
          source={ONBOARDING_DATA[_currentPage].img}
        />
      </View>
      <View
        style={{
          flex: 0.45,
          backgroundColor: COLORS._secondary_color,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: scale(20),
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: scale(10),
            gap: scale(10),
          }}
        >
          <Text
            style={{
              color: COLORS._main_text_color,
              fontFamily: "_600",
              fontSize: responsiveFontSize(4),
              textAlign: "center",
            }}
          >
            {ONBOARDING_DATA[_currentPage].title}
          </Text>
          <Text
            style={{
              color: COLORS._text_color_1,
              fontFamily: "_400",
              fontSize: scale(14),
              textAlign: "center",
            }}
          >
            {ONBOARDING_DATA[_currentPage].desc}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: scale(10),
            width: "100%",
          }}
        >
          {ONBOARDING_DATA.map((_, key) => (
            <View
              key={key}
              style={{
                width: key === _currentPage ? scale(30) : scale(7),
                height: scale(7),
                borderRadius: scale(5),
                backgroundColor:
                  key === _currentPage
                    ? COLORS._primary_color
                    : COLORS._primary_color_1,
              }}
            ></View>
          ))}
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS._primary_color_1,
            height: 1,
            marginTop: scale(10),
          }}
        ></View>
        <View
          style={{
            paddingLeft: scale(20),
            paddingRight: scale(20),
            flexDirection: "row",
            gap: scale(10),
          }}
        >
          {_currentPage < ONBOARDING_DATA.length - 1 && (
            <Button
              title={"Skip"}
              color={COLORS._primary_color}
              backgroundColor={COLORS._primary_color_1}
              width={"50%"}
              onPress={handleSkip}
            />
          )}
          <Button
            title={
              _currentPage < ONBOARDING_DATA.length - 1
                ? "Continue"
                : "Let's Get Started"
            }
            color={COLORS._primary_color_1}
            backgroundColor={COLORS._primary_color}
            width={_currentPage < ONBOARDING_DATA.length - 1 ? "50%" : "100%"}
            onPress={_currentPage<ONBOARDING_DATA.length-1?handleContinue:handleSkip}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
