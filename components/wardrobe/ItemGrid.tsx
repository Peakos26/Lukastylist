import { FlatList, View } from "react-native";
import type { WardrobeItem } from "@/lib/mockData";
import { ItemCard } from "./ItemCard";

type Props = {
  items: WardrobeItem[];
};

export function ItemGrid({ items }: Props) {
  return (
    <FlatList
      data={items}
      numColumns={3}
      scrollEnabled={false}
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={{ gap: 10 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <ItemCard item={item} />
        </View>
      )}
    />
  );
}
