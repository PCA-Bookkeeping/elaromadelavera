import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", privacy: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.form.sent'), { description: t('contact.form.sentDesc') });
  };

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('contact.title')}</h1>
        <p className="text-muted-foreground">{t('contact.subtitle')}</p>
      </section>
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-md mb-6">{t('contact.heading')}</h2>
            <p className="text-muted-foreground mb-8">{t('contact.desc')}</p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: t('contact.email'), value: "hola@elaromadelavera.com" },
                { icon: Phone, label: t('contact.phone'), value: "+34 656 674 297" },
                { icon: MapPin, label: t('contact.location'), value: "Jarandilla de la Vera, Cáceres, Extremadura, España" },
                { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
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
              <a href="https://instagram.com/elaromadelavera" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">TikTok</a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {t('contact.b2b')} <a href="/b2b" className="text-primary underline">{t('contact.b2bLink')}</a>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input required placeholder={t('contact.form.name')} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required type="email" placeholder={t('contact.form.email')} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}>
              <option value="">{t('contact.form.subject')}</option>
              <option>General</option><option>Order</option><option>B2B</option><option>Other</option>
            </select>
            <textarea required placeholder={t('contact.form.message')} rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-background" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} className="mt-1" />
              <span>{t('b2b.form.privacy')} <a href="/privacidad" className="text-primary underline">{t('b2b.form.privacyLink')}</a> *</span>
            </label>
            <button type="submit" className="btn-primary w-full">{t('contact.form.submit')}</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
