import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard2 from "./ProductCard2";
import database from "../store/tempdata";
function ProductList2(props) {
  return (
    <View style={styles.container}>
      {database.services.map((item) => (
        <ProductCard2 key={item.id} item={item}></ProductCard2>
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
