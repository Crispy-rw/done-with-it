import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1000000000,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
