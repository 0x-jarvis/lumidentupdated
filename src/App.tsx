import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroOverlay from "@/components/IntroOverlay";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Pediatric from "./pages/Pediatric";
import Orthodontics from "./pages/Orthodontics";
import GPCosmetics from "./pages/GPCosmetics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const INTRO_SEEN_KEY = "lumident_intro_seen";

const App = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem(INTRO_SEEN_KEY) !== "true";
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isIntroVisible ? <IntroOverlay onComplete={() => setIsIntroVisible(false)} /> : null}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pediatric" element={<Pediatric />} />
            <Route path="/orthodontics" element={<Orthodontics />} />
            <Route path="/gp-cosmetics" element={<GPCosmetics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
