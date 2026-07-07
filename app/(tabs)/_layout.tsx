import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import type { ReactNode } from "react";
import { FABMenu } from "@/components/fab/FABMenu";
import { theme } from "@/lib/theme";

function TabBarButton({
  children,
  onPress,
  focused,
}: {
  children: ReactNode;
  onPress?: () => void;
  focused: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
      {children}
      <View style={{ height: 3, width: 18, borderRadius: 999, marginTop: 6, backgroundColor: focused ? theme.colors.accent : "transparent" }} />
    </Pressable>
  );
}

export default function TabLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 78,
            paddingBottom: 10,
            borderTopWidth: 1,
            borderTopColor: theme.colors.border,
            backgroundColor: theme.colors.surface,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabBarButton onPress={onPress} focused={Boolean(accessibilityState?.selected)}>
                <Ionicons name="home-outline" size={24} color={accessibilityState?.selected ? theme.colors.accent : theme.colors.text} />
              </TabBarButton>
            ),
          }}
        />
        <Tabs.Screen
          name="wardrobe"
          options={{
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabBarButton onPress={onPress} focused={Boolean(accessibilityState?.selected)}>
                <Ionicons name="shirt-outline" size={24} color={accessibilityState?.selected ? theme.colors.accent : theme.colors.text} />
              </TabBarButton>
            ),
          }}
        />
        <Tabs.Screen
          name="placeholder"
          options={{
            tabBarButton: () => (
              <Pressable onPress={() => setMenuOpen(true)} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: theme.colors.text, alignItems: "center", justifyContent: "center", marginTop: -18 }}>
                  <Ionicons name="add" size={28} color="#fff" />
                </View>
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="discover"
          options={{
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabBarButton onPress={onPress} focused={Boolean(accessibilityState?.selected)}>
                <Ionicons name="search-outline" size={24} color={accessibilityState?.selected ? theme.colors.accent : theme.colors.text} />
              </TabBarButton>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabBarButton onPress={onPress} focused={Boolean(accessibilityState?.selected)}>
                <Ionicons name="person-outline" size={24} color={accessibilityState?.selected ? theme.colors.accent : theme.colors.text} />
              </TabBarButton>
            ),
          }}
        />
      </Tabs>
      <FABMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
