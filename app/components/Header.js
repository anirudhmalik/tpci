import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
function Header({ text }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Header;
