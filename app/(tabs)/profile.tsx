import { Text, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { theme } from "@/lib/theme";
import { looks } from "@/lib/mockData";
import { LookCard } from "@/components/look/LookCard";

export default function ProfileScreen() {
  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Card style={{ gap: 14 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 26, fontWeight: "800", color: theme.colors.text }}>Helton Sales</Text>
              <Text style={{ color: theme.colors.muted }}>13 looks · 13 avatares · 221 itens</Text>
            </View>
            <Badge label="VIP" tone="gold" />
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {["Looks", "Favoritos", "Viagens"].map((label) => (
              <View key={label} style={{ flex: 1, padding: 12, borderRadius: 16, backgroundColor: theme.colors.surface2 }}>
                <Text style={{ fontWeight: "800", color: theme.colors.text }}>{label}</Text>
              </View>
            ))}
          </View>
        </Card>

        <View style={{ gap: 12 }}>
          {looks.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </View>
      </View>
    </Screen>
  );
}
