import { Modal, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { theme } from "@/lib/theme";

type Props = {
  open: boolean;
  onClose: () => void;
};

const actions = [
  { label: "Adicionar peca", icon: "camera-outline", href: "/item/add" as const },
  { label: "Criar look", icon: "shirt-outline", href: "/look/create" as const },
  { label: "Planejar semana", icon: "calendar-outline", href: "/(tabs)" as const },
  { label: "Importar de link", icon: "link-outline", href: "/item/add" as const },
];

export function FABMenu({ open, onClose }: Props) {
  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)", justifyContent: "flex-end" }}>
        <Pressable onPress={(e) => e.stopPropagation()} style={{ backgroundColor: theme.colors.surface, padding: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24, gap: 10 }}>
          {actions.map((action) => (
            <Pressable
              key={action.label}
              onPress={() => {
                onClose();
                router.push(action.href);
              }}
              style={{ flexDirection: "row", alignItems: "center", gap: 12, minHeight: 48, paddingHorizontal: 12, borderRadius: 16, backgroundColor: theme.colors.surface2 }}
            >
              <Ionicons name={action.icon} size={22} color={theme.colors.accent} />
              <Text style={{ fontWeight: "700", color: theme.colors.text }}>{action.label}</Text>
            </Pressable>
          ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
