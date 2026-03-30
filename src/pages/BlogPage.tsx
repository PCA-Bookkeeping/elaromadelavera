import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { storefrontApiRequest, BLOG_ARTICLES_QUERY, type ShopifyArticle } from "@/lib/shopify";
import { Loader2, CalendarDays } from "lucide-react";
import blogCeraSoja from "@/assets/blog-cera-soja.jpg";
import blogAromas from "@/assets/blog-aromas.jpg";
import blogCuidarVela from "@/assets/blog-cuidar-vela.jpg";
import type { Language } from "@/i18n/translations";

// Fallback static posts when no Shopify blog articles exist
const staticPosts: Array<{
  title: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  slug: string;
  image: string;
  excerpt: Record<Language, string>;
}> = [
  {
    title: { es: "Por Qué Elegimos Cera de Soja", en: "Why We Choose Soy Wax", pl: "Dlaczego Wybieramy Wosk Sojowy", de: "Warum wir Sojawachs wählen", fr: "Pourquoi nous choisissons la cire de soja", pt: "Porque Escolhemos Cera de Soja", it: "Perché Scegliamo la Cera di Soia", nl: "Waarom Wij Sojawas Kiezen" },
    category: { es: "Ingredientes", en: "Ingredients", pl: "Składniki", de: "Zutaten", fr: "Ingrédients", pt: "Ingredientes", it: "Ingredienti", nl: "Ingrediënten" },
    excerpt: { es: "La cera de soja es natural, biodegradable y produce una combustión más limpia que la parafina. Descubre por qué la elegimos.", en: "Soy wax is natural, biodegradable, and burns cleaner than paraffin. Discover why we chose it.", pl: "Wosk sojowy jest naturalny, biodegradowalny i pali się czyściej niż parafina.", de: "Sojawachs ist natürlich, biologisch abbaubar und brennt sauberer als Paraffin.", fr: "La cire de soja est naturelle, biodégradable et brûle plus proprement que la paraffine.", pt: "A cera de soja é natural, biodegradável e produz uma combustão mais limpa.", it: "La cera di soia è naturale, biodegradabile e brucia più pulita della paraffina.", nl: "Sojawas is natuurlijk, biologisch afbreekbaar en brandt schoner dan paraffine." },
    date: "Abril 2026", slug: "cera-de-soja", image: blogCeraSoja,
  },
  {
    title: { es: "Los 4 Aromas de La Vera", en: "The 4 Scents of La Vera", pl: "4 Zapachy La Vera", de: "Die 4 Düfte von La Vera", fr: "Les 4 Parfums de La Vera", pt: "Os 4 Aromas de La Vera", it: "I 4 Profumi di La Vera", nl: "De 4 Geuren van La Vera" },
    category: { es: "Nuestros Aromas", en: "Our Scents", pl: "Nasze Zapachy", de: "Unsere Düfte", fr: "Nos Parfums", pt: "Nossos Aromas", it: "I Nostri Profumi", nl: "Onze Geuren" },
    excerpt: { es: "Lavanda extremeña, romero silvestre, azahar y jara de la sierra: los cuatro aromas que definen nuestra tierra.", en: "Extremaduran lavender, wild rosemary, orange blossom, and mountain rockrose: the four scents that define our land.", pl: "Estremadurska lawenda, dziki rozmaryn, kwiat pomarańczy i górski czystek: cztery zapachy definiujące naszą ziemię.", de: "Extremadura-Lavendel, wilder Rosmarin, Orangenblüte und Berg-Zistrose: die vier Düfte unserer Heimat.", fr: "Lavande d'Estrémadure, romarin sauvage, fleur d'oranger et ciste: les quatre parfums de notre terre.", pt: "Alfazema, alecrim silvestre, flor de laranjeira e esteva: os quatro aromas da nossa terra.", it: "Lavanda, rosmarino selvatico, fiori d'arancio e cisto: i quattro profumi della nostra terra.", nl: "Lavendel, wilde rozemarijn, oranjebloesem en cistusroos: de vier geuren van ons land." },
    date: "Abril 2026", slug: "aromas-la-vera", image: blogAromas,
  },
  {
    title: { es: "Cómo Cuidar Tu Vela Artesanal", en: "How to Care for Your Candle", pl: "Jak Dbać o Swoją Świecę", de: "So pflegst du deine Kerze", fr: "Comment Entretenir Votre Bougie", pt: "Como Cuidar da Sua Vela", it: "Come Prenderti Cura della Tua Candela", nl: "Zo Verzorg Je Jouw Kaars" },
    category: { es: "Consejos", en: "Tips", pl: "Porady", de: "Tipps", fr: "Conseils", pt: "Dicas", it: "Consigli", nl: "Tips" },
    excerpt: { es: "Aprende a recortar la mecha, conseguir un derretimiento uniforme y maximizar las horas de tu vela artesanal.", en: "Learn how to trim the wick, achieve an even melt pool, and maximize your candle's burn time.", pl: "Naucz się przycinać knot, osiągnąć równomierne topienie i maksymalizować czas palenia świecy.", de: "Lerne den Docht zu kürzen, ein gleichmäßiges Schmelzen zu erreichen und die Brenndauer zu maximieren.", fr: "Apprenez à couper la mèche, obtenir une fonte uniforme et maximiser la durée de votre bougie.", pt: "Aprenda a cortar o pavio, obter um derretimento uniforme e maximizar o tempo da sua vela.", it: "Impara a tagliare lo stoppino, ottenere una fusione uniforme e massimizzare la durata della candela.", nl: "Leer de lont te knippen, gelijkmatig smelten te bereiken en de brandtijd te maximaliseren." },
    date: "Abril 2026", slug: "cuidar-vela", image: blogCuidarVela,
  },
];

export default function BlogPage() {
  const { t, language } = useLanguage();
  const [articles, setArticles] = useState<ShopifyArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await storefrontApiRequest(BLOG_ARTICLES_QUERY, { first: 20 });
        const blogEdges = data?.data?.blogs?.edges || [];
        const allArticles = blogEdges.flatMap((blog: { node: { articles: { edges: ShopifyArticle[] } } }) =>
          blog.node.articles.edges
        );
        setArticles(allArticles);
      } catch (e) {
        console.error('Blog load error:', e);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  const hasShopifyArticles = articles.length > 0;

  return (
    <Layout>
      <SEOHead title={t('blog.title')} description={t('blog.subtitle')} canonicalPath="/blog" />
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('blog.title')}</h1>
        <p className="text-muted-foreground">{t('blog.subtitle')}</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : hasShopifyArticles ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.node.id} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                  {article.node.image && (
                    <div className="aspect-video overflow-hidden">
                      <img src={article.node.image.url} alt={article.node.image.altText || article.node.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      {article.node.tags[0] && (
                        <span className="bg-muted px-2 py-1 rounded">{article.node.tags[0]}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {new Date(article.node.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'en' ? 'en-GB' : language)}
                      </span>
                    </div>
                    <h2 className="font-heading text-xl font-semibold mb-3">{article.node.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.node.content}</p>
                    <span className="text-sm font-medium text-primary">{t('blog.readMore')}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staticPosts.map((post) => (
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
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt[language]}</p>
                    <span className="text-sm font-medium text-primary">{t('blog.readMore')}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
