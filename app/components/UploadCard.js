import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function UploadCard({ visible, name, setName, description, setDescription }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {visible ? (
          <AppText style={styles.productname}>{name}</AppText>
        ) : (
          <View style={styles.input1}>
            <TextInput
              maxLength={16}
              placeholder="Product Name"
              defaultValue={name}
              onChangeText={(value) => setName(value)}
              placeholderTextColor={colors.medium}
              style={styles.text}
            />
          </View>
        )}
        {visible ? (
          <AppText style={styles.productname}>{description}</AppText>
        ) : (
          <View style={styles.input2}>
            <TextInput
              maxLength={16}
              placeholder={"Product Description"}
              defaultValue={description}
              onChangeText={(value) => setDescription(value)}
              placeholderTextColor={colors.medium}
              style={styles.text}
            />
          </View>
        )}
      </View>
      <View style={styles.container3}>
        <View style={styles.add}>
          <MaterialCommunityIcons
            name={"camera"}
            size={60}
            color={colors.light}
          />
        </View>
        <AppText style={styles.text2}>JPG/PNG/GIF (500KB)</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.light,
    height: 130,
    width: 132,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 180,
    width: "95%",
    flexDirection: "row",
    paddingLeft: 10,
  },
  container2: {
    width: "60%",
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    marginTop: 10,
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.medium,
  },
  input2: {
    marginTop: 10,
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.medium,
  },
  productname: {
    marginTop: 20,
    color: colors.medium,
  },
  text: {
    color: colors.medium,
    fontSize: 18,
    flex: 1,
  },
  text2: {
    marginTop: 10,
    fontSize: 12,
    color: colors.medium,
  },
});

export default UploadCard;
