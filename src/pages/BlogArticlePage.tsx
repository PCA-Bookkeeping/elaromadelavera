import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, ChevronLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { BLOG_ARTICLES_QUERY, storefrontApiRequest, type ShopifyArticle } from "@/lib/shopify";
import { getStaticPost } from "@/lib/blog";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [article, setArticle] = useState<ShopifyArticle["node"] | null>(null);
  const [loading, setLoading] = useState(true);

  const staticPost = slug ? getStaticPost(slug) : undefined;

  useEffect(() => {
    async function loadArticle() {
      if (!slug || staticPost) {
        setLoading(false);
        return;
      }

      try {
        const data = await storefrontApiRequest(BLOG_ARTICLES_QUERY, { first: 50 });
        const blogEdges = data?.data?.blogs?.edges || [];
        const allArticles = blogEdges.flatMap((blog: { node: { articles: { edges: ShopifyArticle[] } } }) => blog.node.articles.edges);
        const match = allArticles.find((entry) => entry.node.handle === slug);
        setArticle(match?.node || null);
      } catch (error) {
        console.error("Blog article load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug, staticPost]);

  const title = staticPost ? staticPost.title[language] : article?.title;
  const description = staticPost ? staticPost.excerpt[language] : article?.content;
  const image = staticPost ? staticPost.image : article?.image?.url;

  return (
    <Layout>
      {title && <SEOHead title={title} description={description} canonicalPath={`/blog/${slug}`} />}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ChevronLeft className="h-4 w-4" /> Volver al blog
          </Link>

          {loading ? (
            <div className="py-20 text-center text-muted-foreground">Cargando…</div>
          ) : !staticPost && !article ? (
            <div className="py-20 text-center text-muted-foreground">Artículo no encontrado.</div>
          ) : (
            <article>
              {image && (
                <div className="aspect-[16/8] rounded-xl overflow-hidden mb-8 border border-border bg-card">
                  <img src={image} alt={title} className="w-full h-full object-cover" loading="eager" />
                </div>
              )}

              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="inline-flex rounded-full bg-muted px-3 py-1">
                  {staticPost ? staticPost.category[language] : article?.tags?.[0] || "Blog"}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {staticPost ? staticPost.date : article ? new Date(article.publishedAt).toLocaleDateString(language === "es" ? "es-ES" : language === "en" ? "en-GB" : language) : ""}
                </span>
              </div>

              <h1 className="heading-lg mb-6">{title}</h1>

              {staticPost ? (
                <div className="prose prose-neutral max-w-none text-foreground">
                  {staticPost.body[language].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="prose prose-neutral max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: article?.contentHtml || "" }} />
              )}
            </article>
          )}
        </div>
      </section>
    </Layout>
  );
}