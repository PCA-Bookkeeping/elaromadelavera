import { Layout } from "@/components/Layout";
import { Leaf, Eye, Users } from "lucide-react";
import aboutLandscape from "@/assets/about-landscape.jpg";
import aboutIngredients from "@/assets/about-ingredients.jpg";
import aboutHandmade from "@/assets/about-handmade.jpg";
import aboutAromas from "@/assets/about-aromas.jpg";

const blocks = [
  {
    title: "Donde Todo Empieza",
    text: "El Aroma de la Vera nace en Jarandilla de la Vera, un pueblo de 3.000 habitantes enclavado en la comarca de La Vera, entre las montañas de la Sierra de Gredos y los valles del norte de Cáceres. Aquí, rodeados de cerezos, naranjos, campos de lavanda, jaras y romero silvestre, decidimos crear algo que capturara la esencia de esta tierra.",
    image: aboutLandscape,
    imgRight: true,
  },
  {
    title: "Ingredientes con Intención",
    text: "Usamos exclusivamente cera de soja natural. Nunca parafina. Nunca cera de origen petrolero. Nuestras fragancias son aceites esenciales puros, no sintéticos. Las mechas son de algodón, y los colorantes, naturales. Cada ingrediente se selecciona por una razón: calidad, sostenibilidad y respeto por lo que ponemos en tu hogar.",
    image: aboutIngredients,
    imgRight: false,
  },
  {
    title: "Hecho a Mano, de Verdad",
    text: "No tenemos una línea de producción. No tenemos máquinas. Cada vela se funde en baño maría, se vierte a mano en su recipiente, y se deja enfriar de forma natural durante 24 a 48 horas. Después, cada unidad se inspecciona visualmente y cada lote pasa una prueba de quemado. Solo las velas que cumplen nuestro estándar llegan a tu puerta.",
    image: aboutHandmade,
    imgRight: true,
  },
  {
    title: "Los Aromas de Nuestra Tierra",
    text: "Nuestros aromas no son genéricos. Están inspirados en lo que hace única a La Vera. La lavanda silvestre de los campos de Extremadura. El romero de nuestras montañas. El azahar de los naranjos del valle. La jara que perfuma nuestras sierras después de la lluvia. Cada vela es una historia sensorial de este territorio.",
    image: aboutAromas,
    imgRight: false,
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Nuestra Historia</h1>
        <p className="text-accent-handwritten">Desde Jarandilla de la Vera, con las manos y el corazón</p>
      </section>

      {/* Story Blocks */}
      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {blocks.map((block, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${block.imgRight ? '' : 'md:[direction:rtl]'}`}>
              <div className={block.imgRight ? '' : 'md:[direction:ltr]'}>
                <h2 className="heading-md mb-4">{block.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
              <div className={`aspect-[4/3] rounded-lg overflow-hidden ${block.imgRight ? '' : 'md:[direction:ltr]'}`}>
                <img src={block.image} alt={block.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-6xl opacity-30 max-w-sm mx-auto md:mx-0">
            👤
          </div>
          <div>
            <h2 className="heading-md mb-4">Quién Está Detrás</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mi nombre es Fabian. Soy emprendedor, padre, y un enamorado de La Vera. Junto a mi familia, decidimos crear algo que combinara lo que más nos importa: la artesanía, la conexión con el territorio y la voluntad de construir algo real con nuestras manos. El Aroma de la Vera es nuestro proyecto de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Nuestro Compromiso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Sostenibilidad", desc: "Cera de soja de origen responsable. Recipientes reutilizables. Packaging mínimo y reciclable." },
              { icon: Eye, title: "Transparencia", desc: "Cada etiqueta lista todos los ingredientes. Sin letra pequeña. Sin ingredientes ocultos." },
              { icon: Users, title: "Comunidad Local", desc: "Comprometidos con el desarrollo de La Vera. Colaboramos con negocios locales y participamos en ferias comarcales." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-lg border border-border">
                <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}