import { useEffect, useState } from "react";
import { FONTS } from "../utils/constants";
import * as Font from "expo-font";

const useFonts = () => {
    const [appReady, setAppReady] = useState(false);
    useEffect(() => {
      async function prepare() {
        try {
          await Font.loadAsync(FONTS);
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          setAppReady(true);
        }
      }
      prepare();
    }, []);

    return appReady;
}

export default useFonts