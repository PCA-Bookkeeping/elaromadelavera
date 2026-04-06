import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useCartSync } from "@/hooks/useCartSync";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Analytics } from "@/components/Analytics";
import { Loader2 } from "lucide-react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const B2BPage = lazy(() => import("./pages/B2BPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const ReturnsPage = lazy(() => import("./pages/ReturnsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const LegalNoticePage = lazy(() => import("./pages/LegalNoticePage"));
const CandleCustomizerPage = lazy(() => import("./pages/CandleCustomizerPage"));
const CampaignLandingPage = lazy(() => import("./pages/CampaignLandingPage"));
const PreLaunchPage = lazy(() => import("./pages/PreLaunchPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const queryClient = new QueryClient();

function AppContent() {
  useCartSync();
  const fallback = <div className="flex justify-center py-32"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  return (
    <Suspense fallback={fallback}>
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
        <Route path="/campana" element={<CampaignLandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
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
