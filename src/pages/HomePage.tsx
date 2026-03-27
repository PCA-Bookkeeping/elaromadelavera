import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Leaf, Flower2, Hand, MapPin, ChevronRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-candle.jpg";

const usps = [
  { icon: Leaf, title: "Cera de Soja Natural", desc: "Sin parafina ni derivados del petróleo" },
  { icon: Flower2, title: "Aceites Esenciales", desc: "Aromas puros, sin fragancias sintéticas" },
  { icon: Hand, title: "Hecho a Mano", desc: "Cada vela fundida y vertida individualmente" },
  { icon: MapPin, title: "La Vera, Extremadura", desc: "Aromas inspirados en nuestro territorio" },
];

const collections = [
  { title: "Velas de Hogar", desc: "Decora tu espacio con los aromas de La Vera", link: "/tienda?collection=hogar", cta: "Ver colección" },
  { title: "Sets de Regalo", desc: "El regalo perfecto para alguien especial", link: "/tienda?collection=regalo", cta: "Ver sets" },
  { title: "Velas para Negocios", desc: "Personaliza velas con tu marca", link: "/b2b", cta: "Saber más" },
];

const scents = [
  { name: "Lavanda Extremeña", desc: "Cultivada en los campos de Extremadura. Floral, relajante y delicada. Perfecta para crear un ambiente de calma en tu hogar.", emoji: "🌸" },
  { name: "Romero Silvestre", desc: "Recogido en las montañas de La Vera. Herbáceo, fresco e intenso. Energía natural en cada rincón.", emoji: "🌿" },
  { name: "Azahar (Flor de Naranjo)", desc: "De los naranjos del Valle del Jerte y La Vera. Dulce, fresco y primaveral. Un aroma que atrapa la esencia de la primavera extremeña.", emoji: "🌼" },
  { name: "Jara de la Sierra", desc: "La planta más característica de nuestras sierras. Resinosa, balsámica, con notas de monte mediterráneo. El olor de pasear por la sierra después de la lluvia.", emoji: "🏔️" },
];

const steps = [
  { title: "Seleccionamos", desc: "Materias primas naturales: cera de soja, aceites esenciales puros, mechas de algodón y colorantes naturales. Sin atajos." },
  { title: "Fundimos", desc: "Cera de soja en baño maría a 60-65°C. Control de temperatura con termómetro digital para una mezcla perfecta." },
  { title: "Vertimos", desc: "A mano, vela por vela. Cada recipiente se prepara con la mecha centrada y fijada. Se deja enfriar de forma natural durante 24-48 horas." },
  { title: "Inspeccionamos", desc: "Cada vela pasa un control visual y una prueba de quemado por lote. Solo las que cumplen nuestro estándar llegan a tu puerta." },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Vela artesanal de La Vera" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <p className="text-accent-handwritten mb-4 text-primary-foreground">Artesanía, naturaleza y territorio en cada vela</p>
          <h1 className="heading-xl text-primary-foreground mb-6">Velas Artesanales de La Vera</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Hechas a mano con cera de soja, aceites esenciales y los aromas de nuestra tierra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/tienda" className="btn-gold inline-flex items-center justify-center gap-2">
              Descubre Nuestra Colección <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/b2b" className="btn-outline-warm inline-flex items-center justify-center border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
              Velas para Tu Negocio
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <span>🌱 100% Natural</span>
            <span>🤲 Hecho a Mano</span>
            <span>📍 Jarandilla de la Vera</span>
          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="bg-muted py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="text-center">
              <usp.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-heading text-lg font-semibold mb-1">{usp.title}</h3>
              <p className="text-sm text-muted-foreground">{usp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Nuestras Colecciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col) => (
              <Link key={col.title} to={col.link} className="group block">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground text-sm overflow-hidden group-hover:shadow-lg transition-shadow">
                  <span className="text-6xl opacity-30">🕯️</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{col.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{col.desc}</p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  {col.cta} <ChevronRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
            <span className="text-6xl opacity-30">🏠</span>
          </div>
          <div>
            <h2 className="heading-lg mb-6">Nuestra Historia</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En un pequeño taller en Jarandilla de la Vera, fundimos cada vela a mano. Usamos solo cera de soja natural,
              aceites esenciales puros y mechas de algodón. Nuestros aromas nacen de esta tierra: el pimentón ahumado,
              la lavanda extremeña, el romero silvestre y el azahar de nuestros naranjos.
            </p>
            <Link to="/sobre-nosotros" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              Conoce nuestra historia completa <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Scents */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Los Aromas de La Vera</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scents.map((scent) => (
              <div key={scent.name} className="text-center p-6 rounded-lg border border-border hover:shadow-md transition-shadow bg-card">
                <span className="text-4xl mb-4 block">{scent.emoji}</span>
                <h3 className="font-heading text-lg font-semibold mb-3">{scent.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{scent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-sage">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Teaser */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="heading-lg mb-4">¿Tienes un Hotel, Restaurante o Tienda en La Vera?</h2>
          <p className="text-muted-foreground mb-8">
            Creamos velas personalizadas con el aroma y la etiqueta de tu negocio.
            Pedidos mínimos desde 10 unidades. Entrega local en la comarca.
          </p>
          <Link to="/b2b" className="btn-primary inline-flex items-center gap-2">
            Solicita Información para tu Negocio <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reviews placeholder */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-lg border border-border text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-border" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Pronto compartiremos las opiniones de nuestros primeros clientes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-2">Síguenos en Instagram</h2>
          <p className="text-muted-foreground mb-8">@elaromadelavera</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-3xl mx-auto mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center text-2xl opacity-30">
                🕯️
              </div>
            ))}
          </div>
          <a href="#" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Síguenos <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-gold">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="heading-lg mb-4">Únete a la Comunidad de El Aroma de la Vera</h2>
          <p className="text-muted-foreground mb-8">
            Recibe novedades, ofertas exclusivas y contenido sobre el mundo de las velas artesanales directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Suscribirme</button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>
    </Layout>
  );
}
