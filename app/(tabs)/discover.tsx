import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { theme } from "@/lib/theme";
import { discoverLooks } from "@/lib/mockData";
import { useState } from "react";
import { communityShots } from "@/lib/assets";

const filters = ["Para voce", "Tendencias", "Recentes", "Business", "Minimalista", "Verão 2026"];

export default function DiscoverScreen() {
  const [selected, setSelected] = useState("Para voce");

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <TextInput
          placeholder="Pesquisar pessoas, produtos, marcas..."
          placeholderTextColor={theme.colors.hint}
          style={{
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 18,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: theme.colors.surface,
            color: theme.colors.text,
          }}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {filters.map((filter) => (
            <Chip key={filter} label={filter} selected={selected === filter} onPress={() => setSelected(filter)} />
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {discoverLooks.map((item) => (
            <View key={item.id} style={{ width: "48%" }}>
              <Card style={{ gap: 12 }}>
                <Image
                  source={communityShots[Number(item.id.slice(1)) % communityShots.length]}
                  style={{ aspectRatio: 0.82, borderRadius: 18, backgroundColor: item.tone }}
                  resizeMode="cover"
                />
                <Text style={{ fontWeight: "800", color: theme.colors.text }}>{item.title}</Text>
                <Text style={{ color: theme.colors.muted }} numberOfLines={1}>{item.location}</Text>
                <Text style={{ color: theme.colors.muted }}>views {item.views}</Text>
              </Card>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
}
