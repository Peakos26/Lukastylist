import { Text, TextInput, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";

export default function AddItemScreen() {
  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>Adicionar peça</Text>

        <Card style={{ gap: 12 }}>
          <View style={{ height: 220, borderRadius: 20, backgroundColor: "#EFE6E1", borderWidth: 1, borderColor: theme.colors.border, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontWeight: "800", color: theme.colors.text }}>Foto da peça</Text>
            <Text style={{ color: theme.colors.muted, marginTop: 6 }}>Camera, galeria ou link da loja.</Text>
          </View>
          <Button title="Tirar foto" onPress={() => {}} />
          <Button title="Galeria" variant="secondary" onPress={() => {}} />
        </Card>

        <Card style={{ gap: 10 }}>
          {["Nome", "Marca", "Categoria", "Subcategoria", "Tags"].map((label) => (
            <TextInput key={label} placeholder={label} placeholderTextColor={theme.colors.hint} style={inputStyle} />
          ))}
          <Button title="Salvar no guarda-roupa" onPress={() => {}} />
        </Card>
      </View>
    </Screen>
  );
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
