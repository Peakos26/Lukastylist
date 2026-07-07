import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WeeklyCalendar } from "@/components/look/WeeklyCalendar";
import { WeatherBadge } from "@/components/weather/WeatherBadge";
import { LookCard } from "@/components/look/LookCard";
import { theme } from "@/lib/theme";
import { looks, week } from "@/lib/mockData";
import { Avatar } from "@/components/ui/Avatar";
import { communityShots } from "@/lib/assets";

export default function HomeScreen() {
  return (
    <Screen scroll>
      <View style={{ gap: 18 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: theme.colors.muted, fontWeight: "700" }}>Bom dia</Text>
            <Text style={{ fontSize: 28, fontWeight: "800", color: theme.colors.text }}>Helton</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Pressable style={iconButton}><Text style={iconText}>🔔</Text></Pressable>
            <Avatar initials="H" size={46} />
          </View>
        </View>

        <Card style={{ gap: 12 }}>
          <SectionHeader title="Semana" />
          <WeeklyCalendar week={week} onDatePress={() => router.push("/look/create")} />
        </Card>

        <WeatherBadge city="Sao Paulo" tempMin={18} tempMax={22} condition="Vista-se em camadas" />

        <View style={{ gap: 12 }}>
          <SectionHeader title="Looks sugeridos para hoje" actionLabel="Ver todos" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            {looks.map((look) => (
              <Pressable key={look.id} onPress={() => router.push(`/look/${look.id}`)}>
                <LookCard look={look} compact />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <Card style={{ gap: 12 }}>
          <SectionHeader title="Sugestao de amanha" />
          <Text style={{ color: theme.colors.muted }}>
            Reuniao externa, temperatura amena e uma combinacao mais polida.
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            {communityShots.slice(0, 3).map((source, index) => (
              <Image key={index} source={source} style={{ width: 170, height: 220, borderRadius: 18, backgroundColor: "#E9E1DB" }} resizeMode="cover" />
            ))}
          </ScrollView>
        </Card>
      </View>
    </Screen>
  );
}

const iconButton = {
  width: 42,
  height: 42,
  borderRadius: 14,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.surface,
  borderWidth: 1,
  borderColor: theme.colors.border,
} as const;

const iconText = {
  fontSize: 18,
} as const;
