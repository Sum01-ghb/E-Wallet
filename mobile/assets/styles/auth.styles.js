import { StyleSheet } from "react-native";

export const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
      justifyContent: "center",
    },
    illustration: {
      width: 320,
      height: 310,
      resizeMode: "contain",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.text,
      marginVertical: 15,
      textAlign: "center",
    },
    input: {
      backgroundColor: colors.white,
      borderRadius: 12,
      paddingVertical: 15,
      paddingRight: 15,
      paddingLeft: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
      fontSize: 16,
      color: colors.text,
    },
    errorInput: {
      borderColor: colors.expense,
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: 16,
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: "600",
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    footerText: {
      color: colors.text,
      fontSize: 16,
    },
    linkText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: "600",
    },
    verificationContainer: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    verificationTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 20,
      textAlign: "center",
    },
    verificationInput: {
      backgroundColor: colors.white,
      borderRadius: 12,
      padding: 15,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
      fontSize: 16,
      color: colors.text,
      width: "100%",
      textAlign: "center",
      letterSpacing: 2,
    },

    // 🔴 Error styles
    errorBox: {
      backgroundColor: "#FFE5E5",
      padding: 12,
      borderRadius: 8,
      borderLeftWidth: 4,
      borderLeftColor: colors.expense,
      marginBottom: 16,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    errorText: {
      color: colors.text,
      marginLeft: 8,
      flex: 1,
      fontSize: 14,
    },
  });
