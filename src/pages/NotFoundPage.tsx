import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="section-padding text-center min-h-[60vh] flex flex-col items-center justify-center">
        <span className="text-8xl mb-6">🕯️</span>
        <h1 className="heading-xl mb-4">{t('notFound.title')}</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t('notFound.desc')}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/tienda" className="btn-gold">{t('notFound.shop')}</Link>
          <Link to="/" className="btn-outline-warm">{t('notFound.home')}</Link>
        </div>
      </section>
    </Layout>
  );
}
