import { Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";

export default function RegisterScreen() {
  return (
    <Screen scroll>
      <View style={{ paddingTop: 12, gap: 16 }}>
        <Text style={{ fontSize: 30, fontWeight: "800", color: theme.colors.text }}>Criar conta</Text>
        <Text style={{ color: theme.colors.muted }}>Vamos montar seu perfil e suas medidas.</Text>

        <Card style={{ gap: 12 }}>
          <TextInput placeholder="Nome" placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <TextInput placeholder="Email" placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <TextInput placeholder="Senha" secureTextEntry placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <Button title="Seguir para avatar" onPress={() => router.push("/avatar/create")} />
        </Card>

        <Pressable onPress={() => router.back()}>
          <Text style={{ textAlign: "center", color: theme.colors.muted, fontWeight: "700" }}>
            Ja tenho conta
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: theme.colors.border,
  borderRadius: 16,
  paddingHorizontal: 14,
  paddingVertical: 14,
  color: theme.colors.text,
  backgroundColor: theme.colors.surface2,
} as const;
