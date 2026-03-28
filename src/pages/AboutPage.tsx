import { Layout } from "@/components/Layout";
import { Leaf, Eye, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutLandscape from "@/assets/about-landscape.jpg";
import aboutIngredients from "@/assets/about-ingredients.jpg";
import aboutHandmade from "@/assets/about-handmade.jpg";
import aboutAromas from "@/assets/about-aromas.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const { t } = useLanguage();

  const blocks = [
    { title: t('about.block1.title'), text: t('about.block1.text'), image: aboutLandscape, imgRight: true },
    { title: t('about.block2.title'), text: t('about.block2.text'), image: aboutIngredients, imgRight: false },
    { title: t('about.block3.title'), text: t('about.block3.text'), image: aboutHandmade, imgRight: true },
    { title: t('about.block4.title'), text: t('about.block4.text'), image: aboutAromas, imgRight: false },
  ];

  const commitments = [
    { icon: Leaf, title: t('about.sustainability.title'), desc: t('about.sustainability.desc') },
    { icon: Eye, title: t('about.transparency.title'), desc: t('about.transparency.desc') },
    { icon: Users, title: t('about.community.title'), desc: t('about.community.desc') },
  ];

  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">{t('about.heroTitle')}</h1>
        <p className="text-accent-handwritten">{t('about.heroTagline')}</p>
      </section>

      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${block.imgRight ? '' : 'md:[direction:rtl]'}`}
            >
              <div className={block.imgRight ? '' : 'md:[direction:ltr]'}>
                <h2 className="heading-md mb-4">{block.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
              <div className={`aspect-[4/3] rounded-lg overflow-hidden ${block.imgRight ? '' : 'md:[direction:ltr]'}`}>
                <img src={block.image} alt={block.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-6xl opacity-30 max-w-sm mx-auto md:mx-0">👤</div>
          <div>
            <h2 className="heading-md mb-4">{t('about.founder.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">{t('about.founder.text')}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">{t('about.commitment.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item) => (
              <div key={item.title} className="text-center p-8 rounded-lg border border-border">
                <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
