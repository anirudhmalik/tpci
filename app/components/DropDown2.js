import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import DD2List from "./DD2List";
function DropDown2({ setCost, cost }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <AppText style={styles.text}>
          Please select "Add to cart" button for the Furniture that you wish to
          purchase
        </AppText>
      </View>
      <DD2List setCost={setCost} cost={cost}></DD2List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  container2: {
    width: "95%",
  },
  text: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default DropDown2;
