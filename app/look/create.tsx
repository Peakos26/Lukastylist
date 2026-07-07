import { ScrollView, Text, TextInput, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { theme } from "@/lib/theme";
import { wardrobeItems } from "@/lib/mockData";
import { useState } from "react";

export default function CreateLookScreen() {
  const [selected, setSelected] = useState<string[]>(["1", "3", "5"]);

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>Criar look</Text>
          <Button title="Salvar" onPress={() => {}} />
        </View>

        <Card style={{ gap: 12 }}>
          <View style={{ height: 260, borderRadius: 22, backgroundColor: "#F2EBE7", borderWidth: 1, borderColor: theme.colors.border, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontWeight: "800", color: theme.colors.text }}>Area do look</Text>
            <Text style={{ color: theme.colors.muted, marginTop: 6, textAlign: "center" }}>Arraste ou selecione pecas para montar o flatlay.</Text>
          </View>
          <Button title="Ver no avatar" variant="secondary" onPress={() => {}} />
        </Card>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {["Tops", "Calcas", "Vestidos", "Sapatos", "Bolsas"].map((value) => (
            <Chip key={value} label={value} selected={value === "Tops"} onPress={() => {}} />
          ))}
        </ScrollView>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {wardrobeItems.map((item) => (
            <View key={item.id} style={{ width: "48%" }}>
              <Card style={{ gap: 10 }}>
                <View style={{ aspectRatio: 0.78, borderRadius: 16, backgroundColor: item.colors[0] }} />
                <Text style={{ fontWeight: "800", color: theme.colors.text }}>{item.name}</Text>
                <Text style={{ color: theme.colors.muted, fontSize: 12 }}>{item.brand}</Text>
                <Button
                  title={selected.includes(item.id) ? "Selecionada" : "Selecionar"}
                  variant={selected.includes(item.id) ? "primary" : "secondary"}
                  onPress={() => setSelected((current) => toggle(current, item.id))}
                />
              </Card>
            </View>
          ))}
        </View>

        <Card style={{ gap: 12 }}>
          <TextInput placeholder="Nome do look" placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <TextInput placeholder="Ocasião" placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <TextInput placeholder="Estilo" placeholderTextColor={theme.colors.hint} style={inputStyle} />
        </Card>
      </View>
    </Screen>
  );
}

function toggle(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

const inputStyle = {
  borderWidth: 1,
  borderColor: theme.colors.border,
  borderRadius: 16,
  paddingHorizontal: 14,
  paddingVertical: 12,
  color: theme.colors.text,
  backgroundColor: theme.colors.surface2,
} as const;
