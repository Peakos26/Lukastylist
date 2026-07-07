import { useEffect, useMemo, useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Screen } from "@/components/ui/Screen";
import { SlideDots } from "@/components/ui/SlideDots";
import { theme } from "@/lib/theme";
import { communityShots } from "@/lib/assets";

const slides = [
  {
    title: "Seu guarda-roupa, organizado",
    description: "Cadastre peças, acompanhe uso e veja tudo com clareza.",
    icon: "shirt-outline" as const,
  },
  {
    title: "Looks criados por IA para cada dia",
    description: "Sugestões ajustadas ao clima, ocasião e seu estilo.",
    icon: "sparkles-outline" as const,
  },
  {
    title: "Descubra seu estilo com a comunidade",
    description: "Explore referências, salve favoritos e monte a semana.",
    icon: "grid-outline" as const,
  },
];

export default function SplashScreen() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <Screen scroll>
      <LinearGradient
        colors={[theme.colors.blush, theme.colors.cream, theme.colors.surface]}
        style={{ borderRadius: 28, padding: 20, minHeight: 640 }}
      >
        <View style={{ alignItems: "center", paddingTop: 14 }}>
          <View style={{ width: 84, height: 84, borderRadius: 24, backgroundColor: theme.colors.surface, alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
            <Text style={{ fontSize: 32, fontWeight: "800", color: theme.colors.accent }}>FMW</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text, textAlign: "center" }}>
            Find My Wear
          </Text>
          <Text style={{ marginTop: 6, color: theme.colors.muted, textAlign: "center" }}>
            Enjoy your dreams
          </Text>
        </View>

        <Card style={{ marginTop: 24, padding: 18 }}>
          <View style={{ height: 220, borderRadius: 22, backgroundColor: "#fff8fb", overflow: "hidden", marginBottom: 18 }}>
            <ImageBackground
              source={{ uri: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80" }}
              resizeMode="cover"
              style={{ flex: 1, justifyContent: "flex-end" }}
            >
              <View style={{ backgroundColor: "rgba(255,255,255,0.75)", padding: 16 }}>
                <Text style={{ color: theme.colors.text, fontWeight: "700", fontSize: 22 }}>
                  {slide.title}
                </Text>
                <Text style={{ color: theme.colors.muted, marginTop: 6, lineHeight: 20 }}>
                  {slide.description}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <FlatList
            data={communityShots}
            keyExtractor={(_, index) => String(index)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, marginBottom: 18 }}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 110, height: 150, borderRadius: 18, backgroundColor: "#efe8e2" }} resizeMode="cover" />
            )}
          />

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: theme.colors.accentSoft, alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={slide.icon} size={20} color={theme.colors.accent} />
              </View>
              <View>
                <Text style={{ fontWeight: "700", color: theme.colors.text }}>Onboarding</Text>
                <Text style={{ color: theme.colors.muted }}>Sua vitrine começa aqui</Text>
              </View>
            </View>
            <SlideDots count={slides.length} activeIndex={active} />
          </View>
        </Card>

        <View style={{ marginTop: 18, gap: 12 }}>
          <Button title="Comecar" onPress={() => router.push("/(auth)/login")} />
          <Button title="Criar conta" variant="secondary" onPress={() => router.push("/(auth)/register")} />
          <Pressable onPress={() => router.push("/(tabs)")}>
            <Text style={{ textAlign: "center", color: theme.colors.muted, fontWeight: "600" }}>
              Entrar com uma conta existente
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </Screen>
  );
}
