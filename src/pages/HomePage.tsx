import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Leaf, Flower2, Hand, MapPin, ChevronRight, Star, Shield, CreditCard, Package, RotateCcw, Sparkles, Flame, Eye } from "lucide-react";
import { VeganBadge } from "@/components/VeganBadge";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEOHead, organizationSchema, localBusinessSchema } from "@/components/SEOHead";
import { scentImageMap } from "@/lib/scentImages";
import heroImage from "@/assets/hero-candle.jpg";
import collectionHogar from "@/assets/collection-hogar.jpg";
import collectionRegalo from "@/assets/collection-regalo.jpg";
import collectionB2b from "@/assets/collection-b2b.jpg";
import aboutWorkshop from "@/assets/about-workshop.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  const { t } = useLanguage();

  const usps = [
    { icon: Leaf, title: t('usp.vegan.title'), desc: t('usp.vegan.desc') },
    { icon: Flower2, title: t('usp.oils.title'), desc: t('usp.oils.desc') },
    { icon: Hand, title: t('usp.handmade.title'), desc: t('usp.handmade.desc') },
    { icon: MapPin, title: t('usp.location.title'), desc: t('usp.location.desc') },
  ];

  const trustBadges = [
    { icon: Shield, title: t('trust.guarantee'), desc: t('trust.guarantee.desc') },
    { icon: CreditCard, title: t('trust.secure'), desc: t('trust.secure.desc') },
    { icon: Package, title: t('trust.shipping'), desc: t('trust.shipping.desc') },
    { icon: RotateCcw, title: t('trust.returns'), desc: t('trust.returns.desc') },
  ];

  const collections = [
    { title: t('collections.hogar.title'), desc: t('collections.hogar.desc'), link: "/tienda?collection=hogar", cta: t('collections.hogar.cta'), image: collectionHogar },
    { title: t('collections.regalo.title'), desc: t('collections.regalo.desc'), link: "/tienda?collection=regalo", cta: t('collections.regalo.cta'), image: collectionRegalo },
    { title: t('collections.b2b.title'), desc: t('collections.b2b.desc'), link: "/b2b", cta: t('collections.b2b.cta'), image: collectionB2b },
  ];

  const scentKeys = ['lavanda', 'cafe', 'chocolate', 'romero', 'azahar', 'jara', 'canela', 'naranja', 'eucalipto', 'limon', 'vainilla', 'menta', 'coco', 'fresa', 'frutos'] as const;
  const scents = scentKeys.map(key => ({
    key,
    name: t(`scents.${key}.name`),
    desc: t(`scents.${key}.desc`),
    image: scentImageMap[key] || null,
  }));

  const steps = [
    { title: t('process.1.title'), desc: t('process.1.desc') },
    { title: t('process.2.title'), desc: t('process.2.desc') },
    { title: t('process.3.title'), desc: t('process.3.desc') },
    { title: t('process.4.title'), desc: t('process.4.desc') },
  ];

  const whyReasons = [
    { icon: Eye, title: t('urgency.why.1.title'), desc: t('urgency.why.1.desc') },
    { icon: Flame, title: t('urgency.why.2.title'), desc: t('urgency.why.2.desc') },
    { icon: Sparkles, title: t('urgency.why.3.title'), desc: t('urgency.why.3.desc') },
  ];

  return (
    <Layout>
      <SEOHead
        title={t('hero.title')}
        description={t('hero.subtitle')}
        canonicalPath="/"
        jsonLd={{ ...organizationSchema, ...localBusinessSchema }}
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Vela artesanal de cera de soja hecha a mano en La Vera" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/55" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20"
        >
          <p className="text-accent-handwritten mb-4 text-primary-foreground">{t('hero.tagline')}</p>
          <h1 className="heading-xl text-primary-foreground mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/tienda" className="btn-gold inline-flex items-center justify-center gap-2 text-lg px-10 py-4">
              {t('hero.cta')} <ChevronRight className="h-5 w-5" />
            </Link>
            <Link to="/b2b" className="btn-outline-warm inline-flex items-center justify-center border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
              {t('hero.cta2')}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <span>{t('hero.badge.vegan')}</span>
            <span>{t('hero.badge.natural')}</span>
            <span>{t('hero.badge.handmade')}</span>
            <span>{t('hero.badge.location')}</span>
            <span>{t('hero.badge.shipping')}</span>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar - NEW persuasion element */}
      <section className="bg-card border-b border-border py-6 px-4">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3 justify-center text-center lg:text-left lg:justify-start">
              <badge.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold">{badge.title}</p>
                <p className="text-xs text-muted-foreground hidden sm:block">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USP Bar */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="bg-muted py-10 px-4"
      >
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => (
            <motion.div key={usp.title} variants={fadeUp} className="text-center">
              <usp.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-heading text-lg font-semibold mb-1">{usp.title}</h3>
              <p className="text-sm text-muted-foreground">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Urgency: Limited Batch */}
      <section className="py-6 px-4 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="font-heading text-lg font-semibold">{t('urgency.batch')}</p>
          <span className="text-sm text-muted-foreground">{t('urgency.batch.desc')}</span>
        </div>
      </section>

      {/* Collections */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="section-padding"
      >
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('collections.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col) => (
              <motion.div key={col.title} variants={fadeUp}>
                <Link to={col.link} className="group block">
                  <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow">
                    <img src={col.image} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{col.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{col.desc}</p>
                  <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                    {col.cta} <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us - NEW persuasion */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="section-padding bg-muted/30"
      >
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('urgency.why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyReasons.map((reason) => (
              <motion.div key={reason.title} variants={fadeUp} className="text-center p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
                <reason.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Brand Story Teaser */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="section-padding bg-muted/50"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="aspect-[4/3] rounded-lg overflow-hidden">
            <img src={aboutWorkshop} alt="Taller artesanal de El Aroma de la Vera" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="heading-lg mb-6">{t('story.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t('story.text')}</p>
            <Link to="/sobre-nosotros" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              {t('story.cta')} <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Scents */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="section-padding"
      >
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('scents.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {scents.map((scent) => (
              <motion.div key={scent.key} variants={fadeUp} className="text-center rounded-lg border border-border hover:shadow-md transition-shadow bg-card overflow-hidden">
                {scent.image ? (
                  <div className="aspect-square overflow-hidden">
                    <img src={scent.image} alt={scent.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ) : (
                  <div className="aspect-square bg-muted flex items-center justify-center text-4xl opacity-40">🕯️</div>
                )}
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold mb-2">{scent.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{scent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
        className="section-padding gradient-sage"
      >
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('process.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="relative">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* B2B Teaser */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="section-padding bg-primary/5"
      >
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="heading-lg mb-4">{t('b2b.teaser.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('b2b.teaser.desc')}</p>
          <Link to="/b2b" className="btn-primary inline-flex items-center gap-2">
            {t('b2b.teaser.cta')} <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('reviews.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-lg border border-border text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-border" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">{t('reviews.placeholder')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-2">{t('instagram.title')}</h2>
          <p className="text-muted-foreground mb-8">@elaromadelavera</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-3xl mx-auto mb-6">
            {[scentImageMap.lavanda, scentImageMap.romero, scentImageMap.azahar, scentImageMap.jara, collectionHogar, collectionRegalo].map((img, i) => (
              <div key={i} className="aspect-square rounded-md overflow-hidden">
                <img src={img} alt="Instagram El Aroma de la Vera" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
          <a href="https://instagram.com/elaromadelavera" target="_blank" rel="noopener noreferrer" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            {t('instagram.cta')} <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-gold">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="heading-lg mb-4">{t('newsletter.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('newsletter.desc')}</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">{t('newsletter.cta')}</button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">{t('newsletter.privacy')}</p>
        </div>
      </section>
    </Layout>
  );
}
