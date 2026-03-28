import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import blogCeraSoja from "@/assets/blog-cera-soja.jpg";
import blogAromas from "@/assets/blog-aromas.jpg";
import blogCuidarVela from "@/assets/blog-cuidar-vela.jpg";

const posts = [
  { title: { es: "Por Qué Elegimos Cera de Soja", en: "Why We Choose Soy Wax", pl: "Dlaczego Wybieramy Wosk Sojowy" }, category: { es: "Ingredientes", en: "Ingredients", pl: "Składniki" }, date: "Abril 2026", slug: "cera-de-soja", image: blogCeraSoja },
  { title: { es: "Los 4 Aromas de La Vera", en: "The 4 Scents of La Vera", pl: "4 Zapachy La Vera" }, category: { es: "Nuestros Aromas", en: "Our Scents", pl: "Nasze Zapachy" }, date: "Abril 2026", slug: "aromas-la-vera", image: blogAromas },
  { title: { es: "Cómo Cuidar Tu Vela Artesanal", en: "How to Care for Your Candle", pl: "Jak Dbać o Swoją Świecę" }, category: { es: "Consejos", en: "Tips", pl: "Porady" }, date: "Abril 2026", slug: "cuidar-vela", image: blogCuidarVela },
];

export default function BlogPage() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('blog.title')}</h1>
        <p className="text-muted-foreground">{t('blog.subtitle')}</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="bg-muted px-2 py-1 rounded">{post.category[language]}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-heading text-xl font-semibold mb-3">{post.title[language]}</h2>
                <p className="text-sm text-muted-foreground mb-4">{t('blog.comingSoon')}</p>
                <span className="text-sm font-medium text-primary">{t('blog.readMore')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
