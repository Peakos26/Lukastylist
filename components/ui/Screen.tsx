import { PropsWithChildren } from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/lib/theme";

type Props = PropsWithChildren<{
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

export function Screen({ children, scroll = false, style }: Props) {
  const content = (
    <View style={[{ flex: 1, backgroundColor: theme.colors.background, padding: 16 }, style]}>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {scroll ? <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{content}</ScrollView> : content}
    </SafeAreaView>
  );
}
