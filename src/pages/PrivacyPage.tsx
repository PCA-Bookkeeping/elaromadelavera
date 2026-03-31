import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const sections: Array<{ title: Record<Language, string>; text: Record<Language, string> }> = [
  {
    title: { es: "Responsable del tratamiento", en: "Data Controller", pl: "Administrator danych", de: "Verantwortlicher", fr: "Responsable du traitement", pt: "Responsável pelo tratamento", it: "Titolare del trattamento", nl: "Verwerkingsverantwoordelijke" },
    text: { es: "Fabian Andrzej Janiszewski (Empresario Individual / Autónomo)\nNIF: Z4342126-F\nUbicación: Jarandilla de la Vera, Cáceres, España\nEmail: hola@elaromadelavera.com", en: "Fabian Andrzej Janiszewski (Sole Proprietor)\nNIF: Z4342126-F\nLocation: Jarandilla de la Vera, Cáceres, Spain\nEmail: hola@elaromadelavera.com", pl: "Fabian Andrzej Janiszewski (Przedsiębiorca Indywidualny)\nNIF: Z4342126-F\nLokalizacja: Jarandilla de la Vera, Cáceres, Hiszpania\nEmail: hola@elaromadelavera.com", de: "Fabian Andrzej Janiszewski (Einzelunternehmer)\nNIF: Z4342126-F\nStandort: Jarandilla de la Vera, Cáceres, Spanien\nE-Mail: hola@elaromadelavera.com", fr: "Fabian Andrzej Janiszewski (Entrepreneur Individuel)\nNIF: Z4342126-F\nLocalisation: Jarandilla de la Vera, Cáceres, Espagne\nE-mail: hola@elaromadelavera.com", pt: "Fabian Andrzej Janiszewski (Empresário Individual)\nNIF: Z4342126-F\nLocalização: Jarandilla de la Vera, Cáceres, Espanha\nE-mail: hola@elaromadelavera.com", it: "Fabian Andrzej Janiszewski (Imprenditore Individuale)\nNIF: Z4342126-F\nSede: Jarandilla de la Vera, Cáceres, Spagna\nE-mail: hola@elaromadelavera.com", nl: "Fabian Andrzej Janiszewski (Zelfstandig Ondernemer)\nNIF: Z4342126-F\nLocatie: Jarandilla de la Vera, Cáceres, Spanje\nE-mail: hola@elaromadelavera.com" },
  },
  {
    title: { es: "Finalidad del tratamiento de datos", en: "Purpose of data processing", pl: "Cel przetwarzania danych", de: "Zweck der Datenverarbeitung", fr: "Finalité du traitement des données", pt: "Finalidade do tratamento de dados", it: "Finalità del trattamento dei dati", nl: "Doel van gegevensverwerking" },
    text: { es: "Gestión de pedidos, envío de productos, comunicaciones comerciales (con consentimiento) y atención al cliente.", en: "Order management, product shipping, commercial communications (with consent), and customer support.", pl: "Zarządzanie zamówieniami, wysyłka produktów, komunikacja handlowa (za zgodą) i obsługa klienta.", de: "Auftragsverwaltung, Produktversand, kommerzielle Kommunikation (mit Einwilligung) und Kundenservice.", fr: "Gestion des commandes, expédition des produits, communications commerciales (avec consentement) et service client.", pt: "Gestão de encomendas, envio de produtos, comunicações comerciais (com consentimento) e atendimento ao cliente.", it: "Gestione ordini, spedizione prodotti, comunicazioni commerciali (con consenso) e assistenza clienti.", nl: "Orderverwerking, productverzending, commerciële communicatie (met toestemming) en klantenservice." },
  },
  {
    title: { es: "Base legal", en: "Legal basis", pl: "Podstawa prawna", de: "Rechtsgrundlage", fr: "Base légale", pt: "Base legal", it: "Base giuridica", nl: "Rechtsgrondslag" },
    text: { es: "Consentimiento del interesado, ejecución de contrato e interés legítimo.", en: "Consent of the data subject, contract execution, and legitimate interest.", pl: "Zgoda osoby, której dane dotyczą, wykonanie umowy i uzasadniony interes.", de: "Einwilligung der betroffenen Person, Vertragserfüllung und berechtigtes Interesse.", fr: "Consentement de l'intéressé, exécution du contrat et intérêt légitime.", pt: "Consentimento do titular dos dados, execução de contrato e interesse legítimo.", it: "Consenso dell'interessato, esecuzione del contratto e interesse legittimo.", nl: "Toestemming van de betrokkene, uitvoering van een overeenkomst en gerechtvaardigd belang." },
  },
  {
    title: { es: "Destinatarios", en: "Recipients", pl: "Odbiorcy", de: "Empfänger", fr: "Destinataires", pt: "Destinatários", it: "Destinatari", nl: "Ontvangers" },
    text: { es: "Shopify (procesamiento de pagos y hosting), empresas de mensajería (envío de pedidos), plataforma de email marketing (newsletter, con consentimiento).", en: "Shopify (payment processing and hosting), courier companies (order shipping), email marketing platform (newsletter, with consent).", pl: "Shopify (przetwarzanie płatności i hosting), firmy kurierskie (wysyłka zamówień), platforma email marketingu (newsletter, za zgodą).", de: "Shopify (Zahlungsabwicklung und Hosting), Kurierunternehmen (Auftragsversand), E-Mail-Marketing-Plattform (Newsletter, mit Einwilligung).", fr: "Shopify (traitement des paiements et hébergement), sociétés de messagerie (expédition), plateforme d'email marketing (newsletter, avec consentement).", pt: "Shopify (processamento de pagamentos e hosting), empresas de transporte (envio de encomendas), plataforma de email marketing (newsletter, com consentimento).", it: "Shopify (elaborazione pagamenti e hosting), corrieri (spedizione ordini), piattaforma email marketing (newsletter, con consenso).", nl: "Shopify (betalingsverwerking en hosting), koeriersbedrijven (orderverzending), e-mailmarketingplatform (nieuwsbrief, met toestemming)." },
  },
  {
    title: { es: "Derechos del usuario", en: "User rights", pl: "Prawa użytkownika", de: "Benutzerrechte", fr: "Droits de l'utilisateur", pt: "Direitos do utilizador", it: "Diritti dell'utente", nl: "Gebruikersrechten" },
    text: { es: "Acceso, rectificación, supresión, limitación, portabilidad y oposición. Puedes ejercer tus derechos escribiéndonos a nuestro email de contacto.", en: "Access, rectification, erasure, restriction, portability, and objection. You can exercise your rights by writing to our contact email.", pl: "Dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie i sprzeciw. Możesz realizować swoje prawa, pisząc na nasz email kontaktowy.", de: "Zugang, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerspruch. Sie können Ihre Rechte per E-Mail an unsere Kontaktadresse ausüben.", fr: "Accès, rectification, effacement, limitation, portabilité et opposition. Vous pouvez exercer vos droits en nous écrivant à notre email de contact.", pt: "Acesso, retificação, apagamento, limitação, portabilidade e oposição. Pode exercer os seus direitos escrevendo para o nosso email de contacto.", it: "Accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. Puoi esercitare i tuoi diritti scrivendo alla nostra email di contatto.", nl: "Toegang, rectificatie, verwijdering, beperking, overdraagbaarheid en bezwaar. U kunt uw rechten uitoefenen door te schrijven naar ons contact e-mailadres." },
  },
  {
    title: { es: "Período de conservación", en: "Retention period", pl: "Okres przechowywania", de: "Aufbewahrungsfrist", fr: "Durée de conservation", pt: "Período de conservação", it: "Periodo di conservazione", nl: "Bewaartermijn" },
    text: { es: "Datos de facturación: 5 años (obligación fiscal). Datos de marketing: hasta que el usuario retire su consentimiento.", en: "Billing data: 5 years (tax obligation). Marketing data: until the user withdraws consent.", pl: "Dane rozliczeniowe: 5 lat (obowiązek podatkowy). Dane marketingowe: do wycofania zgody.", de: "Rechnungsdaten: 5 Jahre (steuerliche Pflicht). Marketingdaten: bis zum Widerruf der Einwilligung.", fr: "Données de facturation : 5 ans (obligation fiscale). Données marketing : jusqu'au retrait du consentement.", pt: "Dados de faturação: 5 anos (obrigação fiscal). Dados de marketing: até que o utilizador retire o seu consentimento.", it: "Dati di fatturazione: 5 anni (obbligo fiscale). Dati marketing: fino al ritiro del consenso.", nl: "Facturatiegegevens: 5 jaar (fiscale verplichting). Marketinggegevens: totdat de gebruiker zijn toestemming intrekt." },
  },
  {
    title: { es: "Transferencias internacionales", en: "International transfers", pl: "Transfery międzynarodowe", de: "Internationale Übermittlungen", fr: "Transferts internationaux", pt: "Transferências internacionais", it: "Trasferimenti internazionali", nl: "Internationale overdrachten" },
    text: { es: "Shopify Inc. (Canadá/EE.UU.) con cláusulas contractuales tipo.", en: "Shopify Inc. (Canada/USA) with standard contractual clauses.", pl: "Shopify Inc. (Kanada/USA) ze standardowymi klauzulami umownymi.", de: "Shopify Inc. (Kanada/USA) mit Standardvertragsklauseln.", fr: "Shopify Inc. (Canada/USA) avec clauses contractuelles types.", pt: "Shopify Inc. (Canadá/EUA) com cláusulas contratuais tipo.", it: "Shopify Inc. (Canada/USA) con clausole contrattuali tipo.", nl: "Shopify Inc. (Canada/VS) met standaard contractbepalingen." },
  },
];

export default function PrivacyPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <SEOHead title={t('privacy.title')} description="Cómo tratamos, conservamos y protegemos tus datos personales." canonicalPath="/privacidad" />
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('privacy.title')}</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          {sections.map((s) => (
            <div key={s.title.en}>
              <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title[language]}</h2>
              <p className="whitespace-pre-line">{s.text[language]}</p>
            </div>
          ))}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Cookies</h2>
            <p><a href="/cookies" className="text-primary underline">{t('cookies.title')}</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}