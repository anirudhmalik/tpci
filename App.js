import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PurchaseService from "./app/screen/PurchaseService";

export default function App() {
  return <PurchaseService></PurchaseService>;
}

const styles = StyleSheet.create({
  container: {},
});
