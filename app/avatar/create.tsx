import { ScrollView, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { theme } from "@/lib/theme";

const styles = ["Casual", "Business", "Esportivo", "Romantico", "Minimalista", "Glam", "Boho", "Confortavel"];
const occasions = ["Trabalho", "Escola", "Academia", "Festas", "Encontros", "Viagens", "Casa", "Eventos"];

export default function AvatarCreateScreen() {
  const [step, setStep] = useState(0);
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["Casual", "Minimalista"]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>(["Trabalho"]);

  const stepTitle = useMemo(() => ["Foto", "Medidas", "Estilo", "Avatar"], [step]);

  return (
    <Screen scroll>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>Criar avatar</Text>
        <Text style={{ color: theme.colors.muted }}>Etapa {step + 1} de 4 · {stepTitle[step]}</Text>

        <Card style={{ gap: 14 }}>
          {step === 0 ? (
            <>
              <View style={{ height: 240, borderRadius: 20, backgroundColor: "#F5E8E5", borderWidth: 1, borderColor: theme.colors.border, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: theme.colors.muted, fontWeight: "700" }}>Preview da foto frontal</Text>
              </View>
              <Button title="Tirar foto" onPress={() => setStep(1)} />
              <Button title="Upload da galeria" variant="secondary" onPress={() => setStep(1)} />
            </>
          ) : null}

          {step === 1 ? (
            <View style={{ gap: 10 }}>
              {["Altura", "Peso", "Busto", "Cintura", "Quadril", "Ombros", "Entrepernas"].map((label) => (
                <TextInput key={label} placeholder={label} placeholderTextColor={theme.colors.hint} style={inputStyle} />
              ))}
              <Button title="Nao sei medir" variant="secondary" onPress={() => setStep(2)} />
              <Button title="Continuar" onPress={() => setStep(2)} />
            </View>
          ) : null}

          {step === 2 ? (
            <View style={{ gap: 12 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
                {styles.map((value) => (
                  <Chip key={value} label={value} selected={selectedStyles.includes(value)} onPress={() => setSelectedStyles((current) => toggle(current, value))} />
                ))}
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
                {occasions.map((value) => (
                  <Chip key={value} label={value} selected={selectedOccasions.includes(value)} onPress={() => setSelectedOccasions((current) => toggle(current, value))} />
                ))}
              </ScrollView>
              <Button title="Gerar avatar" onPress={() => setStep(3)} />
            </View>
          ) : null}

          {step === 3 ? (
            <View style={{ gap: 12 }}>
              <View style={{ height: 260, borderRadius: 24, backgroundColor: "#fff", borderWidth: 1, borderColor: theme.colors.border, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 22, fontWeight: "800", color: theme.colors.text }}>Avatar proporcional</Text>
                <Text style={{ color: theme.colors.muted, marginTop: 6 }}>Tom de pele, cabelo e medidas aplicadas.</Text>
              </View>
              <Button title="Parece otimo" onPress={() => router.replace("/(tabs)")} />
              <Button title="Ajustar" variant="secondary" onPress={() => setStep(1)} />
            </View>
          ) : null}
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
