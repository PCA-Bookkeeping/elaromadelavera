import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

export default function ShippingPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Envíos y Entregas</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <h2 className="heading-md mb-6">Zonas y Plazos de Envío</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="border-b border-border">
                <th className="text-left py-3 font-medium">Destino</th>
                <th className="text-left py-3 font-medium">Plazo</th>
                <th className="text-left py-3 font-medium">Coste</th>
              </tr></thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border"><td className="py-3">Comarca de La Vera (B2B)</td><td className="py-3">1-3 días laborables</td><td className="py-3">Incluido</td></tr>
                <tr className="border-b border-border"><td className="py-3">España peninsular</td><td className="py-3">2-5 días laborables</td><td className="py-3">4-7 € (Gratis +50 €)</td></tr>
                <tr className="border-b border-border"><td className="py-3">Baleares</td><td className="py-3">4-7 días laborables</td><td className="py-3">7-10 €</td></tr>
                <tr className="border-b border-border"><td className="py-3">Canarias, Ceuta, Melilla</td><td className="py-3">7-14 días laborables</td><td className="py-3">Consultar</td></tr>
                <tr><td className="py-3">Unión Europea</td><td className="py-3">5-10 días laborables</td><td className="py-3">Desde 10 €</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading text-xl font-semibold mb-3">Procesamiento</h3>
          <p className="text-muted-foreground mb-6">Los pedidos se procesan en 1-3 días laborables. Los pedidos realizados en fin de semana o festivo se procesan el siguiente día laborable.</p>
          <h3 className="font-heading text-xl font-semibold mb-3">Transportistas</h3>
          <p className="text-muted-foreground mb-6">Trabajamos con Correos, MRW y SEUR para garantizar entregas seguras y a tiempo. Cada pedido se embala con protección reforzada para que tus velas lleguen en perfecto estado.</p>
          <h3 className="font-heading text-xl font-semibold mb-3">Seguimiento</h3>
          <p className="text-muted-foreground mb-6">Una vez enviado tu pedido, recibirás un email con el número de seguimiento para que puedas rastrear tu paquete en todo momento.</p>
          <h3 className="font-heading text-xl font-semibold mb-3">Entregas locales (B2B)</h3>
          <p className="text-muted-foreground">Para negocios en la comarca de La Vera y alrededores (radio de 50 km desde Jarandilla de la Vera), ofrecemos entrega directa en tu establecimiento sin coste adicional.</p>
        </div>
      </section>
    </Layout>
  );
}
