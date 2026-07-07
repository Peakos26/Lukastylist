import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { theme } from "@/lib/theme";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function Card({ children, style }: Props) {
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.lg,
          padding: 16,
          borderWidth: 1,
          borderColor: theme.colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
