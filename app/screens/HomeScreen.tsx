import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ListRenderItem,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { coffeeItems, Item } from "../items";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  //   const navigation = useNavigation();

  const renderItem: ListRenderItem<Item> = ({ item, index }) => (
    <TouchableOpacity
      //   onPress={() => index === 0 && navigation.navigate("Details", { item })}
      style={{
        width: width * 0.45,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        margin: 8,
      }}
    >
      <Image
        source={item.image}
        style={{ width: "100%", height: 120, borderRadius: 12 }}
      />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <TextInput
        placeholder="Search coffee"
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <FlatList
        numColumns={2}
        data={coffeeItems}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default HomeScreen;
