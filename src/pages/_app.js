import "../styles/globals.css";
import { AppThemeProvider } from "../theme/ThemeContext";
import Footer from "../components/footer";

import CustomAppBar from "../components/CustomAppBar/CustomAppBar";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <CustomAppBar />
      <Component {...pageProps} />
      <Footer />
    </AppThemeProvider>
  );
}

export default MyApp;
