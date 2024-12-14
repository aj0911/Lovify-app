import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Checkbox = ({ checked = false, size = 24, color = "black", onChecked }) => {
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
    <TouchableOpacity onPress={handleCheck}>
      <Ionicons
        name={_isChecked ? "checkbox" : "square-outline"}
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
};

// PropTypes for validation
Checkbox.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  onChecked: PropTypes.func,
};

export default Checkbox;
