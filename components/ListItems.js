import { Trash2Icon } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const ListItems = ({ item, handleDeletTodo }) => {
  return (
    <View>
      <Text style={styles.text}>{item?.title}</Text>
      <Trash2Icon
        onPress={() => handleDeletTodo(item.key)}
        style={{ position: "absolute", top: 40, right: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "#f7287b",
  },
  text: {
    width: "60%",
    textAlign: "center",
    padding: 20,
    marginTop: 20,
    marginLeft: "20%",
    color: "black",
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    fontWeight: "bold",
    position: "relative",
  },
});
