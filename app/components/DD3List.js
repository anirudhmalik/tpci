import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import ProductList2 from "./ProductList2";

function DD3List(props) {
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.container}>
          <AppText style={styles.text}>Search</AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={"search-web"}
            size={25}
            color={colors.black}
          />
        </View>
      </View>
      <ProductList2></ProductList2>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
  },
  container1: {
    marginTop: 15,
    height: 30,
    width: "95%",
    flexDirection: "row",
  },
  icon: {},
  text: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default DD3List;
