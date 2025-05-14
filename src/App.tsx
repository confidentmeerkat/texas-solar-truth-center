
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// This is a placeholder component for routes that will be implemented later
const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center bg-bennett-navy">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
      <h1 className="text-2xl font-bold text-bennett-navy mb-4">Coming Soon</h1>
      <p className="mb-6">This detailed guide is currently being developed. Please check back soon.</p>
      <a href="/" className="text-bennett-navy hover:text-bennett-gold inline-block font-medium">
        Return to Main Guide
      </a>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Supporting Pillar Pages - Currently using placeholder */}
          <Route path="/identifying-solar-scams" element={<ComingSoon />} />
          <Route path="/legal-rights-protections" element={<ComingSoon />} />
          <Route path="/reporting-seeking-help" element={<ComingSoon />} />
          <Route path="/prevention-guide" element={<ComingSoon />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
