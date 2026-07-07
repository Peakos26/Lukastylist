import { Text, View } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  label: string;
  tone?: "accent" | "gold" | "success" | "warning" | "danger";
};

export function Badge({ label, tone = "accent" }: Props) {
  const colorMap = {
    accent: theme.colors.accent,
    gold: theme.colors.gold,
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
  };

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: `${colorMap[tone]}1A`,
      }}
    >
      <Text style={{ color: colorMap[tone], fontWeight: "700", fontSize: 12 }}>{label}</Text>
    </View>
  );
}
