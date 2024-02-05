import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Fruits from "./components/Fruits";
import Fontawesome from "@expo/vector-icons/FontAwesome"

export default function App() {
  const fruitItem = ["banana", "apple", "pear", "melon", "lemon"];
  return (
    <View style={styles.container}>
      <Fruits fruitItem={fruitItem} />
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection:"row"
  },
});
