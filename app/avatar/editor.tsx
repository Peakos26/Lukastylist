import { Text, TextInput, View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";

export default function AvatarEditorScreen() {
  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>Editor de medidas</Text>
        <Card style={{ gap: 10 }}>
          {["Altura", "Peso", "Busto", "Cintura", "Quadril", "Ombros", "Entrepernas"].map((label) => (
            <TextInput key={label} placeholder={label} placeholderTextColor={theme.colors.hint} style={inputStyle} />
          ))}
          <Button title="Salvar medidas" onPress={() => {}} />
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
