import { Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, ONBOARDING_DATA } from "../../utils/constants";
import Button from "../../components/common/Button";
import { fsp, hp, wp } from "../../utils/helper";
import Animated, { FadeInLeft, FadeOutRight } from "react-native-reanimated";
import { useRouter } from "expo-router";

const OnBoardingScreen = () => {
  //States
  const [_currentPage, _setCurrentPage] = useState(0);
  const router = useRouter();

  //Methods
  const handleSkip = () => {
    _setCurrentPage(ONBOARDING_DATA.length - 1);
  };

  const handleContinue = () => {
    if (_currentPage < ONBOARDING_DATA.length - 1) {
      _setCurrentPage((prev) => prev + 1);
    }
    else{
      router.push('(auth)/login')
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: hp(2),
        width: wp(100),
      }}
    >
      <View
        style={{
          width: "200%",
          flex: 0.5,
          overflow: "hidden",
          backgroundColor: COLORS._primary_color,
          paddingLeft: wp(5),
          paddingRight: wp(5),
          paddingTop: hp(10),
          justifyContent: "flex-start",
          alignItems: "center",
          borderBottomLeftRadius: wp(100),
          borderBottomRightRadius: wp(100),
        }}
      >
        <Animated.Image
          style={{
            width: wp(80),
            height: hp(65),
            objectFit: "contain",
          }}
          key={_currentPage}
          exiting={FadeOutRight.duration(200).springify()}
          entering={FadeInLeft.delay(300).duration(200).springify()}
          source={ONBOARDING_DATA[_currentPage].img}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: COLORS._secondary_color,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: hp(2),
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: wp(2),
            paddingRight: wp(2),
            gap: hp(2),
          }}
        >
          <Text
            style={{
              color: COLORS._main_text_color,
              fontFamily: "_600",
              fontSize: fsp(4),
              textAlign: "center",
            }}
          >
            {ONBOARDING_DATA[_currentPage].title}
          </Text>
          <Text
            style={{
              color: COLORS._text_color_1,
              fontFamily: "_300",
              fontSize: fsp(2),
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
            gap: hp(1),
            width: "100%",
          }}
        >
          {ONBOARDING_DATA.map((_, key) => (
            <View
              key={key}
              style={{
                width: key === _currentPage ? wp(7) : wp(2),
                height: wp(2),
                borderRadius: wp(1),
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
            marginTop: hp(1),
          }}
        ></View>
        <View
          style={{
            paddingLeft: wp(5),
            paddingRight: wp(5),
            flexDirection: "row",
            gap: hp(1),
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: hp(2),
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
            onPress={handleContinue}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
