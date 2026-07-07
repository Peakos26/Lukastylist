import { Pressable, Text } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ title, onPress, variant = "primary" }: Props) {
  const backgroundColor =
    variant === "primary" ? theme.colors.accent : variant === "secondary" ? theme.colors.surface2 : "transparent";
  const color = variant === "primary" ? "#FFFFFF" : theme.colors.text;
  const borderWidth = variant === "ghost" ? 1 : 0;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: 48,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor,
        borderWidth,
        borderColor: theme.colors.border,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <Text style={{ fontWeight: "700", color }}>{title}</Text>
    </Pressable>
  );
}
