import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Loader2, Leaf, Hand, Truck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);

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
    toast.success("Añadido al carrito", { description: product.title });
  };

  if (loading) {
    return <Layout><div className="flex justify-center py-32"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></Layout>;
  }

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="heading-lg mb-4">Producto no encontrado</h1>
          <Link to="/tienda" className="text-primary font-medium">← Volver a la tienda</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <Link to="/tienda" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">← Volver a la tienda</Link>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Images */}
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
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${i === selectedImage ? 'border-primary' : 'border-border'}`}
                    >
                      <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:col-span-2">
              <h1 className="heading-lg mb-3">{product.title}</h1>
              <p className="text-2xl font-semibold text-gold mb-4">{variant && formatPrice(variant.price.amount)}</p>
              <p className="text-xs text-muted-foreground mb-6">IVA incluido</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Variants */}
              {product.variants.edges.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Tamaño</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.variants.edges.map((v, i) => (
                      <button
                        key={v.node.id}
                        onClick={() => setSelectedVariantIdx(i)}
                        className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                          i === selectedVariantIdx ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'
                        }`}
                      >
                        {v.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Cantidad</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">−</button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">+</button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isCartLoading || !variant?.availableForSale}
                className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2 mb-6"
              >
                {isCartLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><ShoppingCart className="h-5 w-5" /> Añadir al Carrito</>}
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Leaf, text: "100% Natural" },
                  { icon: Hand, text: "Hecho a Mano" },
                  { icon: Truck, text: "Envío en 3-5 días" },
                  { icon: RotateCcw, text: "Devolución 14 días" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-primary" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="descripcion" className="mt-16">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent">
              <TabsTrigger value="descripcion">Descripción</TabsTrigger>
              <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
              <TabsTrigger value="uso">Cómo Usar</TabsTrigger>
              <TabsTrigger value="envio">Envío</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="pt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </TabsContent>
            <TabsContent value="ingredientes" className="pt-6 text-muted-foreground leading-relaxed">
              Cera de soja natural, aceite esencial, mecha de algodón, colorante natural.
            </TabsContent>
            <TabsContent value="uso" className="pt-6 text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>Recorta la mecha a 5mm antes de cada uso.</li>
                <li>Deja que la cera se funda hasta los bordes en el primer uso para evitar túneles.</li>
                <li>No dejes la vela encendida más de 4 horas seguidas.</li>
                <li>Mantén alejada de corrientes de aire.</li>
              </ul>
            </TabsContent>
            <TabsContent value="envio" className="pt-6 text-muted-foreground leading-relaxed">
              <p>España peninsular: 2-5 días laborables. Envío gratuito en pedidos superiores a 50€.</p>
              <Link to="/envios" className="text-primary font-medium mt-2 inline-block">Ver política de envíos completa →</Link>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
