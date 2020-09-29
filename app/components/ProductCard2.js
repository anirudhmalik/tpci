import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function ProductCard2({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AppText style={styles.titleText}>{item.title}</AppText>
      </View>
      <View style={styles.container2}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.quantityContainer}>
          <AppText style={styles.quantity}>{item.quantity}</AppText>
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
        <View style={styles.priceContainer}>
          <AppText style={styles.quantity}>999.99</AppText>
        </View>
        <View style={styles.icon3}>
          {item.available ? (
            item.status ? (
              <View style={styles.icon2}>
                <MaterialCommunityIcons
                  name={"cart-minus"}
                  size={20}
                  color={colors.black}
                />
                <AppText style={[{ marginLeft: 8, fontSize: 16 }]}>
                  Remove
                </AppText>
              </View>
            ) : (
              <View style={styles.icon2}>
                <MaterialCommunityIcons
                  name={"cart-plus"}
                  size={20}
                  color={colors.green}
                />
                <AppText style={[{ marginLeft: 8, fontSize: 16 }]}>Add</AppText>
              </View>
            )
          ) : (
            <View style={styles.icon2}>
              <MaterialCommunityIcons
                name={"tag"}
                size={20}
                color={colors.danger}
              />
              <AppText style={[{ marginLeft: 8, fontSize: 16 }]}>
                Sold out
              </AppText>
            </View>
          )}
        </View>
      </View>
      <AppText style={[{ fontSize: 14 }]}>{"$" + item.price}</AppText>
      <AppText style={styles.descriptionText}>{item.description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 150,
    width: "95%",
  },
  container2: {
    marginVertical: 10,
    flexDirection: "row",
  },
  descriptionText: {
    fontSize: 14,
    color: colors.medium,
  },
  image: {
    width: 60,
    height: 60,
  },
  icon3: {
    marginLeft: 20,
    justifyContent: "center",
  },
  icon2: {
    flexDirection: "row",
  },
  priceContainer: {
    marginLeft: 20,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    color: colors.medium,
    fontWeight: "bold",
  },
  quantity: {
    color: colors.medium,
  },
  quantityContainer: {
    marginLeft: 60,
    justifyContent: "center",
  },
});

export default ProductCard2;
