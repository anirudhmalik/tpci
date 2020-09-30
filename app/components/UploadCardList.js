import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import UploadCard from "./UploadCard";
import SubmitButton from "./SubmitButton";
import SubmitButton2 from "./SubmitButton2";

function UploadCardList({ setVisible2 }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [del, setDel] = useState(false);
  return (
    <>
      {del ? (
        <></>
      ) : (
        <>
          <UploadCard
            visible={visible}
            setVisible={setVisible}
            name={name}
            setName={setName}
            setDescription={setDescription}
            description={description}
          ></UploadCard>
          {visible ? (
            <View style={styles.buttonContainer}>
              <SubmitButton2
                text={"Edit"}
                onPress={() => {
                  setVisible(false);
                }}
              ></SubmitButton2>
              <SubmitButton2
                text={"Delete"}
                onPress={() => {
                  setVisible(false);
                  setDescription("");
                  setName("");
                  setDel(true);
                }}
              ></SubmitButton2>
            </View>
          ) : (
            <SubmitButton
              text={"Upload"}
              onPress={() => {
                setVisible(true);
                setVisible2(true);
              }}
            />
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
});

export default UploadCardList;
