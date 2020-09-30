import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import TotalBill from "../components/TotalBill";
import SubmitButton from "../components/SubmitButton";
import DropDown1 from "../components/DropDown1";
import DropDown2 from "../components/DropDown2";
import DropDown3 from "../components/DropDown3";

function PurchaseService(props) {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [cost, setCost] = useState(0);
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={"Purchase Service"} />
        <SubHeader
          text={"MANAGE COMPLEMENTRY SERVICE"}
          visible={visible1}
          onPress={() => {
            setVisible1(!visible1);
            setVisible2(false);
            setVisible3(false);
          }}
        ></SubHeader>
        {visible1 ? <DropDown1 /> : <></>}
        <SubHeader
          text={"ORDER ADDITIONAL FURNITURE"}
          visible={visible2}
          onPress={() => {
            setVisible2(!visible2);
            setVisible1(false);
            setVisible3(false);
          }}
        />
        {visible2 ? <DropDown2 setCost={setCost} cost={cost} /> : <></>}
        <SubHeader
          text={"ORDER ADDITIONAL SERVICES"}
          visible={visible3}
          onPress={() => {
            setVisible3(!visible3);
            setVisible1(false);
            setVisible2(false);
          }}
        />
        {visible3 ? <DropDown3 setCost={setCost} cost={cost} /> : <></>}
        <TotalBill cost={cost} />
        <SubmitButton text={"Submit"} onPress={() => console.log("Submit")} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default PurchaseService;
