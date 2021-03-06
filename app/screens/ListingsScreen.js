import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import routes from "../navigations/routes";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { error, loading, data: listings, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`\$${item.price}`}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
