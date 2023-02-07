import type { AppProps } from "next/app";
import Layout from "../components/layout/layout.component";
import { ThemeProvider } from "next-themes";
import { Roboto } from "@next/font/google";
import "../styles/globals.css";
const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
