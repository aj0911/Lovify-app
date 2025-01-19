import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { fsp, hp, shuffleArray, wp } from "../../utils/helper";
import Header from "../../components/common/Header";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, EXPLORE, EXPLORE_DATA } from "../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const ExploreScreen = () => {
  //states
  const [_state, _setState] = useState({
    _currentSelection: EXPLORE.FEMALE,
  });
  const router  = useRouter();

  //methods
  const handleProfileClick = () => {
    router.push("(extra)/profile");
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
        position: "relative",
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
        title={"Explore"}
        RightView={() => (
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="search"
              size={fsp(3)}
              color={COLORS._main_text_color}
            />
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: hp(2),
        }}
      >
        <TouchableOpacity
          onPress={() =>
            _setState((prev) => ({
              ...prev,
              _currentSelection: EXPLORE.FEMALE,
            }))
          }
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              _state._currentSelection === EXPLORE.FEMALE
                ? COLORS._primary_color
                : COLORS._primary_color_1,
            padding: fsp(1.5),
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: fsp(1.8),
              fontFamily: "_600",
              color:
                _state._currentSelection === EXPLORE.FEMALE
                  ? "#fff"
                  : COLORS._main_text_color,
            }}
          >
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            _setState((prev) => ({ ...prev, _currentSelection: EXPLORE.MALE }))
          }
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              _state._currentSelection === EXPLORE.MALE
                ? COLORS._primary_color
                : COLORS._primary_color_1,
            padding: fsp(1.5),
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: fsp(1.8),
              fontFamily: "_600",
              color:
                _state._currentSelection === EXPLORE.MALE
                  ? "#fff"
                  : COLORS._main_text_color,
            }}
          >
            Male
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: wp(5),
          }}
        >
          {shuffleArray(EXPLORE_DATA[_state._currentSelection]).map(
            (person, key) => (
              <TouchableOpacity
              onPress={handleProfileClick}
                style={{
                  width: wp(85 / 2),
                  height: hp(30),
                }}
                key={key}
              >
                <ImageBackground
                  source={{ uri: person.profileImg }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  imageStyle={{
                    borderRadius: 7,
                  }}
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
                      padding: 10,
                      borderRadius: 7,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                    locations={[0, 0.6, 1]}
                  >
                    <View
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 7,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "_600",
                          textAlign: "left",
                          fontSize: fsp(2.2),
                        }}
                      >
                        {person.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 3,
                            borderWidth: 1,
                            borderRadius: 20,
                            borderColor: "#fff",
                            paddingVertical: fsp(0.3),
                            paddingHorizontal: fsp(1),
                          }}
                        >
                          <Ionicons
                            name={_state._currentSelection===EXPLORE.MALE?"male":"female"}
                            size={fsp(1.2)}
                            color={"#fff"}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "_300",
                              fontSize: fsp(1.3),
                            }}
                          >
                            {person.age}
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
                            paddingVertical: fsp(0.3),
                            paddingHorizontal: fsp(1),
                          }}
                        >
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "_300",
                              fontSize: fsp(1.3),
                            }}
                          >
                            {person.zodiacSign}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
