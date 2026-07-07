import { View } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  count: number;
  activeIndex: number;
};

export function SlideDots({ count, activeIndex }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 6 }}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={{
            width: index === activeIndex ? 18 : 7,
            height: 7,
            borderRadius: 999,
            backgroundColor: index === activeIndex ? theme.colors.accent : "rgba(0,0,0,0.14)",
          }}
        />
      ))}
    </View>
  );
}
