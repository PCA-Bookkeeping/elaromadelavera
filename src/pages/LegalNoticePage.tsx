import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const fields: Array<{ label: Record<Language, string>; value: string }> = [
  { label: { es: "Titular", en: "Owner", pl: "Właściciel", de: "Inhaber", fr: "Titulaire", pt: "Titular", it: "Titolare", nl: "Eigenaar" }, value: "Fabian Andrzej Janiszewski" },
  { label: { es: "NIF/NIE", en: "NIF/NIE", pl: "NIF/NIE", de: "NIF/NIE", fr: "NIF/NIE", pt: "NIF/NIE", it: "NIF/NIE", nl: "NIF/NIE" }, value: "Z4342126-F" },
  { label: { es: "Domicilio", en: "Address", pl: "Adres", de: "Adresse", fr: "Adresse", pt: "Morada", it: "Indirizzo", nl: "Adres" }, value: "Jarandilla de la Vera, Cáceres, España" },
  { label: { es: "Email", en: "Email", pl: "Email", de: "E-Mail", fr: "E-mail", pt: "E-mail", it: "E-mail", nl: "E-mail" }, value: "hola@elaromadelavera.com" },
  { label: { es: "Inscripción censal", en: "Tax registration", pl: "Rejestracja podatkowa", de: "Steuerliche Anmeldung", fr: "Inscription fiscale", pt: "Inscrição fiscal", it: "Iscrizione fiscale", nl: "Fiscale registratie" }, value: "Alta censal en Hacienda (Modelo 036), 16 de marzo de 2026" },
  { label: { es: "Epígrafes IAE", en: "IAE Sections", pl: "Sekcje IAE", de: "IAE-Abschnitte", fr: "Sections IAE", pt: "Secções IAE", it: "Sezioni IAE", nl: "IAE-secties" }, value: "842, 849.9, 652.2" },
  { label: { es: "Alta RETA", en: "RETA Registration", pl: "Rejestracja RETA", de: "RETA-Anmeldung", fr: "Inscription RETA", pt: "Inscrição RETA", it: "Iscrizione RETA", nl: "RETA-registratie" }, value: "16 de marzo de 2026, efectiva 1 de abril de 2026" },
];

export default function LegalNoticePage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('legal.title')}</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          {fields.map((f) => (
            <p key={f.label.en}><strong className="text-foreground">{f.label[language]}:</strong> {f.value}</p>
          ))}
        </div>
      </section>
    </Layout>
  );
}