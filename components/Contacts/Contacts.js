import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/style";

export default function Contacts({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.main}>
      <Text style={globalStyles.title}>Contacts</Text>
      <Button title="Go back" onPress={loadScene} />
    </View>
  );
}

const styles = StyleSheet.create({});
