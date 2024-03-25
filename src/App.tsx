import { ThemeProvider } from "./components/themeProvider";
import { RecoilRoot } from "recoil";
import { TooltipProvider } from "./components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { MainRouter } from "./pages/MainRouter";

import "./globals.css";
import "./styles/hero.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <TooltipProvider delayDuration={400}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
          <Toaster />
        </TooltipProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
