import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { HEIGHT } from "../constants/dimentions";

type DetailsScreenProps = StackScreenProps<HomeStackParamList, "Details">;

export const Details = ({ route, navigation }: DetailsScreenProps) => {
  const { item } = route.params;
  const rowGap = HEIGHT * 0.03;

  return (
    <ScrollView
      bounces={false}
      overScrollMode="never"
      contentContainerStyle={[style.container, { rowGap }]}
    >
      <View style={[style.container_inner, { rowGap }]}>
        <View style={style.image_container}>
          <Image
            resizeMethod="scale"
            style={style.image}
            source={require("@images/big/1.png")}
          />
        </View>
        {/* description top */}
        <View style={style.desc_top}>
          <View style={style.desc_top_left}>
            <Text style={style.desc_top_left_name}>{item.name}</Text>
            <Text style={style.text_type}>Ice/Hot</Text>
            <View style={style.desc_top_rating}>
              <Image source={require("@images/star.png")} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}> 4.8 </Text>
              <Text style={style.text_type}>(230)</Text>
            </View>
          </View>
          {/* Top icons */}
          <View style={style.desc_top_icons}>
            <View style={style.desc_top_icon}>
              <Image source={require("@images/icons/bike.png")} />
            </View>
            <View style={style.desc_top_icon}>
              <Image source={require("@images/icons/bean.png")} />
            </View>
            <View style={style.desc_top_icon}>
              <Image source={require("@images/icons/milk.png")} />
            </View>
          </View>
        </View>
        {/* divider */}
        <View style={style.divider} />
        {/* description bottom */}
        <View>
          <Text style={style.text_desc_label}>Description</Text>
          <Text style={style.text_desc}>
            {item.description}
            <Text style={style.text_desc_expand}> Read more</Text>
          </Text>
        </View>
        {/* Size picker*/}
        <View>
          <Text style={style.size_picker_label}>Size</Text>
          {/* Pills */}
          <View style={style.size_picker_pills}>
            <View style={style.size_picker_pill}>
              <Text>S</Text>
            </View>
            <View
              style={[
                style.size_picker_pill,
                {
                  borderColor: COLORS.button,
                  backgroundColor: "#F9F2ED",
                },
              ]}
            >
              <Text style={{ color: COLORS.button }}>M</Text>
            </View>
            <View style={style.size_picker_pill}>
              <Text>L</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Add to cart */}
      <View style={style.add_to_cart}>
        <View>
          <Text style={{ color: COLORS.text_sec }}>Price</Text>
          <Text style={style.add_to_cart_price}>$ {item.price}</Text>
        </View>
        <View style={style.add_to_cart_button}>
          <Text style={style.add_to_cart_button_text}>Buy Now</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg_primary,
  },
  container_inner: {
    paddingHorizontal: 24,
    paddingTop: 24,
    width: "100%",
    rowGap: 16,
    // paddingBottom: 24,
  },
  image_container: {
    // borderWidth: 1,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 18,
  },
  desc_top: {
    // backgroundColor: "white",
    flexDirection: "row",
  },
  desc_top_left: {
    rowGap: 4,
  },
  text_type: {
    color: COLORS.text_sec,
  },
  text_desc_label: {
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  desc_top_left_name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  desc_top_rating: {
    alignItems: "center",
    paddingTop: 8,
    flexDirection: "row",
  },
  desc_top_icons: {
    flex: 1,
    // backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 12,
  },
  text_desc: {
    color: COLORS.text_sec,
    fontSize: 16,
  },
  text_desc_expand: {
    color: COLORS.button,
    fontWeight: "bold",
  },
  desc_top_icon: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: COLORS.icons_bg,
  },
  divider: {
    width: "80%",
    alignSelf: "center",
    height: 1,
    backgroundColor: COLORS.text_sec,
  },
  size_picker_label: {
    paddingBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  size_picker_pills: {
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  size_picker_pill: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: COLORS.text_sec,
    width: "30%",
    paddingVertical: "3%",
  },
  add_to_cart: {
    paddingTop: "5%",
    paddingBottom: "5%",
    height: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  add_to_cart_price: {
    paddingTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.button,
  },
  add_to_cart_button: {
    backgroundColor: COLORS.button,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    width: "65%",
    paddingVertical: "6%",
    alignSelf: "flex-start",
  },
  add_to_cart_button_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
