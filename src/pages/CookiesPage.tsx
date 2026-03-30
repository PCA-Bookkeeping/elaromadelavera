import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const sections: Array<{ title: Record<Language, string>; text: Record<Language, string> }> = [
  {
    title: { es: "¿Qué son las cookies?", en: "What are cookies?", pl: "Czym są ciasteczka?", de: "Was sind Cookies?", fr: "Que sont les cookies ?", pt: "O que são cookies?", it: "Cosa sono i cookie?", nl: "Wat zijn cookies?" },
    text: { es: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias y mejorar tu experiencia de navegación.", en: "Cookies are small text files stored on your device when you visit a website. They are used to remember your preferences and improve your browsing experience.", pl: "Ciasteczka to małe pliki tekstowe przechowywane na Twoim urządzeniu podczas odwiedzania strony internetowej. Służą do zapamiętywania Twoich preferencji i poprawy doświadczeń przeglądania.", de: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden verwendet, um Ihre Präferenzen zu speichern und Ihr Surferlebnis zu verbessern.", fr: "Les cookies sont de petits fichiers texte stockés sur votre appareil lors de la visite d'un site web. Ils servent à mémoriser vos préférences et améliorer votre expérience de navigation.", pt: "Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. São utilizados para recordar as suas preferências e melhorar a sua experiência de navegação.", it: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Vengono utilizzati per ricordare le tue preferenze e migliorare la tua esperienza di navigazione.", nl: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze worden gebruikt om uw voorkeuren te onthouden en uw browse-ervaring te verbeteren." },
  },
  {
    title: { es: "Cookies esenciales", en: "Essential cookies", pl: "Niezbędne ciasteczka", de: "Essentielle Cookies", fr: "Cookies essentiels", pt: "Cookies essenciais", it: "Cookie essenziali", nl: "Essentiële cookies" },
    text: { es: "Necesarias para el funcionamiento del sitio: sesión de usuario, carrito de compra, preferencias de cookies. No pueden desactivarse.", en: "Necessary for site functionality: user session, shopping cart, cookie preferences. Cannot be disabled.", pl: "Niezbędne do działania strony: sesja użytkownika, koszyk, preferencje cookies. Nie można ich wyłączyć.", de: "Notwendig für die Funktion der Website: Benutzersitzung, Warenkorb, Cookie-Einstellungen. Können nicht deaktiviert werden.", fr: "Nécessaires au fonctionnement du site : session utilisateur, panier, préférences cookies. Ne peuvent être désactivés.", pt: "Necessários para o funcionamento do site: sessão do utilizador, carrinho de compras, preferências de cookies. Não podem ser desativados.", it: "Necessari per il funzionamento del sito: sessione utente, carrello, preferenze cookie. Non possono essere disattivati.", nl: "Noodzakelijk voor de werking van de site: gebruikerssessie, winkelwagen, cookievoorkeuren. Kunnen niet worden uitgeschakeld." },
  },
  {
    title: { es: "Cookies analíticas", en: "Analytics cookies", pl: "Ciasteczka analityczne", de: "Analytische Cookies", fr: "Cookies analytiques", pt: "Cookies analíticos", it: "Cookie analitici", nl: "Analytische cookies" },
    text: { es: "Utilizadas para analizar el tráfico y el comportamiento de los usuarios (Google Analytics, si se activa). Puedes aceptarlas o rechazarlas.", en: "Used to analyze traffic and user behavior (Google Analytics, if enabled). You can accept or reject them.", pl: "Używane do analizy ruchu i zachowania użytkowników (Google Analytics, jeśli włączone). Możesz je zaakceptować lub odrzucić.", de: "Werden zur Analyse des Traffics und des Nutzerverhaltens verwendet (Google Analytics, falls aktiviert). Sie können sie annehmen oder ablehnen.", fr: "Utilisés pour analyser le trafic et le comportement des utilisateurs (Google Analytics, si activé). Vous pouvez les accepter ou les refuser.", pt: "Utilizados para analisar o tráfego e o comportamento dos utilizadores (Google Analytics, se ativado). Pode aceitá-los ou rejeitá-los.", it: "Utilizzati per analizzare il traffico e il comportamento degli utenti (Google Analytics, se attivato). Puoi accettarli o rifiutarli.", nl: "Gebruikt om verkeer en gebruikersgedrag te analyseren (Google Analytics, indien ingeschakeld). U kunt ze accepteren of weigeren." },
  },
  {
    title: { es: "Cookies de marketing", en: "Marketing cookies", pl: "Ciasteczka marketingowe", de: "Marketing-Cookies", fr: "Cookies marketing", pt: "Cookies de marketing", it: "Cookie di marketing", nl: "Marketingcookies" },
    text: { es: "Utilizadas para mostrar publicidad relevante (Facebook Pixel, si se activa). Puedes aceptarlas o rechazarlas.", en: "Used to display relevant advertising (Facebook Pixel, if enabled). You can accept or reject them.", pl: "Używane do wyświetlania odpowiednich reklam (Facebook Pixel, jeśli włączone). Możesz je zaakceptować lub odrzucić.", de: "Werden zur Anzeige relevanter Werbung verwendet (Facebook Pixel, falls aktiviert). Sie können sie annehmen oder ablehnen.", fr: "Utilisés pour afficher des publicités pertinentes (Facebook Pixel, si activé). Vous pouvez les accepter ou les refuser.", pt: "Utilizados para mostrar publicidade relevante (Facebook Pixel, se ativado). Pode aceitá-los ou rejeitá-los.", it: "Utilizzati per mostrare pubblicità pertinente (Facebook Pixel, se attivato). Puoi accettarli o rifiutarli.", nl: "Gebruikt om relevante advertenties te tonen (Facebook Pixel, indien ingeschakeld). U kunt ze accepteren of weigeren." },
  },
  {
    title: { es: "Gestión de cookies", en: "Cookie management", pl: "Zarządzanie ciasteczkami", de: "Cookie-Verwaltung", fr: "Gestion des cookies", pt: "Gestão de cookies", it: "Gestione dei cookie", nl: "Cookiebeheer" },
    text: { es: "Puedes gestionar tus preferencias de cookies en cualquier momento a través del banner de cookies o la configuración de tu navegador.", en: "You can manage your cookie preferences at any time through the cookie banner or your browser settings.", pl: "Możesz zarządzać swoimi preferencjami cookies w dowolnym momencie za pomocą banera cookies lub ustawień przeglądarki.", de: "Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner oder Ihre Browsereinstellungen verwalten.", fr: "Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de cookies ou les paramètres de votre navigateur.", pt: "Pode gerir as suas preferências de cookies a qualquer momento através do banner de cookies ou das definições do seu navegador.", it: "Puoi gestire le tue preferenze cookie in qualsiasi momento tramite il banner cookie o le impostazioni del browser.", nl: "U kunt uw cookievoorkeuren op elk moment beheren via de cookiebanner of uw browserinstellingen." },
  },
];

export default function CookiesPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('cookies.title')}</h1>
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