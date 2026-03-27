import { Layout } from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Términos y Condiciones</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Identificación del vendedor</h2>
            <p>Fabian Andrzej Janiszewski, autónomo. Jarandilla de la Vera, Cáceres, España. NIF: Z4342126-F.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Proceso de compra</h2>
            <p>El proceso de compra se realiza a través de nuestra tienda online. Al realizar un pedido, recibirás una confirmación por email con los detalles de tu compra.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Precios</h2>
            <p>Todos los precios incluyen IVA al 21%. Los precios se muestran en euros (€) con el formato europeo (coma como separador decimal).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Métodos de pago</h2>
            <p>Aceptamos tarjeta de crédito/débito (Visa, Mastercard), PayPal y Bizum.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Plazos de entrega</h2>
            <p>Los pedidos se procesan en 1-3 días laborables. Consulta nuestra <a href="/envios" className="text-primary underline">política de envíos</a> para más detalles.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Derecho de desistimiento</h2>
            <p>Dispones de 14 días naturales para devolver tu pedido. Consulta nuestra <a href="/devoluciones" className="text-primary underline">política de devoluciones</a>.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Legislación aplicable</h2>
            <p>Estos términos se rigen por la legislación española. La jurisdicción competente será la de los tribunales de Cáceres, España.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
