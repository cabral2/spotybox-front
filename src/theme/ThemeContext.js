import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { DarkTheme, LightTheme } from "./index";

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100%"
          height="100%"
          minHeight="89vh"
          marginBottom="11vh"
          bgcolor={theme?.palette?.background?.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
