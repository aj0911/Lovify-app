import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const RadioButton = ({
  checked = false,
  title = "",
  textStyle = {},
  size = 24,
  color = "black",
  onChecked,
  borderWidth = 3,
  containerStyle = {},
}) => {
  const [_isChecked, _setIsChecked] = useState(checked);

  useEffect(() => {
    _setIsChecked(checked);
  }, [checked]);

  const handleCheck = () => {
    const newCheckedState = !_isChecked;
    _setIsChecked(newCheckedState);
    if (onChecked) {
      onChecked(newCheckedState);
    }
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={handleCheck}>
      <View
        style={[
          styles.radioOuter,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: color,
            borderWidth,
          },
        ]}
      >
        {_isChecked && (
          <View
            style={[
              styles.radioInner,
              {
                backgroundColor: color,
                width: size / 1.5,
                height: size / 1.5,
                borderRadius: size / 1.5 / 2,
              },
            ]}
          />
        )}
      </View>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioOuter: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioButton;
