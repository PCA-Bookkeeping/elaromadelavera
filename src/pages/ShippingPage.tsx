import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ShippingPage() {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('shipping.title')}</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <h2 className="heading-md mb-6">{t('shipping.zones')}</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="border-b border-border">
                <th className="text-left py-3 font-medium">{t('shipping.destination')}</th>
                <th className="text-left py-3 font-medium">{t('shipping.time')}</th>
                <th className="text-left py-3 font-medium">{t('shipping.cost')}</th>
              </tr></thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border"><td className="py-3">La Vera (B2B)</td><td className="py-3">1-3 days</td><td className="py-3">Free</td></tr>
                <tr className="border-b border-border"><td className="py-3">Spain</td><td className="py-3">2-5 days</td><td className="py-3">4-7 € (Free +50€)</td></tr>
                <tr className="border-b border-border"><td className="py-3">Balearic Islands</td><td className="py-3">4-7 days</td><td className="py-3">7-10 €</td></tr>
                <tr className="border-b border-border"><td className="py-3">Canary Islands</td><td className="py-3">7-14 days</td><td className="py-3">TBD</td></tr>
                <tr><td className="py-3">EU</td><td className="py-3">5-10 days</td><td className="py-3">From 10 €</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
