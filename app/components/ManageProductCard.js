import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import UploadCardList from "./UploadCardList";

function ManageProductCard(props) {
  const [id, setId] = useState(1);
  const [count, setCount] = useState([{ id: id }]);
  const [visible2, setVisible2] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <AppText style={styles.text}>UPLOAD YOUR PRODUCTS</AppText>
      </View>
      <View style={styles.container3}>
        <AppText style={[{ color: colors.medium, fontSize: 16 }]}>
          Profile pages with detailed product descriptions and good images
          attract buyer attention. Please use the following section to upload
          your product image details
        </AppText>
      </View>
      {count.map((item) => (
        <UploadCardList
          key={item.id}
          setVisible2={setVisible2}
        ></UploadCardList>
      ))}
      {visible2 ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setId(id + 1);
            setCount([...count, { id: id + 1 }]);
            setVisible2(false);
          }}
        >
          <View style={styles.bottomContainer}>
            <MaterialCommunityIcons
              name={"plus-circle"}
              size={30}
              color={colors.medium}
            />
            <AppText style={styles.text2}>Add More products</AppText>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.bottomContainer}>
          <MaterialCommunityIcons
            name={"plus-circle"}
            size={30}
            color={colors.light}
          />
          <AppText style={styles.text3}>Add More products</AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    marginRight: 210,
    alignItems: "center",
  },

  container: {
    width: "100%",
    alignItems: "center",
  },
  container2: {
    marginTop: 10,
    height: 30,
    width: "95%",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  container3: {
    marginTop: 10,
    width: "95%",
    height: 60,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  text2: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.medium,
  },
  text3: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.light,
  },
});

export default ManageProductCard;
