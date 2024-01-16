import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { globalStyles } from "../../styles/style";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google is the best",
      fullText: "Google is the best search engine in the world",
      key: "1",
      img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "Apple",
      anons: "Apple is the best",
      fullText: "Apple is the best company in the world",
      key: "2",
      img: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202103181147",
    },
    {
      name: "Facebook",
      anons: "Facebook is the best",
      fullText: "Facebook is the best social network in the world",
      key: "3",
      img: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
  ]);

  return (
    <View style={globalStyles.main}>
      <Text style={[globalStyles.title, styles.header]}>Home</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={styles.img}
              source={{
                width: "100%",
                height: 200,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    color: "#333",
    // fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  img: {
    marginBottom: 20,
    objectFit: "contain",
  },
});
