import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const sections: Array<{ title: Record<Language, string>; text: Record<Language, string> }> = [
  { title: { es: "Derecho de desistimiento", en: "Right of withdrawal", pl: "Prawo do odstąpienia", de: "Widerrufsrecht", fr: "Droit de rétractation", pt: "Direito de retratação", it: "Diritto di recesso", nl: "Herroepingsrecht" }, text: { es: "Dispones de 14 días naturales desde la recepción del pedido para ejercer tu derecho de desistimiento.", en: "You have 14 calendar days from receipt to exercise your right of withdrawal.", pl: "Masz 14 dni kalendarzowych od otrzymania zamówienia na odstąpienie od umowy.", de: "Sie haben 14 Kalendertage ab Erhalt, um Ihr Widerrufsrecht auszuüben.", fr: "Vous disposez de 14 jours calendaires à compter de la réception pour exercer votre droit de rétractation.", pt: "Tem 14 dias corridos a partir da receção para exercer o seu direito de retratação.", it: "Hai 14 giorni di calendario dal ricevimento per esercitare il diritto di recesso.", nl: "U heeft 14 kalenderdagen na ontvangst om uw herroepingsrecht uit te oefenen." } },
  { title: { es: "Condiciones", en: "Conditions", pl: "Warunki", de: "Bedingungen", fr: "Conditions", pt: "Condições", it: "Condizioni", nl: "Voorwaarden" }, text: { es: "El producto debe estar sin usar y en su embalaje original.", en: "The product must be unused and in its original packaging.", pl: "Produkt musi być nieużywany i w oryginalnym opakowaniu.", de: "Das Produkt muss unbenutzt und in der Originalverpackung sein.", fr: "Le produit doit être inutilisé et dans son emballage d'origine.", pt: "O produto deve estar sem uso e na embalagem original.", it: "Il prodotto deve essere inutilizzato e nell'imballaggio originale.", nl: "Het product moet ongebruikt en in de originele verpakking zijn." } },
  { title: { es: "Productos dañados", en: "Damaged products", pl: "Uszkodzone produkty", de: "Beschädigte Produkte", fr: "Produits endommagés", pt: "Produtos danificados", it: "Prodotti danneggiati", nl: "Beschadigde producten" }, text: { es: "Contacta en 48 horas con fotos. Enviaremos reemplazo o reembolso.", en: "Contact us within 48 hours with photos. We'll send a replacement or refund.", pl: "Skontaktuj się w ciągu 48 godzin ze zdjęciami. Wyślemy zamiennik lub zwrócimy pieniądze.", de: "Kontaktieren Sie uns innerhalb von 48 Stunden mit Fotos. Wir senden Ersatz oder erstatten.", fr: "Contactez-nous dans les 48 heures avec des photos. Nous enverrons un remplacement ou un remboursement.", pt: "Contacte-nos em 48 horas com fotos. Enviaremos substituição ou reembolso.", it: "Contattaci entro 48 ore con foto. Invieremo un sostituto o un rimborso.", nl: "Neem binnen 48 uur contact op met foto's. We sturen een vervanging of terugbetaling." } },
  { title: { es: "Reembolso", en: "Refund", pl: "Zwrot pieniędzy", de: "Rückerstattung", fr: "Remboursement", pt: "Reembolso", it: "Rimborso", nl: "Terugbetaling" }, text: { es: "Procesamos tu reembolso en 7-14 días laborables.", en: "We process your refund within 7-14 business days.", pl: "Przetwarzamy zwrot w ciągu 7-14 dni roboczych.", de: "Wir bearbeiten Ihre Rückerstattung innerhalb von 7-14 Werktagen.", fr: "Nous traitons votre remboursement sous 7 à 14 jours ouvrables.", pt: "Processamos o seu reembolso em 7-14 dias úteis.", it: "Elaboriamo il rimborso entro 7-14 giorni lavorativi.", nl: "We verwerken uw terugbetaling binnen 7-14 werkdagen." } },
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
