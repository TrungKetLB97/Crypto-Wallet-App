import { View, Text } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS } from "../constants";

export default function HeaderBar({ title }) {
  return (
    <View
      style={{
        height: 100,
        paddingHorizontal: SIZES.padding,
        justifyContent: "flex-end",
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{title}</Text>
    </View>
  );
}
