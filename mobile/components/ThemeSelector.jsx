import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { THEME_NAMES, THEMES } from "../constants/colors.js";

const ThemeSelector = () => {
  const { currentTheme, changeTheme, colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const themeDisplayNames = {
    coffee: "Coffee",
    forest: "Forest",
    purple: "Purple",
    ocean: "Ocean",
  };

  const handleThemeChange = async (themeName) => {
    await changeTheme(themeName);
    setIsVisible(false);
  };

  const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 20,
      backgroundColor: colors.card,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 20,
      margin: 20,
      minWidth: 300,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 20,
      textAlign: "center",
    },
    themeList: {
      gap: 12,
    },
    themeOption: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.border,
    },
    themeOptionSelected: {
      borderColor: colors.primary,
      backgroundColor: colors.primary + "10",
    },
    themeColorPreview: {
      width: 24,
      height: 24,
      borderRadius: 12,
      marginRight: 12,
    },
    themeName: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
      flex: 1,
    },
    checkIcon: {
      marginLeft: 8,
    },
    closeButton: {
      marginTop: 20,
      padding: 12,
      backgroundColor: colors.border,
      borderRadius: 12,
      alignItems: "center",
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsVisible(true)}
      >
        <Ionicons name="color-palette-outline" size={22} color={colors.text} />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={styles.modalTitle}>Choose Theme</Text>

            <View style={styles.themeList}>
              {THEME_NAMES.map((themeName) => {
                const isSelected = currentTheme === themeName;
                const themeColors = THEMES[themeName];

                return (
                  <TouchableOpacity
                    key={themeName}
                    style={[
                      styles.themeOption,
                      isSelected && styles.themeOptionSelected,
                    ]}
                    onPress={() => handleThemeChange(themeName)}
                  >
                    <View
                      style={[
                        styles.themeColorPreview,
                        { backgroundColor: themeColors.primary },
                      ]}
                    />
                    <Text style={styles.themeName}>
                      {themeDisplayNames[themeName]}
                    </Text>
                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color={colors.primary}
                        style={styles.checkIcon}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ThemeSelector;
