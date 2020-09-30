import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function ProductCard3({ item, setCost, cost }) {
  const [totalPrice, SetTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AppText style={styles.titleText}>{item.title}</AppText>
      </View>
      <View style={styles.container2}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.quantityContainer}>
          <AppText style={styles.quantity}>{quantity}</AppText>
        </View>
        <View style={styles.icon3}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (item.available) {
                setQuantity(quantity + 1);
                SetTotalPrice(totalPrice + item.price);
              }
            }}
          >
            <MaterialCommunityIcons
              name={"chevron-up"}
              size={20}
              color={colors.black}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              if (quantity > 0 && item.available) {
                SetTotalPrice(totalPrice - item.price);
                setQuantity(quantity - 1);
              }
            }}
          >
            <MaterialCommunityIcons
              name={"chevron-down"}
              size={20}
              color={colors.black}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.priceContainer}>
          <AppText style={styles.quantity}>{totalPrice}</AppText>
        </View>
        <View style={styles.icon3}>
          {item.available ? (
            visible ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (quantity > 0) {
                    setCost(cost + totalPrice);
                    setVisible(false);
                  }
                }}
              >
                <View style={styles.icon2}>
                  <MaterialCommunityIcons
                    name={"cart-plus"}
                    size={20}
                    color={colors.green}
                  />
                  <AppText style={[{ marginLeft: 8, fontSize: 16 }]}>
                    Add
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => {
                  setCost(cost - totalPrice);
                  setVisible(true);
                  SetTotalPrice(0);
                  setQuantity(0);
                }}
              >
                <View style={styles.icon2}>
                  <MaterialCommunityIcons
                    name={"cart-minus"}
                    size={20}
                    color={colors.medium}
                  />
                  <AppText style={[{ marginLeft: 8, fontSize: 16 }]}>
                    Remove
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
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

export default ProductCard3;
