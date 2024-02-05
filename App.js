import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fruits from "./components/Fruits";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppleScreen from "./components/AppleScreen";
import BananaScreen from "./components/BananaScreen";

function HomeScreen({navigation}) {
  const fruitItem = ["banana", "apple"];
  return (
    <View style={styles.container}>
      <Fruits fruitItem={fruitItem} />
      <Text>Hello</Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("BananaScreen")}
      >
        <Text>One</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="BananaScreen" component={BananaScreen} />
        <Screen name="AppleScreen" component={AppleScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: "row",
    columnGap: 20,
  },
  touch: {
    paddingHorizontal: 20,
  }
});
