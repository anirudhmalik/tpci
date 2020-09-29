import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function SubmitButton(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <AppText style={styles.text}>Submit</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 40,
    width: "100%",
    paddingLeft: 10,
    marginBottom: 20,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 40,
    width: "45%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    color: colors.white,
  },
});

export default SubmitButton;
