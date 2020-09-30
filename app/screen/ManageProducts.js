import React, { useRef } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import ManageProductCard from "../components/ManageProductCard";

function ManageProducts(props) {
  const scrollView = useRef();
  return (
    <Screen>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsVerticalScrollIndicator={false}
      >
        <Header text={"Manage Products"} />
        <ManageProductCard></ManageProductCard>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ManageProducts;
