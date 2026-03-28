import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const sections: Array<{ title: Record<Language, string>; text: Record<Language, string> }> = [
  { title: { es: "Derecho de desistimiento", en: "Right of withdrawal", pl: "Prawo do odstąpienia" }, text: { es: "Dispones de 14 días naturales desde la recepción del pedido para ejercer tu derecho de desistimiento.", en: "You have 14 calendar days from receipt to exercise your right of withdrawal.", pl: "Masz 14 dni kalendarzowych od otrzymania zamówienia na odstąpienie od umowy." } },
  { title: { es: "Condiciones", en: "Conditions", pl: "Warunki" }, text: { es: "El producto debe estar sin usar y en su embalaje original.", en: "The product must be unused and in its original packaging.", pl: "Produkt musi być nieużywany i w oryginalnym opakowaniu." } },
  { title: { es: "Productos dañados", en: "Damaged products", pl: "Uszkodzone produkty" }, text: { es: "Contacta en 48 horas con fotos. Enviaremos reemplazo o reembolso.", en: "Contact us within 48 hours with photos. We'll send a replacement or refund.", pl: "Skontaktuj się w ciągu 48 godzin ze zdjęciami. Wyślemy zamiennik lub zwrócimy pieniądze." } },
  { title: { es: "Reembolso", en: "Refund", pl: "Zwrot pieniędzy" }, text: { es: "Procesamos tu reembolso en 7-14 días laborables.", en: "We process your refund within 7-14 business days.", pl: "Przetwarzamy zwrot w ciągu 7-14 dni roboczych." } },
];

export default function ReturnsPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('returns.title')}</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title.en}>
              <h2 className="font-heading text-xl font-semibold mb-3">{s.title[language]}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text[language]}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
