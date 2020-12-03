import React from "react";
import Constans from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
