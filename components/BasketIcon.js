import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketIcons } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketIcons);
  const navigation = useNavigation();
  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;
