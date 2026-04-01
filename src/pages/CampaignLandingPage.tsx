import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ChevronRight, Gift, Star, Shield, Truck, Clock, Flame, Sparkles, Heart, MessageCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { scentImageMap } from "@/lib/scentImages";
import campaignHero from "@/assets/campaign-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

type CampaignTheme = 'presale' | 'christmas' | 'valentines' | 'blackfriday' | 'easter' | 'mothersday' | 'default';

const CAMPAIGN_CONFIG: Record<CampaignTheme, { gradient: string; accent: string; badgeClass: string }> = {
  presale: { gradient: 'from-amber-900/80 to-amber-700/60', accent: 'bg-amber-500', badgeClass: 'bg-amber-500 text-white' },
  christmas: { gradient: 'from-red-900/80 to-green-900/60', accent: 'bg-red-600', badgeClass: 'bg-red-600 text-white' },
  valentines: { gradient: 'from-rose-900/80 to-pink-800/60', accent: 'bg-rose-500', badgeClass: 'bg-rose-500 text-white' },
  blackfriday: { gradient: 'from-gray-950/90 to-gray-800/70', accent: 'bg-yellow-400', badgeClass: 'bg-yellow-400 text-gray-900' },
  easter: { gradient: 'from-violet-900/70 to-sky-800/50', accent: 'bg-violet-500', badgeClass: 'bg-violet-500 text-white' },
  mothersday: { gradient: 'from-pink-900/70 to-fuchsia-800/50', accent: 'bg-pink-500', badgeClass: 'bg-pink-500 text-white' },
  default: { gradient: 'from-primary/80 to-primary/50', accent: 'bg-primary', badgeClass: 'bg-primary text-primary-foreground' },
};

export default function CampaignLandingPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const theme = (searchParams.get('theme') as CampaignTheme) || 'presale';
  const config = CAMPAIGN_CONFIG[theme] || CAMPAIGN_CONFIG.default;

  const featuredScents = ['lavanda', 'vainilla', 'canela', 'cafe', 'chocolate', 'azahar'] as const;

  const benefits = [
    { icon: Flame, text: t('campaign.benefit.natural') },
    { icon: Gift, text: t('campaign.benefit.gift') },
    { icon: Shield, text: t('campaign.benefit.guarantee') },
    { icon: Truck, text: t('campaign.benefit.shipping') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title={t('campaign.seo.title')}
        description={t('campaign.seo.desc')}
        canonicalPath="/campana"
      />

      {/* HERO with overlay */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <img src={campaignHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-b ${config.gradient}`} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 ${config.badgeClass}`}>
            {t('campaign.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t('campaign.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
            {t('campaign.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/tienda" className="btn-gold inline-flex items-center justify-center gap-2 text-lg px-10 py-4">
              {t('campaign.hero.cta')} <ChevronRight className="h-5 w-5" />
            </Link>
            <a href="#scents" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors font-medium">
              {t('campaign.hero.cta2')}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <Clock className="h-4 w-4" />
            <span>{t('campaign.hero.urgency')}</span>
          </div>
        </motion.div>
      </section>

      {/* Social proof bar */}
      <section className="bg-card border-b border-border py-5">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />)}
            </div>
            <span className="text-muted-foreground">{t('campaign.social.handmade')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t('campaign.social.natural')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t('campaign.social.shipping')}</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-10">{t('campaign.benefits.title')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <motion.div key={b.text} variants={fadeUp} className="text-center p-6 rounded-xl border border-border bg-card">
                <b.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured scents */}
      <section id="scents" className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <Sparkles className="h-6 w-6 mx-auto mb-3 text-primary" />
            <h2 className="heading-lg mb-3">{t('campaign.scents.title')}</h2>
            <p className="text-muted-foreground">{t('campaign.scents.subtitle')}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredScents.map(s => (
              <motion.div key={s} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-square rounded-xl overflow-hidden mb-3 border border-border group-hover:shadow-lg transition-shadow">
                  <img src={scentImageMap[s]} alt={t(`scents.${s}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="text-sm font-semibold text-center">{t(`scents.${s}.name`)}</h3>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/tienda" className="btn-primary inline-flex items-center gap-2">
              {t('campaign.scents.cta')} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emotional story block */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Heart className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h2 className="heading-lg mb-6">{t('campaign.story.title')}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{t('campaign.story.text')}</p>
            <Link to="/sobre-nosotros" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              {t('campaign.story.cta')} <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Customizer CTA */}
      <section className="section-padding bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto text-center max-w-2xl">
          <Gift className="h-8 w-8 mx-auto mb-4 text-primary" />
          <h2 className="heading-lg mb-4">{t('campaign.custom.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('campaign.custom.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/personalizar" className="btn-gold inline-flex items-center gap-2">
              {t('campaign.custom.cta')} <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/34656674297"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              {t('campaign.custom.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="section-padding gradient-gold">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="heading-lg mb-4">{t('campaign.email.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('campaign.email.desc')}</p>
          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-6 rounded-xl bg-card border border-primary/20">
              <Sparkles className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-heading text-xl font-semibold">{t('campaign.email.thanks')}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">{t('campaign.email.cta')}</button>
            </form>
          )}
          <p className="text-xs text-muted-foreground mt-4">{t('newsletter.privacy')}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{t('campaign.final.title')}</h2>
          <p className="text-background/70 mb-8">{t('campaign.final.desc')}</p>
          <Link to="/tienda" className="btn-gold inline-flex items-center gap-2 text-lg px-10 py-4">
            {t('campaign.final.cta')} <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
