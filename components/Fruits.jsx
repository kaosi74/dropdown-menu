import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";

export default function Fruits({ fruitItem }) {
  const [showItems, setShowItems] = useState(false);
  const navigation = useNavigation()

  const handleFruitSelection = (fruit) => {
    switch (fruit) {
      case 'banana':
        navigation.navigate('BananaScreen');
        break;
      case 'apple':
        navigation.navigate('AppleScreen');
        break;
      default:
        break;
    }
  }

  const toggleItems = () => {
    setShowItems(!showItems);
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={toggleItems} style={styles.fruitItem}>
        <Text style={styles.fruitText}>show items</Text>
      </TouchableOpacity> */}
      <Ionicons size={50} name="ellipsis-vertical" onPress={toggleItems} />
      {showItems && (
        <View style={styles.itemsContainer}>
          {fruitItem.map((fruit, index) => (
            <Text key={index} style={styles.fruitText}>
              {fruit}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  itemsContainer: {
    marginTop: 10,
    position: 'absolute',
    width: '200%',
    top: 60
  },
  fruitText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
