import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const rows: Array<{ dest: Record<Language, string>; time: Record<Language, string>; cost: Record<Language, string> }> = [
  {
    dest: { es: "La Vera (B2B)", en: "La Vera (B2B)", pl: "La Vera (B2B)", de: "La Vera (B2B)", fr: "La Vera (B2B)", pt: "La Vera (B2B)", it: "La Vera (B2B)", nl: "La Vera (B2B)" },
    time: { es: "7-10 días hábiles", en: "7-10 business days", pl: "7-10 dni roboczych", de: "7-10 Werktage", fr: "7-10 jours ouvrables", pt: "7-10 dias úteis", it: "7-10 giorni lavorativi", nl: "7-10 werkdagen" },
    cost: { es: "Gratis", en: "Free", pl: "Darmowa", de: "Kostenlos", fr: "Gratuit", pt: "Grátis", it: "Gratuita", nl: "Gratis" },
  },
  {
    dest: { es: "España peninsular", en: "Mainland Spain", pl: "Hiszpania kontynentalna", de: "Festland-Spanien", fr: "Espagne continentale", pt: "Espanha peninsular", it: "Spagna continentale", nl: "Spaans vasteland" },
    time: { es: "10-14 días hábiles", en: "10-14 business days", pl: "10-14 dni roboczych", de: "10-14 Werktage", fr: "10-14 jours ouvrables", pt: "10-14 dias úteis", it: "10-14 giorni lavorativi", nl: "10-14 werkdagen" },
    cost: { es: "4-7 € (Gratis +50€)", en: "€4-7 (Free +€50)", pl: "4-7 € (Darmowa +50€)", de: "4-7 € (Kostenlos ab 50€)", fr: "4-7 € (Gratuit +50€)", pt: "4-7 € (Grátis +50€)", it: "4-7 € (Gratuita +50€)", nl: "€4-7 (Gratis +€50)" },
  },
  {
    dest: { es: "Islas Baleares", en: "Balearic Islands", pl: "Baleary", de: "Balearen", fr: "Îles Baléares", pt: "Ilhas Baleares", it: "Isole Baleari", nl: "Balearen" },
    time: { es: "10-16 días hábiles", en: "10-16 business days", pl: "10-16 dni roboczych", de: "10-16 Werktage", fr: "10-16 jours ouvrables", pt: "10-16 dias úteis", it: "10-16 giorni lavorativi", nl: "10-16 werkdagen" },
    cost: { es: "7-10 €", en: "€7-10", pl: "7-10 €", de: "7-10 €", fr: "7-10 €", pt: "7-10 €", it: "7-10 €", nl: "€7-10" },
  },
  {
    dest: { es: "Islas Canarias", en: "Canary Islands", pl: "Wyspy Kanaryjskie", de: "Kanarische Inseln", fr: "Îles Canaries", pt: "Ilhas Canárias", it: "Isole Canarie", nl: "Canarische Eilanden" },
    time: { es: "14-20 días hábiles", en: "14-20 business days", pl: "14-20 dni roboczych", de: "14-20 Werktage", fr: "14-20 jours ouvrables", pt: "14-20 dias úteis", it: "14-20 giorni lavorativi", nl: "14-20 werkdagen" },
    cost: { es: "Pendiente", en: "TBD", pl: "Do ustalenia", de: "Noch offen", fr: "À déterminer", pt: "A definir", it: "Da definire", nl: "Nader te bepalen" },
  },
  {
    dest: { es: "Unión Europea", en: "European Union", pl: "Unia Europejska", de: "Europäische Union", fr: "Union Européenne", pt: "União Europeia", it: "Unione Europea", nl: "Europese Unie" },
    time: { es: "10-18 días hábiles", en: "10-18 business days", pl: "10-18 dni roboczych", de: "10-18 Werktage", fr: "10-18 jours ouvrables", pt: "10-18 dias úteis", it: "10-18 giorni lavorativi", nl: "10-18 werkdagen" },
    cost: { es: "Desde 10 €", en: "From €10", pl: "Od 10 €", de: "Ab 10 €", fr: "À partir de 10 €", pt: "A partir de 10 €", it: "Da 10 €", nl: "Vanaf €10" },
  },
];

export default function ShippingPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <SEOHead title={t('shipping.title')} description={t('shipping.zones')} canonicalPath="/envios" />
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
                {rows.map((row, i) => (
                  <tr key={i} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                    <td className="py-3">{row.dest[language]}</td>
                    <td className="py-3">{row.time[language]}</td>
                    <td className="py-3">{row.cost[language]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Trabajamos en lotes pequeños y cada vela se termina a mano, por eso durante esta fase inicial recomendamos comunicar al cliente un plazo realista de 10-14 días hábiles en península. El envío gratuito a partir de 50 € se mantiene, pero conviene revisarlo con los costes reales de packaging, mensajería y margen por formato.
          </p>
        </div>
      </section>
    </Layout>
  );
}