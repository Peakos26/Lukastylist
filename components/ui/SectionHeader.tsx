import { Pressable, Text, View } from "react-native";
import { theme } from "@/lib/theme";

type Props = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function SectionHeader({ title, actionLabel, onActionPress }: Props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text }}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onActionPress}>
          <Text style={{ color: theme.colors.accent, fontWeight: "700" }}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
