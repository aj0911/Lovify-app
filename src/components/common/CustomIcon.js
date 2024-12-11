import React from "react";
import Svg, { Path } from "react-native-svg";
import { ICON_PATHS } from "../../utils/constants";

const CustomIcons = ({ name, size = 24, color }) => {
  const icon = ICON_PATHS[name];
  if (!icon) return null;

  return (
    <Svg width={size} height={size} viewBox={icon.viewBox} fill="none">
      {icon.paths.map((path, index) => (
        <Path key={index} d={path.d} fill={color || path.fill} />
      ))}
    </Svg>
  );
};

export default CustomIcons;
