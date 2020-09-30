import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard2 from "./ProductCard2";
import database from "../store/tempdata";
function ProductList({ setCost, cost }) {
  return (
    <View style={styles.container}>
      {database.furnitures.map((item) => (
        <ProductCard2
          key={item.id}
          item={item}
          setCost={setCost}
          cost={cost}
        ></ProductCard2>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default ProductList;
