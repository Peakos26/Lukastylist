import { Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { theme } from "@/lib/theme";

export default function LoginScreen() {
  return (
    <Screen scroll>
      <View style={{ paddingTop: 12, gap: 16 }}>
        <Text style={{ fontSize: 30, fontWeight: "800", color: theme.colors.text }}>Entrar</Text>
        <Text style={{ color: theme.colors.muted }}>Acesse seu armario, avatar e looks.</Text>

        <Card style={{ gap: 12 }}>
          <TextInput placeholder="Email" placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <TextInput placeholder="Senha" secureTextEntry placeholderTextColor={theme.colors.hint} style={inputStyle} />
          <Button title="Entrar" onPress={() => router.replace("/(tabs)")} />
          <Button title="Continuar com Google" variant="secondary" onPress={() => router.replace("/(tabs)")} />
          <Button title="Continuar com Apple" variant="ghost" onPress={() => router.replace("/(tabs)")} />
        </Card>

        <Pressable onPress={() => router.push("/(auth)/register")}>
          <Text style={{ textAlign: "center", color: theme.colors.accent, fontWeight: "700" }}>
            Criar conta
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
