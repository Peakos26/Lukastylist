import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/lib/theme";

type Props = {
  city: string;
  tempMin: number;
  tempMax: number;
  condition: string;
};

export function WeatherBadge({ city, tempMin, tempMax, condition }: Props) {
  return (
    <View
      style={{
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1, gap: 4 }}>
        <Text style={{ color: theme.colors.muted, fontWeight: "700" }}>{city} · Hoje</Text>
        <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text }}>{tempMin}°C / {tempMax}°C</Text>
        <Text style={{ color: theme.colors.muted }}>{condition}</Text>
      </View>
      <View style={{ width: 56, height: 56, borderRadius: 18, backgroundColor: theme.colors.accentSoft, alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="partly-sunny-outline" size={28} color={theme.colors.accent} />
      </View>
    </View>
  );
}
