import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
// import { useFonts } from "expo-font";
import { Courses } from "./components/Courses";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
const localImage = require("./assets/cocktail.jpg");

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <SafeAreaView style={styles.container}> */}
        <Courses />
        <StatusBar style="auto" />
        {/* </SafeAreaView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
