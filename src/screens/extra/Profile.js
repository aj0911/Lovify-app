import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../../components/common/Header";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { fsp, hp, wp } from "../../utils/helper";
import { COLORS } from "../../utils/constants";
import { useRouter } from "expo-router";
import Button from "../../components/common/Button";

const Profile = () => {
  const router = useRouter();
  const _interestData = [
    "Travel ✈️",
    "Hiking ⛰️",
    "Yoga 🧘‍♀️",
    "Gaming 🎮",
    "Movies 🎥",
  ];

  const _imgs = [
    require('../../../assets/girlImg_1.jpg'),
    require('../../../assets/girlImg_2.jpg'),
    require('../../../assets/girlImg_3.jpg'),
    require('../../../assets/girlImg_4.jpg'),
    require('../../../assets/girlImg_5.jpg'),
    require('../../../assets/girlImg_6.jpeg'),
  ]

  //Methods
  const handleCancel = () => {
    if (router.canGoBack()) router.back();
  };

  return (
    <View
      style={{
        width: wp(100),
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: hp(1),
      }}
    >
      <Header
        style={{
          paddingHorizontal: wp(5),
        }}
        title={"Profile"}
        LeftView={() => (
          <TouchableOpacity onPress={handleCancel}>
            <Entypo
              name="cross"
              size={fsp(3.5)}
              color={COLORS._main_text_color}
            />
          </TouchableOpacity>
        )}
        RightView={() => (
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <TouchableOpacity>
              <Feather
                name="share-2"
                size={fsp(2.5)}
                color={COLORS._main_text_color}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                size={fsp(2.5)}
                color={COLORS._main_text_color}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <ScrollView
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: hp(2),
            paddingBottom: hp(2),
            paddingHorizontal: wp(5),
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
            }}
          >
            <Image
              style={{
                borderRadius: 15,
                width: "100%",
                height: hp(60),
              }}
              source={require("../../../assets/girlImg_6.jpeg")}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: hp(1.5),
            }}
          >
            <Text
              style={{
                color: COLORS._main_text_color,
                fontFamily: "_600",
                fontSize: fsp(3.5),
              }}
            >
              Isabella
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: wp(3),
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  paddingVertical: fsp(0.7),
                  paddingHorizontal: fsp(1.5),
                  borderRadius: 30,
                  borderColor: COLORS._borderColor,
                  flexDirection: "row",
                  gap: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name={"female"}
                  size={fsp(1.8)}
                  color={COLORS._main_text_color}
                />
                <Text
                  style={{
                    fontSize: fsp(1.8),
                    color: COLORS._main_text_color,
                    fontFamily: "_400",
                  }}
                >
                  24
                </Text>
              </View>
              <Text
                style={{
                  borderWidth: 1,
                  paddingVertical: fsp(0.7),
                  paddingHorizontal: fsp(1.5),
                  borderRadius: 30,
                  borderColor: COLORS._borderColor,
                  fontSize: fsp(1.8),
                  color: COLORS._main_text_color,
                  fontFamily: "_400",
                }}
              >
                Gemini
              </Text>
              <Text
                style={{
                  borderWidth: 1,
                  paddingVertical: fsp(0.7),
                  paddingHorizontal: fsp(1.5),
                  borderRadius: 30,
                  borderColor: COLORS._borderColor,
                  fontSize: fsp(1.8),
                  color: COLORS._main_text_color,
                  fontFamily: "_400",
                }}
              >
                Fashion Model
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: hp(1.5),
            }}
          >
            <Text
              style={{
                color: COLORS._main_text_color,
                fontFamily: "_600",
                fontSize: fsp(2.2),
              }}
            >
              About me
            </Text>
            <Text
              style={{
                color: COLORS._text_color_1,
                fontFamily: "_400",
                fontSize: fsp(1.6),
              }}
            >
              Hi! I'm Isabella, a fashion model with a passion for creativity. I
              love exploring new cities and capturing moments through my lens.
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: hp(1.5),
            }}
          >
            <Text
              style={{
                color: COLORS._main_text_color,
                fontFamily: "_600",
                fontSize: fsp(2.2),
              }}
            >
              Interests
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: wp(3),
              }}
            >
              {_interestData.map((x, i) => (
                <Text
                  style={{
                    borderWidth: 1,
                    paddingVertical: fsp(0.7),
                    paddingHorizontal: fsp(1.5),
                    borderRadius: 30,
                    borderColor: COLORS._borderColor,
                    fontSize: fsp(1.8),
                    color: COLORS._main_text_color,
                    fontFamily: "_400",
                  }}
                  key={i}
                >
                  {x}
                </Text>
              ))}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: hp(1.5),
            }}
          >
            <Text
              style={{
                color: COLORS._main_text_color,
                fontFamily: "_600",
                fontSize: fsp(2.2),
              }}
            >
              Photos
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap:'wrap',
                justifyContent:'flex-start',
                alignItems:'flex-start',
                gap: wp(3),
              }}
            >
              {_imgs.map((x, i) => (
                <TouchableOpacity key={i}>
                  <Image style={{
                    width:wp(43.5),
                    height:hp(25),
                    objectFit:'cover',
                    borderRadius:fsp(1.5)
                  }} source={x} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Button
            title={"Chat"}
            color={"#fff"}
            backgroundColor={COLORS._primary_color}
            width={"100%"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
