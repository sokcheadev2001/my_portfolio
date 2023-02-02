import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/layout.component";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
