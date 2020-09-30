import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function ProductCard({ name, iconName, setCost }) {
  const price = 99;
  return (
    <View style={styles.container}>
      <View style={styles.icon1}>
        <MaterialCommunityIcons
          name={"crop-square"}
          size={30}
          color={colors.medium}
        />
      </View>
      <View style={styles.icon2}>
        <MaterialCommunityIcons
          name={iconName}
          size={80}
          color={colors.medium}
        />
      </View>
      <View>
        <AppText style={styles.text}>{name}</AppText>
      </View>
      <View>
        <AppText style={[{ color: colors.medium }]}>1</AppText>
      </View>
      <View style={styles.icon3}>
        <MaterialCommunityIcons
          name={"chevron-up"}
          size={20}
          color={colors.black}
        />
        <MaterialCommunityIcons
          name={"chevron-down"}
          size={20}
          color={colors.black}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 90,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {},
  icon2: {
    marginHorizontal: 10,
  },
  icon3: {
    marginLeft: 20,
  },
  text: {
    color: colors.medium,
    marginRight: 60,
  },
});

export default ProductCard;
