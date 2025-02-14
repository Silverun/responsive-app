import React from "react";
import {
  Text,
  ListRenderItem,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { coffeeItems, Item } from "../../../items";
import { WIDTH } from "../../../constants/dimentions";
import { COLORS } from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../../../navigation/stack";
import { useHomeNavigation } from "../../../navigation/types";

interface ItemListProps {}

export const ItemList = ({}: ItemListProps) => {
  const navigation = useHomeNavigation();

  const renderItem: ListRenderItem<Item> = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => index === 0 && navigation.navigate("Details", { item })}
      style={style.card_container}
    >
      <Image source={item.image} style={style.item_image} />
      <View style={style.text_container}>
        <Text>{item.name}</Text>
        <Text>{item.type}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginBottom: 16,
      }}
      data={coffeeItems}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

const style = StyleSheet.create({
  list_container: {
    borderWidth: 1,
    // flex: 1,
  },
  card_container: {
    width: "48%",
    backgroundColor: COLORS.card_bg,
    padding: 12,
    // borderWidth: 1,
    borderRadius: 16,
  },
  text_container: {
    marginTop: 4,
  },
  item_image: { width: "100%", borderRadius: 16, resizeMode: "cover" },
});
