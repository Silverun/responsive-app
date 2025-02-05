import React from "react";
import {
  Text,
  ListRenderItem,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { coffeeItems, Item } from "../../../items";
import { WIDTH } from "../../../constants/dimentions";
import { COLORS } from "../../../constants/colors";

interface ItemListProps {}

export const ItemList = ({}: ItemListProps) => {
  const renderItem: ListRenderItem<Item> = ({ item, index }) => (
    <TouchableOpacity
      //   onPress={() => index === 0 && navigation.navigate("Details", { item })}
      style={style.card_container}
    >
      <Image source={item.image} style={style.item_image} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      numColumns={2}
      data={coffeeItems}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

const style = StyleSheet.create({
  card_container: {
    width: WIDTH * 0.45,
    backgroundColor: COLORS.card_bg,
    borderRadius: 12,
    padding: 10,
    margin: 8,
  },
  item_image: { width: "100%", height: 120, borderRadius: 12 },
});
