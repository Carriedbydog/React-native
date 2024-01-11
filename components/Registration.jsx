import React, { useState } from "react";
import {
  Alert,
  Button,
  InputAccessoryView,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export const Registration = () => {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [text, setText] = useState(initialText);

  const handleImagePress = () =>
    Alert.alert("Image pressed!", "You did it!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
    ]);
  return (
    <>
      <SafeAreaView style={{ height: 100 }} keyboardDismissMode="interactive">
        <Text>Реєстрація</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 20,
            color: "white",
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Введіть ім'я"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 20,
            color: "white",
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Введіть пароль"
        />
        <TouchableWithoutFeedback onPress={handleImagePress}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: "https://legacy.reactjs.org/logo-og.png",
            }}
          />
        </TouchableWithoutFeedback>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button onPress={() => setText(initialText)} title="Clear text" />
        </InputAccessoryView>
      </SafeAreaView>
    </>
  );
};
