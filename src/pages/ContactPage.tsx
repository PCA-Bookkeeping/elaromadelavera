import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", privacy: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado", { description: "Te responderemos lo antes posible." });
  };

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">¿Hablamos?</h1>
        <p className="text-muted-foreground">Estamos aquí para ayudarte</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-md mb-6">Contacto</h2>
            <p className="text-muted-foreground mb-8">
              Si tienes alguna pregunta sobre nuestros productos, pedidos o cualquier otra cosa, no dudes en escribirnos.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "[próximamente]" },
                { icon: Phone, label: "Teléfono / WhatsApp", value: "[próximamente]" },
                { icon: MapPin, label: "Ubicación", value: "Jarandilla de la Vera, Cáceres, Extremadura, España" },
                { icon: Clock, label: "Horario", value: "Lunes a Viernes, 9:00 - 18:00 (hora española)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">TikTok</a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Para pedidos B2B (negocios), visita nuestra <a href="/b2b" className="text-primary underline">página de Velas para Negocios</a>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input required placeholder="Nombre *" className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}>
              <option value="">Asunto</option>
              <option>Consulta general</option><option>Sobre un pedido</option><option>Pedidos B2B</option><option>Colaboraciones</option><option>Otro</option>
            </select>
            <textarea required placeholder="Mensaje *" rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} className="mt-1" />
              <span>Acepto la <a href="/privacidad" className="text-primary underline">política de privacidad</a> *</span>
            </label>
            <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
