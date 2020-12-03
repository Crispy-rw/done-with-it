import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const And = Platform.select({
  android: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

const styles = StyleSheet.create({
  text: { color: colors.black, ...And },
});

export default AppText;
