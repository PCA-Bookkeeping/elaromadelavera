import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqSections = [
  {
    title: "Sobre Nuestras Velas",
    items: [
      { q: "¿De qué están hechas vuestras velas?", a: "Nuestras velas están hechas de cera de soja 100% natural, aceites esenciales puros, mechas de algodón y colorantes naturales. No utilizamos parafina, fragancias sintéticas ni aditivos artificiales." },
      { q: "¿Cuánto dura una vela?", a: "Depende del tamaño. Una vela de 150ml dura aproximadamente 20-25 horas. Una de 250ml, 35-40 horas. Y una de 500ml, 60-70 horas. El tiempo real puede variar según las condiciones de uso." },
      { q: "¿Qué aromas tenéis disponibles?", a: "Nuestros aromas signature están inspirados en la comarca de La Vera: Lavanda Extremeña, Romero Silvestre, Azahar (Flor de Naranjo) y Jara de la Sierra. Iremos ampliando la colección con el tiempo." },
      { q: "¿Puedo reutilizar el recipiente?", a: "Sí. Una vez que la vela se haya consumido, limpia el recipiente con agua caliente para retirar los restos de cera. Nuestros recipientes de cristal y cerámica son perfectos como vasos, macetas pequeñas o portaobjetos." },
      { q: "¿Vuestras velas son veganas?", a: "Sí. Todos nuestros ingredientes son de origen vegetal. No utilizamos cera de abeja ni ningún producto de origen animal. Además, no testamos en animales." },
    ],
  },
  {
    title: "Pedidos y Envíos",
    items: [
      { q: "¿A dónde enviáis?", a: "Enviamos a toda España peninsular e islas. También realizamos envíos a la Unión Europea. Los costes y plazos varían según el destino." },
      { q: "¿Cuánto cuesta el envío?", a: "España peninsular: 4 a 7 EUR según el peso del pedido. Envío gratuito en pedidos superiores a 50 EUR (España peninsular). Islas y Europa: consultar en el proceso de compra." },
      { q: "¿Cuánto tarda en llegar mi pedido?", a: "Procesamos los pedidos en 1-3 días laborables. El envío tarda entre 2 y 5 días laborables dentro de España peninsular. En total, recibirás tu pedido en 3-7 días laborables." },
      { q: "¿Puedo hacer seguimiento de mi pedido?", a: "Sí. Recibirás un email con el número de seguimiento una vez que tu pedido sea enviado." },
    ],
  },
  {
    title: "Pagos",
    items: [
      { q: "¿Qué métodos de pago aceptáis?", a: "Aceptamos tarjeta de crédito/débito (Visa, Mastercard), PayPal y Bizum. Todos los pagos se procesan de forma segura." },
      { q: "¿Es seguro comprar en vuestra tienda?", a: "Sí. Nuestra tienda utiliza certificado SSL y cifrado de datos. Tus datos de pago nunca pasan por nuestros servidores." },
    ],
  },
  {
    title: "Devoluciones",
    items: [
      { q: "¿Puedo devolver una vela?", a: "Aceptamos devoluciones dentro de los 14 días naturales posteriores a la recepción del pedido, siempre que el producto esté sin usar y en su embalaje original. Consulta nuestra política de devoluciones completa para más detalles." },
      { q: "¿Qué pasa si mi pedido llega dañado?", a: "Contacta con nosotros en un plazo de 48 horas con fotos del producto dañado. Te enviaremos un reemplazo sin coste adicional o te reembolsaremos el importe íntegro." },
    ],
  },
  {
    title: "Pedidos B2B (Negocios)",
    items: [
      { q: "Tengo un hotel/restaurante/tienda. ¿Puedo pedir velas personalizadas?", a: "Sí. Creamos velas con etiquetado personalizado con el logo o nombre de tu negocio. Pedido mínimo de 10 unidades. Visita nuestra página de Velas para Negocios o contáctanos directamente." },
      { q: "¿Cuál es el pedido mínimo para negocios?", a: "El pedido mínimo es de 10 unidades. Ofrecemos precios especiales para pedidos recurrentes (trimestrales o semestrales)." },
    ],
  },
];

export default function FAQPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Preguntas Frecuentes</h1>
        <p className="text-muted-foreground">Todo lo que necesitas saber sobre nuestras velas</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-12">
          {faqSections.map((section) => (
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
