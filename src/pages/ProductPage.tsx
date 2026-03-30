import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Loader2, Leaf, Hand, Truck, RotateCcw, Clock, CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead, productSchema } from "@/components/SEOHead";

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);
  const { t } = useLanguage();

  useEffect(() => {
    async function load() {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.product || null);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    }
    if (handle) load();
  }, [handle]);

  const variant = product?.variants.edges[selectedVariantIdx]?.node;
  const images = product?.images.edges || [];

  const handleAddToCart = async () => {
    if (!product || !variant) return;
    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(t('cart.addedToast'), { description: product.title });
  };

  if (loading) {
    return <Layout><div className="flex justify-center py-32"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></Layout>;
  }

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="heading-lg mb-4">{t('product.notFound')}</h1>
          <Link to="/tienda" className="text-primary font-medium">{t('product.backToShop')}</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <Link to="/tienda" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">{t('product.backToShop')}</Link>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                {images[selectedImage]?.node ? (
                  <img src={images[selectedImage].node.url} alt={images[selectedImage].node.altText || product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl opacity-30">🕯️</div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${i === selectedImage ? 'border-primary' : 'border-border'}`}>
                      <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <h1 className="heading-lg mb-3">{product.title}</h1>
              <p className="text-2xl font-semibold text-gold mb-4">{variant && formatPrice(variant.price.amount)}</p>
              <p className="text-xs text-muted-foreground mb-6">{t('product.vatIncluded')}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {product.variants.edges.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">{t('product.size')}</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.variants.edges.map((v, i) => (
                      <button key={v.node.id} onClick={() => setSelectedVariantIdx(i)} className={`px-4 py-2 rounded-md border text-sm transition-colors ${i === selectedVariantIdx ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'}`}>
                        {v.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-medium mb-2">{t('product.quantity')}</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">−</button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">+</button>
                </div>
              </div>

              <button onClick={handleAddToCart} disabled={isCartLoading || !variant?.availableForSale} className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2 mb-6">
                {isCartLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><ShoppingCart className="h-5 w-5" /> {t('product.addToCart')}</>}
              </button>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Leaf, text: t('product.badge.natural') },
                  { icon: Hand, text: t('product.badge.handmade') },
                  { icon: Truck, text: t('product.badge.shipping') },
                  { icon: RotateCcw, text: t('product.badge.returns') },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-primary" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="descripcion" className="mt-16">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent">
              <TabsTrigger value="descripcion">{t('product.tab.description')}</TabsTrigger>
              <TabsTrigger value="ingredientes">{t('product.tab.ingredients')}</TabsTrigger>
              <TabsTrigger value="uso">{t('product.tab.usage')}</TabsTrigger>
              <TabsTrigger value="envio">{t('product.tab.shipping')}</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="pt-6 text-muted-foreground leading-relaxed">{product.description}</TabsContent>
            <TabsContent value="ingredientes" className="pt-6 text-muted-foreground leading-relaxed">{t('product.ingredients.text')}</TabsContent>
            <TabsContent value="uso" className="pt-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('product.usage.1')}</li>
                <li>{t('product.usage.2')}</li>
                <li>{t('product.usage.3')}</li>
                <li>{t('product.usage.4')}</li>
              </ul>
            </TabsContent>
            <TabsContent value="envio" className="pt-6 text-muted-foreground leading-relaxed">
              <p>{t('product.shipping.text')}</p>
              <Link to="/envios" className="text-primary font-medium mt-2 inline-block">{t('product.shipping.link')}</Link>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
