import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
function TotalBill({ cost }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>TOTAL BILL AMOUNT</AppText>
        </View>
        <AppText style={styles.textCost}>{cost}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.medium,
    borderTopWidth: 1,
    flexDirection: "row",
    height: 50,
    width: "95%",
  },
  text: {
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  textCost: {
    color: colors.medium,
  },
});

export default TotalBill;
