import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";
import { looks } from "@/lib/mockData";

export default function LookDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const look = looks.find((item) => item.id === id) ?? looks[0];

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>{look.name}</Text>
        <Card style={{ gap: 12 }}>
          <View style={{ height: 320, borderRadius: 22, backgroundColor: "#F3E7E3" }} />
          <Text style={{ color: theme.colors.muted }}>{look.style} · {look.occasion}</Text>
          <Button title="Favoritar" onPress={() => {}} />
        </Card>
      </View>
    </Screen>
  );
}
