import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Flame, Leaf, Gift, Mail, ArrowRight, Clock, Sparkles, Heart, MapPin, Check } from "lucide-react";
import { trackLead } from "@/components/Analytics";
import { Link } from "react-router-dom";

/* ── countdown hook ──────────────────────────── */
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PreLaunchPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Launch date: April 20, 2025 (adjustable)
  const launchDate = new Date("2025-04-20T10:00:00+02:00");
  const countdown = useCountdown(launchDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      trackLead("prelaunch_page");
    }
  };

  const features = [
    { icon: Leaf, text: t("prelaunch.feature.vegan") },
    { icon: Flame, text: t("prelaunch.feature.handmade") },
    { icon: MapPin, text: t("prelaunch.feature.local") },
    { icon: Gift, text: t("prelaunch.feature.gift") },
  ];

  const scents = [
    "Lavanda Extremeña", "Café", "Chocolate", "Romero Silvestre",
    "Azahar", "Jara de la Sierra", "Canela", "Naranja Dulce",
    "Eucalipto", "Limón", "Vainilla", "Menta", "Coco", "Fresa", "Frutos del Bosque",
  ];

  return (
    <Layout>
      <SEOHead
        title={t("prelaunch.seo.title")}
        description={t("prelaunch.seo.desc")}
        canonicalPath="/prelanzamiento"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Clock className="h-4 w-4" />
              {t("prelaunch.badge")}
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("prelaunch.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("prelaunch.subtitle")}
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex justify-center gap-4 md:gap-6 mb-12"
          >
            {[
              { value: countdown.days, label: t("prelaunch.days") },
              { value: countdown.hours, label: t("prelaunch.hours") },
              { value: countdown.minutes, label: t("prelaunch.minutes") },
              { value: countdown.seconds, label: t("prelaunch.seconds") },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-2 border-primary/20 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Email Capture */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
                <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-heading text-xl font-semibold mb-1">{t("prelaunch.thanks.title")}</p>
                <p className="text-sm text-muted-foreground">{t("prelaunch.thanks.desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="btn-gold px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  {t("prelaunch.cta")}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="text-xs text-muted-foreground mt-3">{t("prelaunch.discount")}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <f.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t("prelaunch.scents.title")}</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">{t("prelaunch.scents.desc")}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {scents.map((scent, i) => (
              <motion.span
                key={scent}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
              >
                <Flame className="h-3.5 w-3.5 text-primary" />
                {scent}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">{t("prelaunch.why.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Leaf, title: t("prelaunch.why.vegan.title"), desc: t("prelaunch.why.vegan.desc") },
              { icon: Heart, title: t("prelaunch.why.handmade.title"), desc: t("prelaunch.why.handmade.desc") },
              { icon: Gift, title: t("prelaunch.why.gift.title"), desc: t("prelaunch.why.gift.desc") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15 } } }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{t("prelaunch.final.title")}</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t("prelaunch.final.desc")}</p>
            <Link to="/tienda" className="btn-gold px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              {t("prelaunch.final.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
