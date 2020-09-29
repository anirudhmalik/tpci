import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function SubHeader({ text, onPress, visible }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.textContainer}>
            <AppText style={styles.text}>{text}</AppText>
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={visible ? "minus-circle" : "plus-circle"}
              size={22}
              color={colors.black}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 40,
    width: "100%",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "95%",
    borderBottomWidth: 1,
  },
  icon: {},
  text: {
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default SubHeader;
