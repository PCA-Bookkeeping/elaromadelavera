import { Layout } from "@/components/Layout";

export default function LegalNoticePage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Aviso Legal</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Titular:</strong> Fabian Andrzej Janiszewski</p>
          <p><strong className="text-foreground">NIF/NIE:</strong> Z4342126-F</p>
          <p><strong className="text-foreground">Domicilio:</strong> Jarandilla de la Vera, Cáceres, España</p>
          <p><strong className="text-foreground">Email:</strong> hola@elaromadelavera.com</p>
          <p><strong className="text-foreground">Inscripción censal:</strong> Alta censal en Hacienda (Modelo 036), 16 de marzo de 2026</p>
          <p><strong className="text-foreground">Epígrafes IAE:</strong> 842, 849.9, 652.2</p>
          <p><strong className="text-foreground">Alta RETA:</strong> 16 de marzo de 2026, efectiva 1 de abril de 2026</p>
        </div>
      </section>
    </Layout>
  );
}
