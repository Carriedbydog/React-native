import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export const Form = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  const handleOnTextChange = (value) => {
    setValue(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleOnTextChange}
        placeholder="Enter a todo item..."
        value={value}
      />
      <Button
        title={"Add new todo"}
        color={"green"}
        onPress={() => {
          handleAddTodo(value);
          setValue("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "60%",
    marginVertical: 30,
    marginHorizontal: "20%",
  },
});
