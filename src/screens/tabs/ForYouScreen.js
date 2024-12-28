import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/common/Header";
import CustomIcon from "../../components/common/CustomIcon";
import { fsp, hp, wp } from "../../utils/helper";
import { CARDS, COLORS } from "../../utils/constants";
import Swipe from "../../components/common/Swipe";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ForYouScreen = () => {
  //States
  const router = useRouter();

  //Methods
  const handleFilterPress = () => {
    router.push("(extra)/filter");
  };

  return (
    <View
      style={{
        width: wp(100),
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: wp(5),
        gap: hp(1),
        paddingBottom: hp(1),
      }}
    >
      <Header
        LeftView={() => (
          <TouchableOpacity>
            <Image
              source={require("../../../assets/logo-primary.png")}
              style={{
                width: wp(7.5),
                height: wp(7.5),
              }}
            />
          </TouchableOpacity>
        )}
        title={"For You"}
        RightView={() => (
          <TouchableOpacity onPress={handleFilterPress}>
            <CustomIcon
              name={"filter"}
              size={fsp(3)}
              color={COLORS._main_text_color}
            />
          </TouchableOpacity>
        )}
      />
      <Swipe
        cards={CARDS}
        stackSize={CARDS.length}
        renderCard={(item, index) => {
          return (
            <TouchableOpacity
            onPress={()=>console.log('pressed')}
              style={{
                flex: 1,
                borderRadius: fsp(2),
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow,
              }}
              key={index}
            >
              <ImageBackground
                style={{
                  flex:1,
                  width:'100%',
                  borderRadius: fsp(2),
                  position: "relative",
                }}
                imageStyle={{
                  borderRadius: fsp(2),
                  position: "relative",
                  flex:1,
                  width:'100%'
                }}
                source={item.img}
              >
                <LinearGradient
                  colors={[
                    "rgba(0, 0, 0, 0.05)",
                    "rgba(0, 0, 0, 0.05)",
                    "rgba(0, 0, 0, 0.9)",
                  ]}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    padding: wp(5),
                    borderRadius: fsp(2),
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                  locations={[0, 0.6, 1]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: wp(2),
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "flex-start",
                        gap: hp(1.5),
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "_600",
                          textAlign: "left",
                          fontSize: fsp(4),
                        }}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: wp(3),
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: wp(1),
                            borderWidth: 1,
                            borderRadius: fsp(5),
                            borderColor: "#fff",
                            paddingVertical: fsp(0.75),
                            paddingHorizontal: fsp(1),
                          }}
                        >
                          <Ionicons
                            name={item.gender}
                            size={fsp(1.5)}
                            color={"#fff"}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "_300",
                              fontSize: fsp(1.8),
                            }}
                          >
                            {item.age}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: wp(1),
                            borderWidth: 1,
                            borderRadius: fsp(5),
                            borderColor: "#fff",
                            paddingVertical: fsp(0.75),
                            paddingHorizontal: fsp(1),
                          }}
                        >
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "_300",
                              fontSize: fsp(1.8),
                            }}
                          >
                            {item.zodiacSign}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: fsp(2),
                        paddingVertical: fsp(1.5),
                        backgroundColor: COLORS._primary_color,
                        borderRadius: fsp(5),
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "_300",
                          fontSize: fsp(2.2),
                        }}
                      >
                        Chat
                      </Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({});
