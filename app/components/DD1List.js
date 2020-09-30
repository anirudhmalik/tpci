import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import InclusionList from "./InclusionList";

function DD1List({ setCost }) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.text}>YOUR CURRENT SELECTION</AppText>
      </View>
      <View style={styles.container2}>
        <AppText style={styles.text}>1.18 SQM RAW SPACE</AppText>
      </View>
      <InclusionList setCost={setCost}></InclusionList>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: "center",
    height: 30,
    width: "95%",
    borderBottomWidth: 0.5,
  },
  container2: {
    marginTop: 10,
    justifyContent: "center",
    height: 30,
    width: "95%",
  },
  text: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default DD1List;
