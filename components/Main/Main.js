import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Touchable,
} from "react-native";
import { globalStyles } from "../../styles/style";
import { useState } from "react";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google is the best",
      fullText: "Google is the best search engine in the world",
    },
    {
      name: "Apple",
      anons: "Apple is the best",
      fullText: "Apple is the best company in the world",
    },
    {
      name: "Facebook",
      anons: "Facebook is the best",
      fullText: "Facebook is the best social network in the world",
    },
  ]);
  const loadScene = () => {
    navigation.navigate("Contacts");
  };

  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>Home</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <Touchable onPress={() => navigation.navigate("Contacts")}>
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </Touchable>
        )}
      />
      <Button title="Open page" onPress={loadScene} />
    </View>
  );
}

const styles = StyleSheet.create({});
