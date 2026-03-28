import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import { faqTranslations } from "@/i18n/translations";

export default function FAQPage() {
  const { t, language } = useLanguage();
  const sections = faqTranslations[language];

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('faq.title')}</h1>
        <p className="text-muted-foreground">{t('faq.subtitle')}</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="heading-md mb-6">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} value={`${section.title}-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium text-sm">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
