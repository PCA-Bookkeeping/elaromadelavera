import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { storefrontApiRequest, BLOG_ARTICLES_QUERY, type ShopifyArticle } from "@/lib/shopify";
import { Loader2, CalendarDays } from "lucide-react";
import { staticPosts } from "@/lib/blog";

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
                    <Link to={`/blog/${article.node.handle}`} className="block aspect-video overflow-hidden">
                      <img src={article.node.image.url} alt={article.node.image.altText || article.node.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </Link>
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
                    <h2 className="font-heading text-xl font-semibold mb-3">
                      <Link to={`/blog/${article.node.handle}`} className="hover:text-primary transition-colors">
                        {article.node.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.node.content}</p>
                    <Link to={`/blog/${article.node.handle}`} className="text-sm font-medium text-primary">{t('blog.readMore')}</Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staticPosts.map((post) => (
                <article key={post.slug} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                  <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-muted px-2 py-1 rounded">{post.category[language]}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="font-heading text-xl font-semibold mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title[language]}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt[language]}</p>
                    <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-primary">{t('blog.readMore')}</Link>
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
