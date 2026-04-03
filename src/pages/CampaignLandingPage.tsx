import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight, Gift, Star, Shield, Truck, Clock, Flame, Sparkles,
  Heart, MessageCircle, Leaf, Hand, MapPin, Check, ArrowDown, Package,
  Zap, Award, ShoppingBag
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { scentImageMap } from "@/lib/scentImages";
import campaignHero from "@/assets/campaign-premium-hero.jpg";
import campaignProcess from "@/assets/campaign-process.jpg";
import campaignGift from "@/assets/campaign-gift.jpg";
import founderImg from "@/assets/founder-fabian.png";

/* ── animation presets ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ── countdown timer ──────────────────────────────── */
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

/* ── theme configs ────────────────────────────────── */
type CampaignTheme = "presale" | "christmas" | "valentines" | "blackfriday" | "easter" | "mothersday" | "default";

const THEME: Record<CampaignTheme, { gradient: string; badge: string; ctaBg: string }> = {
  presale:     { gradient: "from-amber-950/85 via-amber-900/70 to-amber-800/50",   badge: "bg-amber-500 text-white",      ctaBg: "btn-gold" },
  christmas:   { gradient: "from-red-950/85 via-red-900/70 to-green-900/50",       badge: "bg-red-600 text-white",        ctaBg: "btn-gold" },
  valentines:  { gradient: "from-rose-950/85 via-rose-900/70 to-pink-800/50",      badge: "bg-rose-500 text-white",       ctaBg: "btn-gold" },
  blackfriday: { gradient: "from-gray-950/90 via-gray-900/80 to-gray-800/60",      badge: "bg-yellow-400 text-gray-900",  ctaBg: "btn-gold" },
  easter:      { gradient: "from-violet-950/80 via-violet-900/60 to-sky-800/40",   badge: "bg-violet-500 text-white",     ctaBg: "btn-gold" },
  mothersday:  { gradient: "from-pink-950/80 via-pink-900/60 to-fuchsia-800/40",   badge: "bg-pink-500 text-white",       ctaBg: "btn-gold" },
  default:     { gradient: "from-primary/80 via-primary/60 to-primary/40",          badge: "bg-primary text-primary-foreground", ctaBg: "btn-gold" },
};

/* ── main component ───────────────────────────────── */
export default function CampaignLandingPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const theme = (searchParams.get("theme") as CampaignTheme) || "presale";
  const cfg = THEME[theme] || THEME.default;

  // Countdown: 7 days from now (dynamic per campaign)
  const [endDate] = useState(() => new Date(Date.now() + 7 * 86400000));
  const countdown = useCountdown(endDate);

  // Parallax hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const featuredScents = ["lavanda", "canela", "vainilla", "cafe", "chocolate", "azahar", "romero", "naranja"] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title={t("campaign.seo.title")}
        description={t("campaign.seo.desc")}
        canonicalPath="/campana"
      />

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 1: HERO — Full-screen parallax         */}
      {/* ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={campaignHero}
          alt=""
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${cfg.gradient}`} />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
              style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [-20, 20], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-8 ${cfg.badge} shadow-lg`}
          >
            <Flame className="h-4 w-4" />
            {t("campaign.badge")}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-[1.05] tracking-tight"
          >
            {t("campaign.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("campaign.hero.subtitle")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Link to="/tienda" className={`${cfg.ctaBg} inline-flex items-center justify-center gap-2 text-lg px-12 py-5 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300`}>
              <ShoppingBag className="h-5 w-5" />
              {t("campaign.hero.cta")}
            </Link>
            <a href="#scents" className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-5 rounded-md hover:bg-white/10 hover:border-white transition-all duration-300 font-medium backdrop-blur-sm">
              {t("campaign.hero.cta2")}
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-1 sm:gap-3"
          >
            <Clock className="h-4 w-4 text-amber-300 mr-1" />
            <span className="text-white/60 text-sm hidden sm:inline">{t("campaign.hero.urgency")}</span>
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="bg-white/15 backdrop-blur-md text-white font-bold text-lg sm:text-2xl px-3 py-2 rounded-lg min-w-[3rem] tabular-nums">
                  {String(countdown[unit]).padStart(2, "0")}
                </span>
                <span className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">
                  {t(`campaign.timer.${unit}`)}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ArrowDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 2: SOCIAL PROOF BAR                     */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-card border-b border-border py-5 relative overflow-hidden">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm px-4">
          <div className="flex items-center gap-2">
            <div className="flex">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />)}</div>
            <span className="text-muted-foreground font-medium">{t("campaign.social.handmade")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground font-bold">{t("badge.vegan")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t("campaign.social.natural")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t("campaign.social.shipping")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t("campaign.social.secure")}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 3: VALUE PROPOSITION — 4 pillars        */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="section-padding">
        <div className="container mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-accent-handwritten">{t("campaign.value.tagline")}</span>
            <h2 className="heading-lg mt-2">{t("campaign.benefits.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: t("campaign.benefit.natural"), desc: t("campaign.benefit.natural.desc") },
              { icon: Hand, title: t("campaign.benefit.gift"), desc: t("campaign.benefit.gift.desc") },
              { icon: Shield, title: t("campaign.benefit.guarantee"), desc: t("campaign.benefit.guarantee.desc") },
              { icon: Truck, title: t("campaign.benefit.shipping"), desc: t("campaign.benefit.shipping.desc") },
            ].map((b) => (
              <motion.div key={b.title} variants={scaleIn} className="text-center p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 4: FEATURED SCENTS — grid with hover    */}
      {/* ═══════════════════════════════════════════════ */}
      <section id="scents" className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Sparkles className="h-6 w-6 mx-auto mb-3 text-primary" />
            <h2 className="heading-lg mb-3">{t("campaign.scents.title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("campaign.scents.subtitle")}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredScents.map((s) => (
              <motion.div key={s} variants={scaleIn} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden mb-3 border border-border relative">
                  <img
                    src={scentImageMap[s]}
                    alt={t(`scents.${s}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs leading-snug line-clamp-2">{t(`scents.${s}.desc`)}</p>
                  </div>
                </div>
                <h3 className="text-sm font-heading font-semibold text-center group-hover:text-primary transition-colors">{t(`scents.${s}.name`)}</h3>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
            <Link to="/tienda" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
              {t("campaign.scents.cta")} <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 5: PRODUCT SHOWCASE — split image+text  */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={campaignProcess} alt={t("campaign.process.alt")} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="text-accent-handwritten">{t("campaign.process.tagline")}</motion.span>
              <motion.h2 variants={fadeUp} className="heading-lg mt-2 mb-6">{t("campaign.process.title")}</motion.h2>
              {[
                { icon: Leaf, text: t("campaign.process.step1") },
                { icon: Flame, text: t("campaign.process.step2") },
                { icon: Hand, text: t("campaign.process.step3") },
                { icon: Heart, text: t("campaign.process.step4") },
              ].map((step) => (
                <motion.div key={step.text} variants={fadeUp} className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-8">
                <Link to="/sobre-nosotros" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-3 transition-all text-lg">
                  {t("campaign.process.cta")} <ChevronRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 6: WHY CHOOSE US — 3 columns           */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="section-padding bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto">
          <motion.h2 variants={fadeUp} className="heading-lg text-center mb-14">{t("campaign.why.title")}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: t("campaign.why.quality.title"), desc: t("campaign.why.quality.desc"), checks: [t("campaign.why.quality.c1"), t("campaign.why.quality.c2"), t("campaign.why.quality.c3")] },
              { icon: MapPin, title: t("campaign.why.origin.title"), desc: t("campaign.why.origin.desc"), checks: [t("campaign.why.origin.c1"), t("campaign.why.origin.c2"), t("campaign.why.origin.c3")] },
              { icon: Zap, title: t("campaign.why.experience.title"), desc: t("campaign.why.experience.desc"), checks: [t("campaign.why.experience.c1"), t("campaign.why.experience.c2"), t("campaign.why.experience.c3")] },
            ].map((card) => (
              <motion.div key={card.title} variants={scaleIn} className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300">
                <card.icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="font-heading text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{card.desc}</p>
                <ul className="space-y-2">
                  {card.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 7: GIFT — image + text reversed         */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-2 lg:order-1">
              <motion.div variants={fadeUp}>
                <Gift className="h-10 w-10 text-primary mb-4" />
                <h2 className="heading-lg mb-4">{t("campaign.gift.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t("campaign.gift.desc")}</p>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Package, text: t("campaign.gift.feature1") },
                  { icon: Sparkles, text: t("campaign.gift.feature2") },
                  { icon: Heart, text: t("campaign.gift.feature3") },
                  { icon: MessageCircle, text: t("campaign.gift.feature4") },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 text-sm">
                    <f.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/personalizar" className="btn-gold inline-flex items-center gap-2">
                  {t("campaign.custom.cta")} <ChevronRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/34656674297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("campaign.custom.whatsapp")}
                </a>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src={campaignGift} alt={t("campaign.gift.title")} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 8: FOUNDER STORY — personal trust       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row items-center gap-10">
            <motion.div variants={scaleIn} className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl flex-shrink-0">
              <img src={founderImg} alt="Fabián - Fundador" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Heart className="h-6 w-6 text-primary mb-3" />
              <h2 className="heading-lg mb-4">{t("campaign.story.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("campaign.story.text")}</p>
              <p className="font-heading text-lg font-semibold text-primary">— Fabián, {t("campaign.story.role")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 9: SIZES / PRICING — anchor pricing     */}
      {/* ═══════════════════════════════════════════════ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="section-padding">
        <div className="container mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="heading-lg">{t("campaign.sizes.title")}</h2>
            <p className="text-muted-foreground mt-3">{t("campaign.sizes.subtitle")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { size: t("campaign.sizes.small"), weight: "120g", hours: "20h", price: "12,95€", popular: false },
              { size: t("campaign.sizes.medium"), weight: "220g", hours: "40h", price: "19,95€", popular: true },
              { size: t("campaign.sizes.large"), weight: "400g", hours: "70h", price: "29,95€", popular: false },
            ].map((item) => (
              <motion.div
                key={item.size}
                variants={scaleIn}
                className={`relative p-8 rounded-2xl border text-center transition-all duration-300 hover:shadow-xl ${
                  item.popular ? "border-primary bg-primary/5 shadow-lg scale-105" : "border-border bg-card"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    {t("campaign.sizes.popular")}
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold mb-2">{item.size}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.weight} · {item.hours}</p>
                <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>
                <Link to="/tienda" className={`inline-flex items-center gap-2 w-full justify-center py-3 rounded-lg font-medium transition-all ${
                  item.popular ? "btn-gold" : "btn-primary"
                }`}>
                  {t("campaign.sizes.cta")} <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 10: EMAIL CAPTURE — lead magnet         */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="section-padding gradient-gold">
        <div className="container mx-auto max-w-xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Sparkles className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h2 className="heading-lg mb-4">{t("campaign.email.title")}</h2>
            <p className="text-muted-foreground mb-8">{t("campaign.email.desc")}</p>
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 rounded-2xl bg-card border border-primary/20 shadow-lg">
                <Check className="h-10 w-10 mx-auto mb-3 text-primary" />
                <p className="font-heading text-2xl font-semibold">{t("campaign.email.thanks")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  className="flex-1 px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                />
                <button type="submit" className="btn-gold whitespace-nowrap px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  {t("campaign.email.cta")}
                </button>
              </form>
            )}
            <p className="text-xs text-muted-foreground mt-4">{t("newsletter.privacy")}</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 11: FINAL CTA — urgency close           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0 opacity-10">
          <img src={campaignHero} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative z-10 container mx-auto text-center max-w-3xl">
          <motion.div variants={fadeUp}>
            <Flame className="h-8 w-8 mx-auto mb-6 text-amber-400" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              {t("campaign.final.title")}
            </h2>
            <p className="text-background/70 text-lg mb-10 leading-relaxed">{t("campaign.final.desc")}</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tienda" className="btn-gold inline-flex items-center gap-2 text-lg px-12 py-5 shadow-2xl hover:scale-105 transition-all duration-300">
              <ShoppingBag className="h-5 w-5" />
              {t("campaign.final.cta")}
            </Link>
            <Link to="/personalizar" className="inline-flex items-center justify-center gap-2 border-2 border-background/40 text-background px-8 py-5 rounded-md hover:bg-background/10 transition-all duration-300 font-medium">
              <Gift className="h-5 w-5" />
              {t("campaign.custom.cta")}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
