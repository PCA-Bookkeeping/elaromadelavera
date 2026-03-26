import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Building2, Palette, MapPin, Truck, Hotel, UtensilsCrossed, Gift, Heart } from "lucide-react";
import { toast } from "sonner";

export default function B2BPage() {
  const [formData, setFormData] = useState({
    businessName: "", contactName: "", email: "", phone: "",
    businessType: "", location: "", quantity: "", message: "", privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitud enviada", { description: "Responderemos en un máximo de 48 horas." });
  };

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Velas Personalizadas para Tu Negocio</h1>
        <p className="text-lg text-muted-foreground">Hoteles, restaurantes, casas rurales y tiendas de La Vera y alrededores</p>
      </section>

      {/* Value Prop */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">¿Por Qué Velas Personalizadas?</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Ofrece a tus clientes una experiencia sensorial única. Una vela artesanal con el aroma y la etiqueta de tu negocio. Algo que recuerden, que se lleven a casa, que les haga volver.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Tu Marca en Cada Vela", desc: "Etiquetado personalizado con el logo o nombre de tu negocio. Diseño incluido." },
              { icon: MapPin, title: "Aromas de La Vera", desc: "Elige entre nuestros aromas comarcales o solicita un aroma personalizado para tu negocio." },
              { icon: Truck, title: "Producción Local", desc: "Hechas a mano en Jarandilla de la Vera. Entrega directa en la comarca en vehículo propio." },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 rounded-lg border border-border">
                <b.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding gradient-sage">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Cómo Funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "1", title: "Contacto Inicial", desc: "Nos cuentas qué necesitas: cantidad, tamaño, aroma, personalización del etiquetado." },
              { n: "2", title: "Propuesta y Muestra", desc: "Preparamos una propuesta con precio y plazo. Si lo deseas, producimos una muestra para que la apruebes." },
              { n: "3", title: "Producción", desc: "Fabricamos tu pedido a mano en nuestro taller. Cada vela con tu etiqueta personalizada." },
              { n: "4", title: "Entrega", desc: "Entrega directa en tu negocio dentro de la comarca de La Vera (radio de 50 km). Sin intermediarios." },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-4">{s.n}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="heading-lg text-center mb-8">Precios y Pedidos</h2>
          <div className="rounded-lg border border-border p-8 space-y-4">
            {[
              ["Vela personalizada 250ml", "10 – 18 € por unidad"],
              ["Pedido mínimo", "10 unidades"],
              ["Personalización incluida", "Etiqueta con logo o nombre"],
              ["Plazo de entrega", "5 a 10 días laborables"],
              ["Entrega local incluida", "Comarca de La Vera (radio 50 km)"],
              ["Reposición", "Pedidos recurrentes disponibles"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="font-medium text-sm">{label}</span>
                <span className="text-sm text-muted-foreground text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Ideal Para</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Hotel, title: "Hoteles y Casas Rurales", desc: "En habitaciones, recepción o como detalle de bienvenida para tus huéspedes." },
              { icon: UtensilsCrossed, title: "Restaurantes", desc: "En mesas, como parte de la ambientación o como regalo para clientes especiales." },
              { icon: Gift, title: "Tiendas de Regalos", desc: "Un producto artesanal local auténtico para complementar tu catálogo." },
              { icon: Heart, title: "Eventos y Bodas", desc: "Detalles personalizados para invitados. Aromas y etiquetado a medida." },
            ].map((uc) => (
              <div key={uc.title} className="text-center">
                <uc.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-heading text-lg font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="heading-lg text-center mb-8">Solicita Información</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Nombre del negocio *" className="px-4 py-3 rounded-md border border-border bg-background" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} />
              <input required placeholder="Nombre de contacto *" className="px-4 py-3 rounded-md border border-border bg-background" value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
              <input required type="email" placeholder="Email *" className="px-4 py-3 rounded-md border border-border bg-background" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <input required type="tel" placeholder="Teléfono *" className="px-4 py-3 rounded-md border border-border bg-background" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <select required className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})}>
              <option value="">Tipo de negocio *</option>
              <option>Hotel</option><option>Casa Rural</option><option>Restaurante</option><option>Tienda</option><option>Otro</option>
            </select>
            <input required placeholder="Ubicación / Municipio *" className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
            <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})}>
              <option value="">Cantidad estimada</option>
              <option>10-20</option><option>20-50</option><option>50-100</option><option>Más de 100</option>
            </select>
            <textarea placeholder="Mensaje / Necesidades específicas" rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} className="mt-1" />
              <span>Acepto la <a href="/privacidad" className="text-primary underline">política de privacidad</a> *</span>
            </label>
            <button type="submit" className="btn-primary w-full">Enviar Solicitud</button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Respondemos en un máximo de 48 horas. Para consultas urgentes, llámanos o escríbenos por WhatsApp.
          </p>
        </div>
      </section>
    </Layout>
  );
}
