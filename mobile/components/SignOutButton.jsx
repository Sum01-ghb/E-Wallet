import { useClerk } from "@clerk/clerk-expo";
import { Alert, TouchableOpacity } from "react-native";
import { createStyles } from "../assets/styles/home.styles.js";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={colors.text} />
    </TouchableOpacity>
  );
};
