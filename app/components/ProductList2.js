import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard3 from "./ProductCard3";
import database from "../store/tempdata";
function ProductList2({ setCost, cost }) {
  return (
    <View style={styles.container}>
      {database.services.map((item) => (
        <ProductCard3
          key={item.id}
          item={item}
          setCost={setCost}
          cost={cost}
        ></ProductCard3>
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

export default ProductList2;
