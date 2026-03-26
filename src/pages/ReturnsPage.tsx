import { Layout } from "@/components/Layout";

export default function ReturnsPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Política de Devoluciones</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8">
          {[
            { title: "Derecho de desistimiento", text: "Conforme a la legislación española de consumo, dispones de 14 días naturales desde la recepción del pedido para ejercer tu derecho de desistimiento sin necesidad de justificación." },
            { title: "Condiciones para la devolución", text: "El producto debe estar sin usar, sin encender y en su embalaje original. Debes notificarnos tu intención de devolver el producto por email o a través de nuestro formulario de contacto dentro del plazo de 14 días. Los gastos de envío de la devolución corren por cuenta del comprador, salvo que el producto sea defectuoso o no corresponda con lo pedido." },
            { title: "Productos dañados o defectuosos", text: "Si tu pedido llega dañado o defectuoso, contacta con nosotros dentro de las 48 horas siguientes a la recepción con fotos del producto. Asumiremos todos los gastos y te enviaremos un reemplazo o un reembolso completo." },
            { title: "Proceso de reembolso", text: "Una vez recibido y verificado el producto devuelto, procesaremos tu reembolso en un plazo de 7-14 días laborables a través del mismo método de pago utilizado en la compra." },
            { title: "Excepciones", text: "No se aceptan devoluciones de velas que hayan sido encendidas o usadas, ni de productos personalizados (B2B)." },
            { title: "Contacto para devoluciones", text: "Escríbenos a través de nuestro formulario de contacto o por email para iniciar una devolución." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-heading text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
