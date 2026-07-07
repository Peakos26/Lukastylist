import { Pressable, Text, View } from "react-native";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { theme } from "@/lib/theme";
import type { Look } from "@/lib/mockData";

type Props = {
  look: Look;
  onPress?: () => void;
  compact?: boolean;
};

export function LookCard({ look, onPress, compact = false }: Props) {
  const content = (
    <Card style={{ padding: 14, gap: 10, minHeight: compact ? 120 : 170 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <View style={{ gap: 4, flex: 1 }}>
          <Text style={{ fontWeight: "800", color: theme.colors.text, fontSize: 16 }} numberOfLines={1}>
            {look.name}
          </Text>
          <Text style={{ color: theme.colors.muted }}>{look.occasion} · {look.style}</Text>
        </View>
        <Badge label={look.style} tone="accent" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Avatar initials={look.avatar} size={compact ? 42 : 56} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <View style={{ height: 10, borderRadius: 999, backgroundColor: "#F4E5E8", marginBottom: 8 }} />
          <View style={{ height: 10, borderRadius: 999, backgroundColor: "#EDE8E5", width: "86%", marginBottom: 8 }} />
          <View style={{ height: 10, borderRadius: 999, backgroundColor: "#F0E6D5", width: "70%" }} />
        </View>
      </View>
    </Card>
  );

  if (!onPress) return content;
  return <Pressable onPress={onPress}>{content}</Pressable>;
}
