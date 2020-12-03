import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  iconColor = "#fff",
  backgroundColor = "#000",
  size = 40,
}) {
  return (
    <View
      style={{
        width: size,
        borderRadius: size / 2,
        backgroundColor,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
