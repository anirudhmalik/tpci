import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function SubmitButton2({ text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <AppText style={styles.text}>{text}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 40,
    width: "50%",
    paddingLeft: 10,
    marginBottom: 20,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 40,
    width: "95%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    color: colors.white,
  },
});

export default SubmitButton2;
