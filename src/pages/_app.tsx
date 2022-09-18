import "@styles/globals.scss";
import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const AnimationState = createContext<{
  isTopAnimation: boolean;
  setTopAnimation: Dispatch<SetStateAction<boolean>> | undefined;
}>({ isTopAnimation: true, setTopAnimation: undefined });

function MyApp({ Component, pageProps }: AppProps) {
  const [isTopAnimation, setTopAnimation] = useState(true);
  const value = {
    isTopAnimation,
    setTopAnimation,
  };
  return (
    <AnimationState.Provider value={value}>
      <Component {...pageProps} />
    </AnimationState.Provider>
  );
}

export default MyApp;
