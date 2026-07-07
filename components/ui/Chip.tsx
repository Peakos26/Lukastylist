import { Pressable, Text } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  label: string;
  selected?: boolean;
  onPress: () => void;
};

export function Chip({ label, selected = false, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        minHeight: 36,
        paddingHorizontal: 14,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: selected ? theme.colors.accent : theme.colors.border,
        backgroundColor: selected ? theme.colors.accentSoft : theme.colors.surface,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "700", color: selected ? theme.colors.accent : theme.colors.text }}>{label}</Text>
    </Pressable>
  );
}
