import { Layout } from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Política de Privacidad</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Responsable del tratamiento</h2>
            <p>Fabian Andrzej Janiszewski (Empresario Individual / Autónomo)<br/>Ubicación: Jarandilla de la Vera, Cáceres, España<br/>Email de contacto: [próximamente]</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Finalidad del tratamiento de datos</h2>
            <p>Gestión de pedidos, envío de productos, comunicaciones comerciales (con consentimiento) y atención al cliente.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Base legal</h2>
            <p>Consentimiento del interesado, ejecución de contrato e interés legítimo.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Destinatarios</h2>
            <p>Shopify (procesamiento de pagos y hosting), empresas de mensajería (envío de pedidos), plataforma de email marketing (newsletter, con consentimiento).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Derechos del usuario</h2>
            <p>Acceso, rectificación, supresión, limitación, portabilidad y oposición. Puedes ejercer tus derechos escribiéndonos a nuestro email de contacto.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Período de conservación</h2>
            <p>Datos de facturación: 5 años (obligación fiscal). Datos de marketing: hasta que el usuario retire su consentimiento.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Cookies</h2>
            <p>Para más información, consulta nuestra <a href="/cookies" className="text-primary underline">Política de Cookies</a>.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Transferencias internacionales</h2>
            <p>Shopify Inc. (Canadá/EE.UU.) con cláusulas contractuales tipo.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
