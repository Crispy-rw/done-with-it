import React from "react";
import { View, StyleSheet } from "react-native";
import { Image as RNImage } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./Text";

function Card({ imageUrl, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <RNImage style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailContainer}></View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    paddingBottom: 10,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
