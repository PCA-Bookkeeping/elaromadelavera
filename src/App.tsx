import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useCartSync } from "@/hooks/useCartSync";
import { LanguageProvider } from "@/i18n/LanguageContext";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import B2BPage from "./pages/B2BPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactPage from "./pages/ContactPage";
import ShippingPage from "./pages/ShippingPage";
import ReturnsPage from "./pages/ReturnsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import TermsPage from "./pages/TermsPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import CandleCustomizerPage from "./pages/CandleCustomizerPage";
import CampaignLandingPage from "./pages/CampaignLandingPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

function AppContent() {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tienda" element={<ShopPage />} />
      <Route path="/producto/:handle" element={<ProductPage />} />
      <Route path="/sobre-nosotros" element={<AboutPage />} />
      <Route path="/b2b" element={<B2BPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogArticlePage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/envios" element={<ShippingPage />} />
      <Route path="/devoluciones" element={<ReturnsPage />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/aviso-legal" element={<LegalNoticePage />} />
      <Route path="/personalizar" element={<CandleCustomizerPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
