import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

const posts = [
  { title: "Por Qué Elegimos Cera de Soja (y No Parafina)", category: "Ingredientes", date: "Abril 2026", slug: "cera-de-soja" },
  { title: "Los 4 Aromas de La Vera: La Historia Detrás de Cada Fragancia", category: "Nuestros Aromas", date: "Abril 2026", slug: "aromas-la-vera" },
  { title: "Cómo Cuidar Tu Vela Artesanal Para Que Dure Más", category: "Consejos", date: "Abril 2026", slug: "cuidar-vela" },
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Blog</h1>
        <p className="text-muted-foreground">Historias, consejos y novedades del mundo de las velas artesanales</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center text-4xl opacity-30">📝</div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="bg-muted px-2 py-1 rounded">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-heading text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">Contenido próximamente disponible. Estamos preparando este artículo con mucho cariño.</p>
                <span className="text-sm font-medium text-primary">Leer más →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
