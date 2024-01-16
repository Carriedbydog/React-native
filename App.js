import * as Font from "expo-font";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import MainStack from "./navigate";

export default function App() {
  const [font, setFont] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
        });
        setFont(true);
      } catch (e) {
        console.warn(e);
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    if (font) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [font]);

  if (!font) {
    return null;
  }

  return <MainStack />;
}
