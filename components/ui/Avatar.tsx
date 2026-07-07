import { Text, View } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  initials: string;
  size?: number;
};

export function Avatar({ initials, size = 44 }: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.accentSoft,
        borderWidth: 1,
        borderColor: theme.colors.border,
      }}
    >
      <Text style={{ color: theme.colors.accent, fontWeight: "800" }}>{initials}</Text>
    </View>
  );
}
