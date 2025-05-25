
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import IdentifySolarScams from "./pages/resources/IdentifySolarScams";
import LegalRights from "./pages/resources/LegalRights";
import ReportingFraud from "./pages/resources/ReportingFraud";
import PreventionGuide from "./pages/resources/PreventionGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          {/* Resource Pages */}
          <Route path="/identifying-solar-scams" element={<IdentifySolarScams />} />
          <Route path="/legal-rights-protections" element={<LegalRights />} />
          <Route path="/reporting-seeking-help" element={<ReportingFraud />} />
          <Route path="/prevention-guide" element={<PreventionGuide />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
