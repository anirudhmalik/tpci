import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import ProductCard from "./ProductCard";

function InclusionList(props) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.text}>Standard inclusion</AppText>
      </View>
      <ProductCard
        name={"Product name 1"}
        iconName={"chair-rolling"}
      ></ProductCard>
      <ProductCard
        name={"Product name 2"}
        iconName={"gift-outline"}
      ></ProductCard>
      <View style={styles.container}>
        <AppText style={styles.text2}>
          Please deselect undesired furniture/service
        </AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    height: 30,
    width: "95%",
  },
  text: {
    color: colors.medium,
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    color: colors.medium,

    fontSize: 14,
  },
});

export default InclusionList;
