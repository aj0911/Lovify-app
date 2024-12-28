import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/common/Header";
import { Entypo } from "@expo/vector-icons";
import { fsp, hp, wp } from "../../utils/helper";
import { useRouter } from "expo-router";
import { COLORS } from "../../utils/constants";
import Button from "../../components/common/Button";
import { FILTER_DATA } from "../../data";
import RadioButton from "../../components/common/RadioButton";
import Slider from "@react-native-community/slider";

const Filter = () => {
  const router = useRouter();
  const [_state, _setState] = useState({
    _ageRange: {
      min:18,
      max:25
    },
    _gender: -1,
    _zodiacSigns: [],
    _interests: [],
  });

  const handleCancel = () => {
    if (router.canGoBack()) router.back();
  };
  const handlePushInState = (stateField, val) => {
    _setState((prevState) => {
      const updatedField = prevState[stateField].includes(val)
        ? prevState[stateField].filter((item) => item !== val)
        : [...prevState[stateField], val];
      return { ...prevState, [stateField]: updatedField };
    });
  };
  const handleReset = () => {
    _setState({
      _ageRange: {
        min:18,
        max:25
      },
      _gender: -1,
      _zodiacSigns: [],
      _interests: [],
    });
  };

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        LeftView={() => (
          <TouchableOpacity onPress={handleCancel}>
            <Entypo
              name="cross"
              size={fsp(3.5)}
              color={COLORS._main_text_color}
            />
          </TouchableOpacity>
        )}
        title="Filter"
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <View style={styles.filterSection}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Age Range</Text>
              <Text
                style={[
                  styles.sectionTitle,
                  { fontFamily: "_400", color: COLORS._text_color_1 },
                ]}
              >
                {_state._ageRange.min}-{_state._ageRange.max}
              </Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <Slider
                style={{ width: "100%", height: hp(2) }}
                minimumValue={FILTER_DATA.ageRange.min}
                maximumValue={FILTER_DATA.ageRange.max}
                minimumTrackTintColor={COLORS._primary_color}
                maximumTrackTintColor={COLORS._borderColor}
                thumbTintColor={COLORS._primary_color}
                onValueChange={(val) =>
                  _setState((prev) => ({ ...prev, _ageRange: {...prev._ageRange,max:val} }))
                }
                step={1}
                value={_state._ageRange.max}
              />
            </View>
          </View>
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Show me</Text>
            <View style={styles.radioButtonContainer}>
              {FILTER_DATA.genderOptions.map((gender, key) => (
                <RadioButton
                  key={key}
                  title={gender}
                  textStyle={styles.radioButtonText}
                  size={fsp(2.2)}
                  color={COLORS._primary_color}
                  borderWidth={2}
                  containerStyle={styles.radioButtonWrapper}
                  onChecked={(val) => {
                    _setState((prev) => ({ ...prev, _gender: val ? key : -1 }));
                  }}
                  checked={_state._gender===key}
                />
              ))}
            </View>
          </View>
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Zodiac</Text>
            <View style={styles.zodiacContainer}>
              {FILTER_DATA.zodiacSigns.map((sign, key) => {
                const isSelected = _state._zodiacSigns.includes(sign);
                return (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.zodiacButton,
                      {
                        borderColor: isSelected
                          ? COLORS._primary_color
                          : COLORS._borderColor,
                        backgroundColor: isSelected
                          ? COLORS._primary_color
                          : "transparent",
                      },
                    ]}
                    onPress={() => handlePushInState("_zodiacSigns", sign)}
                  >
                    <Text
                      style={[
                        styles.zodiacText,
                        {
                          color: isSelected ? "#fff" : COLORS._main_text_color,
                        },
                      ]}
                    >
                      {sign}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Interests</Text>
            <View style={styles.zodiacContainer}>
              {FILTER_DATA.interests.map((interest, key) => {
                const isSelected = _state._interests.includes(interest);
                return (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.zodiacButton,
                      {
                        borderColor: isSelected
                          ? COLORS._primary_color
                          : COLORS._borderColor,
                        backgroundColor: isSelected
                          ? COLORS._primary_color
                          : "transparent",
                      },
                    ]}
                    onPress={() => handlePushInState("_interests", interest)}
                  >
                    <Text
                      style={[
                        styles.zodiacText,
                        {
                          color: isSelected ? "#fff" : COLORS._main_text_color,
                        },
                      ]}
                    >
                      {interest}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              backgroundColor={COLORS._primary_color_1}
              color={COLORS._primary_color}
              width={wp(43)}
              onPress={handleReset}
            />
            <Button
              title="Apply"
              backgroundColor={COLORS._primary_color}
              color={COLORS._primary_color_1}
              width={wp(43)}
              onPress={()=>console.log(_state)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: hp(1),
  },
  header: {
    paddingHorizontal: wp(5),
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: hp(2),
    paddingBottom: hp(2),
  },
  filterSection: {
    width: "100%",
    paddingHorizontal: wp(5),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: hp(1.5),
  },
  sectionTitle: {
    color: COLORS._main_text_color,
    fontFamily: "_600",
    fontSize: fsp(2),
  },
  radioButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: wp(5),
  },
  radioButtonText: {
    color: COLORS._main_text_color,
    fontFamily: "_400",
    fontSize: fsp(1.8),
  },
  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
  },
  zodiacContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: wp(3),
  },
  zodiacButton: {
    borderWidth: 1,
    paddingVertical: fsp(0.7),
    paddingHorizontal: fsp(1.5),
    borderRadius: 30,
  },
  zodiacText: {
    fontSize: fsp(1.8),
    fontFamily: "_400",
  },
  separator: {
    width: "100%",
    height: hp(0.2),
    backgroundColor: COLORS._primary_color_1,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: wp(5),
    gap: wp(4),
  },
});

export default Filter;
