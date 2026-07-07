import { Pressable, Text, View } from "react-native";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { theme } from "@/lib/theme";
import type { WardrobeItem } from "@/lib/mockData";

type Props = {
  item: WardrobeItem;
  onPress?: () => void;
};

export function ItemCard({ item, onPress }: Props) {
  const inner = (
    <Card style={{ padding: 12, gap: 10 }}>
      <View style={{ aspectRatio: 0.82, borderRadius: 16, backgroundColor: item.colors[0] ?? theme.colors.surface2, borderWidth: 1, borderColor: theme.colors.border }} />
      <Text style={{ fontWeight: "800", color: theme.colors.text }} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={{ color: theme.colors.muted, fontSize: 12 }} numberOfLines={1}>
        {item.brand}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Badge label={item.category} tone={item.favorite ? "gold" : "accent"} />
        <Text style={{ color: theme.colors.muted, fontSize: 12 }}>usado {item.worn ?? 0}x</Text>
      </View>
    </Card>
  );

  if (!onPress) return inner;
  return <Pressable onPress={onPress}>{inner}</Pressable>;
}
