import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/constants";
import { fsp, hp, wp } from "../../utils/helper";
import Button from "../../components/common/Button";
import LottieView from "lottie-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const AllSetScreen = () => {
  // States
  const {text} = useLocalSearchParams();
  const router = useRouter();

  // Methods
  const handleHomepage = () => {
    router.replace('(tabs)/for-you');
  };

  return (
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
      {/* View for start */}
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:hp(4),
        width:'100%'
      }}>
        <View style={{
            backgroundColor:COLORS._primary_color,
            padding:hp(2),
            borderRadius:hp(20)
        }}>
          <LottieView
            source={require("../../../assets/all_start.json")}
            autoPlay
            speed={1}
            loop
            style={{ width: wp(30), height: wp(30) }}
            colorFilters={[
                {
                  keypath: '',
                  color: 'blue',     
                },
              ]}
          />
        </View>
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            gap:hp(2),
            width:'100%'
        }}>
            <Text style={{
                fontFamily:'_700',
                fontSize:fsp(3.5),
                color:COLORS._main_text_color,
                textAlign:'center',
                width:'100%'
            }}>You're All Set!</Text>
            <Text style={{
                fontFamily:'_400',
                fontSize:fsp(1.8),
                color:COLORS._text_color_1,
                textAlign:'center',
                width:'100%'
            }}>{text}</Text>
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
      {/* HomePage Button */}
      <View
        style={{
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingHorizontal: wp(5),
        }}
      >
        <Button
          title="Go to Homepage"
          color="#fff"
          backgroundColor={COLORS._primary_color}
          width={"100%"}
          onPress={handleHomepage}
        />
      </View>
    </View>
  );
};

export default AllSetScreen;
