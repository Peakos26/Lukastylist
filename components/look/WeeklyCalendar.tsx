import { FlatList, Pressable, Text, View } from "react-native";
import { theme } from "@/lib/theme";

export type WeekDay = {
  label: string;
  date: string;
  day: string;
  hasLook?: boolean;
  selected?: boolean;
};

type Props = {
  week: WeekDay[];
  onDatePress: (date: string) => void;
};

export function WeeklyCalendar({ week, onDatePress }: Props) {
  return (
    <FlatList
      data={week}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onDatePress(item.date)}
          style={{
            width: 62,
            paddingVertical: 12,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: item.selected ? theme.colors.accent : theme.colors.border,
            backgroundColor: item.selected ? theme.colors.accentSoft : theme.colors.surface,
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text style={{ fontSize: 11, color: theme.colors.muted, fontWeight: "700" }}>{item.day}</Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: item.hasLook ? theme.colors.text : theme.colors.surface2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: item.hasLook ? "#fff" : theme.colors.text, fontWeight: "800", fontSize: 12 }}>
              {item.label}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
}
