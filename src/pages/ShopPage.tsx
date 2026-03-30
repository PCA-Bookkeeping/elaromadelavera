import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShopifyProduct, storefrontApiRequest, PRODUCTS_QUERY, formatPrice } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Loader2, Clock, CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);
  const { t } = useLanguage();

  useEffect(() => {
    async function load() {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 50 });
        setProducts(data?.data?.products?.edges || []);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    }
    load();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(t('cart.addedToast'), { description: product.node.title });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <h1 className="heading-xl text-center mb-4">{t('shop.title')}</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t('shop.subtitle')}</p>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🕯️</span>
              <h2 className="heading-md mb-2">{t('shop.comingSoon')}</h2>
              <p className="text-muted-foreground">{t('shop.comingSoonDesc')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const variant = product.node.variants.edges[0]?.node;
                const image = product.node.images.edges[0]?.node;
                return (
                  <div key={product.node.id} className="group border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                    <Link to={`/producto/${product.node.handle}`}>
                      <div className="aspect-square bg-muted overflow-hidden">
                        {image ? (
                          <img src={image.url} alt={image.altText || product.node.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">🕯️</div>
                        )}
                      </div>
                    </Link>
                    <div className="p-5">
                      <Link to={`/producto/${product.node.handle}`}>
                        <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{product.node.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.node.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gold">{variant && formatPrice(variant.price.amount)}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={isCartLoading}
                          className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-2"
                        >
                          {isCartLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><ShoppingCart className="h-4 w-4" /> {t('shop.addToCart')}</>}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
