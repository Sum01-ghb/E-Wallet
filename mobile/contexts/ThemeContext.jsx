import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEMES, DEFAULT_THEME } from "../constants/colors.js";

const ThemeContext = createContext();

const THEME_STORAGE_KEY = "@theme_preference";

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && THEMES[savedTheme]) {
        setCurrentTheme(savedTheme);
      }
    } catch (error) {
      console.error("Error loading theme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeTheme = async (themeName) => {
    if (!THEMES[themeName]) {
      console.error("Invalid theme name:", themeName);
      return;
    }

    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, themeName);
      setCurrentTheme(themeName);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  const getCurrentTheme = () => THEMES[currentTheme];

  const getAvailableThemes = () => Object.keys(THEMES);

  const value = {
    currentTheme,
    colors: getCurrentTheme(),
    changeTheme,
    getAvailableThemes,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
