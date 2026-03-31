import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const sections: Array<{ title: Record<Language, string>; text: Record<Language, string> }> = [
  {
    title: { es: "Identificación del vendedor", en: "Seller identification", pl: "Identyfikacja sprzedawcy", de: "Angaben zum Verkäufer", fr: "Identification du vendeur", pt: "Identificação do vendedor", it: "Identificazione del venditore", nl: "Identificatie verkoper" },
    text: { es: "Fabian Andrzej Janiszewski, autónomo. Jarandilla de la Vera, Cáceres, España. NIF: Z4342126-F.", en: "Fabian Andrzej Janiszewski, sole proprietor. Jarandilla de la Vera, Cáceres, Spain. NIF: Z4342126-F.", pl: "Fabian Andrzej Janiszewski, przedsiębiorca indywidualny. Jarandilla de la Vera, Cáceres, Hiszpania. NIF: Z4342126-F.", de: "Fabian Andrzej Janiszewski, Einzelunternehmer. Jarandilla de la Vera, Cáceres, Spanien. NIF: Z4342126-F.", fr: "Fabian Andrzej Janiszewski, entrepreneur individuel. Jarandilla de la Vera, Cáceres, Espagne. NIF: Z4342126-F.", pt: "Fabian Andrzej Janiszewski, empresário individual. Jarandilla de la Vera, Cáceres, Espanha. NIF: Z4342126-F.", it: "Fabian Andrzej Janiszewski, imprenditore individuale. Jarandilla de la Vera, Cáceres, Spagna. NIF: Z4342126-F.", nl: "Fabian Andrzej Janiszewski, zelfstandig ondernemer. Jarandilla de la Vera, Cáceres, Spanje. NIF: Z4342126-F." },
  },
  {
    title: { es: "Proceso de compra", en: "Purchase process", pl: "Proces zakupu", de: "Kaufprozess", fr: "Processus d'achat", pt: "Processo de compra", it: "Processo di acquisto", nl: "Aankoopproces" },
    text: { es: "El proceso de compra se realiza a través de nuestra tienda online. Al realizar un pedido, recibirás una confirmación por email con los detalles de tu compra. Algunos lanzamientos podrán ofrecerse en preventa y se indicará claramente antes del pago.", en: "The purchase process is done through our online store. When you place an order, you'll receive an email confirmation with your purchase details. Some launches may be offered as pre-order and will be clearly indicated before payment.", pl: "Proces zakupu odbywa się za pośrednictwem naszego sklepu internetowego. Po złożeniu zamówienia otrzymasz potwierdzenie e-mailem ze szczegółami zakupu. Niektóre premiery mogą być oferowane w przedsprzedaży i będzie to jasno wskazane przed płatnością.", de: "Der Kaufvorgang erfolgt über unseren Online-Shop. Bei Bestellung erhalten Sie eine E-Mail-Bestätigung mit Ihren Kaufdetails. Einige Produkte können im Vorverkauf angeboten werden, was vor der Zahlung klar angegeben wird.", fr: "Le processus d'achat s'effectue via notre boutique en ligne. Lors de la commande, vous recevrez une confirmation par e-mail avec les détails de votre achat. Certains lancements peuvent être proposés en précommande, ce qui sera clairement indiqué avant le paiement.", pt: "O processo de compra é realizado através da nossa loja online. Ao efetuar uma encomenda, receberá uma confirmação por email com os detalhes da sua compra. Alguns lançamentos poderão ser disponibilizados em pré-venda, claramente indicada antes do pagamento.", it: "Il processo di acquisto avviene tramite il nostro negozio online. Effettuando un ordine, riceverai una conferma via email con i dettagli del tuo acquisto. Alcuni lanci potranno essere offerti in preordine, chiaramente indicato prima del pagamento.", nl: "Het aankoopproces verloopt via onze online winkel. Wanneer u een bestelling plaatst, ontvangt u een e-mailbevestiging met uw aankoopgegevens. Sommige lanceringen kunnen als pre-order worden aangeboden en worden vóór betaling duidelijk aangegeven." },
  },
  {
    title: { es: "Precios", en: "Prices", pl: "Ceny", de: "Preise", fr: "Prix", pt: "Preços", it: "Prezzi", nl: "Prijzen" },
    text: { es: "Todos los precios incluyen IVA al 21%. Los precios se muestran en euros (€).", en: "All prices include 21% VAT. Prices are displayed in euros (€).", pl: "Wszystkie ceny zawierają 21% VAT. Ceny podane są w euro (€).", de: "Alle Preise enthalten 21% MwSt. Die Preise werden in Euro (€) angezeigt.", fr: "Tous les prix incluent la TVA à 21%. Les prix sont affichés en euros (€).", pt: "Todos os preços incluem IVA a 21%. Os preços são apresentados em euros (€).", it: "Tutti i prezzi includono IVA al 21%. I prezzi sono indicati in euro (€).", nl: "Alle prijzen zijn inclusief 21% BTW. Prijzen worden weergegeven in euro's (€)." },
  },
  {
    title: { es: "Métodos de pago", en: "Payment methods", pl: "Metody płatności", de: "Zahlungsmethoden", fr: "Modes de paiement", pt: "Métodos de pagamento", it: "Metodi di pagamento", nl: "Betaalmethoden" },
    text: { es: "Aceptamos tarjeta de crédito/débito (Visa, Mastercard), PayPal y Bizum.", en: "We accept credit/debit card (Visa, Mastercard), PayPal, and Bizum.", pl: "Akceptujemy karty kredytowe/debetowe (Visa, Mastercard), PayPal i Bizum.", de: "Wir akzeptieren Kredit-/Debitkarte (Visa, Mastercard), PayPal und Bizum.", fr: "Nous acceptons les cartes de crédit/débit (Visa, Mastercard), PayPal et Bizum.", pt: "Aceitamos cartão de crédito/débito (Visa, Mastercard), PayPal e Bizum.", it: "Accettiamo carta di credito/debito (Visa, Mastercard), PayPal e Bizum.", nl: "We accepteren creditcard/debitcard (Visa, Mastercard), PayPal en Bizum." },
  },
  {
    title: { es: "Plazos de entrega", en: "Delivery times", pl: "Terminy dostawy", de: "Lieferzeiten", fr: "Délais de livraison", pt: "Prazos de entrega", it: "Tempi di consegna", nl: "Levertijden" },
    text: { es: "Durante esta fase inicial, los pedidos y preventas se preparan en pequeños lotes. El plazo habitual estimado es de 10-14 días hábiles para España peninsular, pudiendo ampliarse en islas y algunos destinos europeos.", en: "During this initial phase, orders and pre-orders are prepared in small batches. The usual estimated lead time is 10-14 business days for mainland Spain and may be longer for islands and some European destinations.", pl: "Na tym początkowym etapie zamówienia i przedsprzedaże przygotowujemy w małych partiach. Standardowy szacowany czas realizacji to 10-14 dni roboczych dla Hiszpanii kontynentalnej i może być dłuższy dla wysp oraz części Europy.", de: "In dieser Anfangsphase werden Bestellungen und Vorverkäufe in kleinen Chargen vorbereitet. Die übliche geschätzte Lieferzeit beträgt 10-14 Werktage für das spanische Festland und kann für Inseln und einige europäische Ziele länger sein.", fr: "Pendant cette phase initiale, les commandes et précommandes sont préparées en petits lots. Le délai estimé habituel est de 10 à 14 jours ouvrables pour l'Espagne continentale et peut être plus long pour les îles et certaines destinations européennes.", pt: "Durante esta fase inicial, as encomendas e pré-vendas são preparadas em pequenos lotes. O prazo estimado habitual é de 10-14 dias úteis para a Espanha continental e pode ser superior para ilhas e alguns destinos europeus.", it: "Durante questa fase iniziale, ordini e preordini vengono preparati in piccoli lotti. Il tempo stimato abituale è di 10-14 giorni lavorativi per la Spagna continentale e può essere più lungo per isole e alcune destinazioni europee.", nl: "Tijdens deze eerste fase worden bestellingen en pre-orders in kleine batches voorbereid. De gebruikelijke geschatte levertijd is 10-14 werkdagen voor het Spaanse vasteland en kan langer zijn voor eilanden en sommige Europese bestemmingen." },
  },
  {
    title: { es: "Derecho de desistimiento", en: "Right of withdrawal", pl: "Prawo do odstąpienia", de: "Widerrufsrecht", fr: "Droit de rétractation", pt: "Direito de retratação", it: "Diritto di recesso", nl: "Herroepingsrecht" },
    text: { es: "Dispones de 14 días naturales para devolver tu pedido.", en: "You have 14 calendar days to return your order.", pl: "Masz 14 dni kalendarzowych na zwrot zamówienia.", de: "Sie haben 14 Kalendertage, um Ihre Bestellung zurückzugeben.", fr: "Vous disposez de 14 jours calendaires pour retourner votre commande.", pt: "Dispõe de 14 dias corridos para devolver a sua encomenda.", it: "Hai 14 giorni di calendario per restituire il tuo ordine.", nl: "U heeft 14 kalenderdagen om uw bestelling te retourneren." },
  },
  {
    title: { es: "Legislación aplicable", en: "Applicable law", pl: "Prawo właściwe", de: "Anwendbares Recht", fr: "Loi applicable", pt: "Legislação aplicável", it: "Legge applicabile", nl: "Toepasselijk recht" },
    text: { es: "Estos términos se rigen por la legislación española. La jurisdicción competente será la de los tribunales de Cáceres, España.", en: "These terms are governed by Spanish law. The competent jurisdiction will be the courts of Cáceres, Spain.", pl: "Niniejsze warunki podlegają prawu hiszpańskiemu. Właściwą jurysdykcją są sądy w Cáceres, Hiszpania.", de: "Diese Bedingungen unterliegen dem spanischen Recht. Zuständig sind die Gerichte von Cáceres, Spanien.", fr: "Ces conditions sont régies par le droit espagnol. La juridiction compétente sera celle des tribunaux de Cáceres, Espagne.", pt: "Estes termos são regidos pela legislação espanhola. A jurisdição competente será a dos tribunais de Cáceres, Espanha.", it: "Questi termini sono regolati dalla legge spagnola. La giurisdizione competente sarà quella dei tribunali di Cáceres, Spagna.", nl: "Deze voorwaarden worden beheerst door het Spaanse recht. De bevoegde rechtbank is die van Cáceres, Spanje." },
  },
];

export default function TermsPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <SEOHead title={t('terms.title')} description="Condiciones de compra, preventa, pago y entrega de El Aroma de la Vera." canonicalPath="/terminos" />
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('terms.title')}</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          {sections.map((s) => (
            <div key={s.title.en}>
              <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title[language]}</h2>
              <p>{s.text[language]}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}