import { ScrollView, Text, TextInput, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { ItemGrid } from "@/components/wardrobe/ItemGrid";
import { theme } from "@/lib/theme";
import { wardrobeItems } from "@/lib/mockData";
import { useMemo, useState } from "react";

const filters = [
  { label: "Tudo", value: "all" },
  { label: "Top", value: "top" },
  { label: "Calcas", value: "bottom" },
  { label: "Vestidos", value: "dress" },
  { label: "Casacos", value: "outerwear" },
  { label: "Sapatos", value: "shoes" },
  { label: "Bolsas", value: "bag" },
];

export default function WardrobeScreen() {
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  const items = useMemo(() => {
    return wardrobeItems.filter((item) => {
      const matchesFilter = selected === "all" || item.category.toLowerCase() === selected;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [search, selected]);

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <SectionHeader title="Guarda-roupa" actionLabel="+ Add" />

        <Card style={{ gap: 14 }}>
          <Text style={{ fontSize: 24, fontWeight: "800", color: theme.colors.text }}>221 itens</Text>
          <Text style={{ color: theme.colors.muted }}>+12 este mes · uso do closet em 18%</Text>
          <View style={{ height: 82, borderRadius: 18, backgroundColor: "#F6EEF1" }} />
        </Card>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {filters.map((filter) => (
            <Chip key={filter.value} label={filter.label} selected={selected === filter.value} onPress={() => setSelected(filter.value)} />
          ))}
        </ScrollView>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar pecas"
          placeholderTextColor={theme.colors.hint}
          style={{
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 16,
            paddingHorizontal: 14,
            paddingVertical: 14,
            color: theme.colors.text,
            backgroundColor: theme.colors.surface,
          }}
        />

        <ItemGrid items={items} />
      </View>
    </Screen>
  );
}
