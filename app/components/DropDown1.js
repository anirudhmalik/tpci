import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import DD1List from "./DD1List";

function DropDown1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <AppText style={styles.text}>
          Your package includes complimentary furnitures/services as listed
          below. you can manage your inclusion as in your package as per your
          requirement from the list below
        </AppText>
      </View>
      <DD1List></DD1List>
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

export default DropDown1;
