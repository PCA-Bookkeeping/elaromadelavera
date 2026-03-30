import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const rows: Array<{ dest: Record<Language, string>; time: Record<Language, string>; cost: Record<Language, string> }> = [
  {
    dest: { es: "La Vera (B2B)", en: "La Vera (B2B)", pl: "La Vera (B2B)", de: "La Vera (B2B)", fr: "La Vera (B2B)", pt: "La Vera (B2B)", it: "La Vera (B2B)", nl: "La Vera (B2B)" },
    time: { es: "1-3 días", en: "1-3 days", pl: "1-3 dni", de: "1-3 Tage", fr: "1-3 jours", pt: "1-3 dias", it: "1-3 giorni", nl: "1-3 dagen" },
    cost: { es: "Gratis", en: "Free", pl: "Darmowa", de: "Kostenlos", fr: "Gratuit", pt: "Grátis", it: "Gratuita", nl: "Gratis" },
  },
  {
    dest: { es: "España peninsular", en: "Mainland Spain", pl: "Hiszpania kontynentalna", de: "Festland-Spanien", fr: "Espagne continentale", pt: "Espanha peninsular", it: "Spagna continentale", nl: "Spaans vasteland" },
    time: { es: "2-5 días", en: "2-5 days", pl: "2-5 dni", de: "2-5 Tage", fr: "2-5 jours", pt: "2-5 dias", it: "2-5 giorni", nl: "2-5 dagen" },
    cost: { es: "4-7 € (Gratis +50€)", en: "€4-7 (Free +€50)", pl: "4-7 € (Darmowa +50€)", de: "4-7 € (Kostenlos ab 50€)", fr: "4-7 € (Gratuit +50€)", pt: "4-7 € (Grátis +50€)", it: "4-7 € (Gratuita +50€)", nl: "€4-7 (Gratis +€50)" },
  },
  {
    dest: { es: "Islas Baleares", en: "Balearic Islands", pl: "Baleary", de: "Balearen", fr: "Îles Baléares", pt: "Ilhas Baleares", it: "Isole Baleari", nl: "Balearen" },
    time: { es: "4-7 días", en: "4-7 days", pl: "4-7 dni", de: "4-7 Tage", fr: "4-7 jours", pt: "4-7 dias", it: "4-7 giorni", nl: "4-7 dagen" },
    cost: { es: "7-10 €", en: "€7-10", pl: "7-10 €", de: "7-10 €", fr: "7-10 €", pt: "7-10 €", it: "7-10 €", nl: "€7-10" },
  },
  {
    dest: { es: "Islas Canarias", en: "Canary Islands", pl: "Wyspy Kanaryjskie", de: "Kanarische Inseln", fr: "Îles Canaries", pt: "Ilhas Canárias", it: "Isole Canarie", nl: "Canarische Eilanden" },
    time: { es: "7-14 días", en: "7-14 days", pl: "7-14 dni", de: "7-14 Tage", fr: "7-14 jours", pt: "7-14 dias", it: "7-14 giorni", nl: "7-14 dagen" },
    cost: { es: "Pendiente", en: "TBD", pl: "Do ustalenia", de: "Noch offen", fr: "À déterminer", pt: "A definir", it: "Da definire", nl: "Nader te bepalen" },
  },
  {
    dest: { es: "Unión Europea", en: "European Union", pl: "Unia Europejska", de: "Europäische Union", fr: "Union Européenne", pt: "União Europeia", it: "Unione Europea", nl: "Europese Unie" },
    time: { es: "5-10 días", en: "5-10 days", pl: "5-10 dni", de: "5-10 Tage", fr: "5-10 jours", pt: "5-10 dias", it: "5-10 giorni", nl: "5-10 dagen" },
    cost: { es: "Desde 10 €", en: "From €10", pl: "Od 10 €", de: "Ab 10 €", fr: "À partir de 10 €", pt: "A partir de 10 €", it: "Da 10 €", nl: "Vanaf €10" },
  },
];

export default function ShippingPage() {
  const { t, language } = useLanguage();
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
        </div>
      </section>
    </Layout>
  );
}