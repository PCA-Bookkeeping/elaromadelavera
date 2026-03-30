import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Building2, Palette, MapPin, Truck, Hotel, UtensilsCrossed, Gift, Heart } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

export default function B2BPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: "", contactName: "", email: "", phone: "",
    businessType: "", location: "", quantity: "", message: "", privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('b2b.form.response'));
  };

  const valueProps = [
    { icon: Palette, title: t('b2b.brand.title'), desc: t('b2b.brand.desc') },
    { icon: MapPin, title: t('b2b.scents.title'), desc: t('b2b.scents.desc') },
    { icon: Truck, title: t('b2b.local.title'), desc: t('b2b.local.desc') },
  ];

  const steps = [
    { n: "1", title: t('b2b.step1.title'), desc: t('b2b.step1.desc') },
    { n: "2", title: t('b2b.step2.title'), desc: t('b2b.step2.desc') },
    { n: "3", title: t('b2b.step3.title'), desc: t('b2b.step3.desc') },
    { n: "4", title: t('b2b.step4.title'), desc: t('b2b.step4.desc') },
  ];

  const useCases = [
    { icon: Hotel, title: t('b2b.hotels.title'), desc: t('b2b.hotels.desc') },
    { icon: UtensilsCrossed, title: t('b2b.restaurants.title'), desc: t('b2b.restaurants.desc') },
    { icon: Gift, title: t('b2b.shops.title'), desc: t('b2b.shops.desc') },
    { icon: Heart, title: t('b2b.events.title'), desc: t('b2b.events.desc') },
  ];

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('b2b.title')}</h1>
        <p className="text-lg text-muted-foreground">{t('b2b.subtitle')}</p>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">{t('b2b.why.title')}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">{t('b2b.why.desc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((b) => (
              <div key={b.title} className="text-center p-6 rounded-lg border border-border">
                <b.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-sage">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('b2b.how.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-4">{s.n}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="heading-lg text-center mb-8">{t('b2b.pricing.title')}</h2>
          <div className="rounded-lg border border-border p-8 space-y-4">
            {[
              [t('b2b.pricing.product'), t('b2b.pricing.unitPrice')],
              [t('b2b.pricing.minOrder'), t('b2b.pricing.minOrderValue')],
              [t('b2b.pricing.customLabel'), "✓"],
              [t('b2b.pricing.leadTime'), t('b2b.pricing.leadTimeValue')],
              [t('b2b.pricing.localDelivery'), t('b2b.pricing.localDeliveryValue')],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="font-medium text-sm">{label}</span>
                <span className="text-sm text-muted-foreground text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('b2b.useCases.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="text-center">
                <uc.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-heading text-lg font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="heading-lg text-center mb-8">{t('b2b.form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder={t('b2b.form.businessName')} className="px-4 py-3 rounded-md border border-border bg-background" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} />
              <input required placeholder={t('b2b.form.contactName')} className="px-4 py-3 rounded-md border border-border bg-background" value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
              <input required type="email" placeholder={t('b2b.form.email')} className="px-4 py-3 rounded-md border border-border bg-background" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <input required type="tel" placeholder={t('b2b.form.phone')} className="px-4 py-3 rounded-md border border-border bg-background" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <select required className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})}>
              <option value="">{t('b2b.form.businessType')}</option>
              <option>Hotel</option><option>Casa Rural</option><option>Restaurante</option><option>Tienda</option><option>Otro</option>
            </select>
            <input required placeholder={t('b2b.form.location')} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
            <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})}>
              <option value="">{t('b2b.form.quantity')}</option>
              <option>10-20</option><option>20-50</option><option>50-100</option><option>+100</option>
            </select>
            <textarea placeholder={t('b2b.form.message')} rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} className="mt-1" />
              <span>{t('b2b.form.privacy')} <a href="/privacidad" className="text-primary underline">{t('b2b.form.privacyLink')}</a> *</span>
            </label>
            <button type="submit" className="btn-primary w-full">{t('b2b.form.submit')}</button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-6">
            {t('b2b.form.response')} <a href="https://wa.me/34656674297" target="_blank" rel="noopener noreferrer" className="text-primary underline">+34 656 674 297</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
