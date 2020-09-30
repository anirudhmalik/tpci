import React from "react";
import { StyleSheet } from "react-native";
import PurchaseService from "./app/screen/PurchaseService";
import Manageproducts from "./app/screen/ManageProducts";

export default function App() {
  //return <PurchaseService></PurchaseService>;
  return <Manageproducts></Manageproducts>;
}

const styles = StyleSheet.create({
  container: {},
});
