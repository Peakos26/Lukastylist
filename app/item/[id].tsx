import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";
import { wardrobeItems } from "@/lib/mockData";

export default function ItemDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = wardrobeItems.find((entry) => entry.id === id) ?? wardrobeItems[0];

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>{item.name}</Text>
        <Card style={{ gap: 12 }}>
          <View style={{ height: 300, borderRadius: 22, backgroundColor: item.colors[0] }} />
          <Text style={{ color: theme.colors.muted }}>{item.brand} · {item.category}</Text>
          <Button title="Editar" onPress={() => {}} />
        </Card>
      </View>
    </Screen>
  );
}
