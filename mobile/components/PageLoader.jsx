import { ActivityIndicator, View } from "react-native";
import { createStyles } from "../assets/styles/home.styles.js";
import { useTheme } from "../contexts/ThemeContext";

const PageLoader = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default PageLoader;
