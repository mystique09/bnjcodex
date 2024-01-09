// @refresh reload
import '@fontsource-variable/space-grotesk/wght.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Show, Suspense } from "solid-js";
import "./app.css";

import { MetaProvider } from '@solidjs/meta';
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Header />
            <Suspense>{props.children}</Suspense>
            <Show when={!Object.keys(props.params).includes("404")}>
              <Footer />
            </Show>
          </MetaProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
