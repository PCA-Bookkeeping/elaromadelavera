import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Flame, Sparkles, Calculator, ChevronRight, MessageCircle } from "lucide-react";

const SIZES = [
  { id: '150', ml: 150, basePrice: 14.90 },
  { id: '250', ml: 250, basePrice: 24.90 },
  { id: '500', ml: 500, basePrice: 39.90 },
] as const;

const SCENTS = ['lavanda', 'romero', 'azahar', 'jara', 'cafe', 'chocolate', 'canela', 'naranja', 'eucalipto', 'limon', 'vainilla', 'menta', 'coco', 'fresa', 'frutos'] as const;
const LABELS = ['classic', 'minimal', 'rustic', 'elegant'] as const;

const EVENT_TYPES = ['wedding', 'corporate', 'party', 'other'] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CandleCustomizerPage() {
  const { t } = useLanguage();

  const [size, setSize] = useState<string>('250');
  const [scent, setScent] = useState<string>('lavanda');
  const [label, setLabel] = useState<string>('classic');
  const [customText, setCustomText] = useState('');

  // Event calculator
  const [guests, setGuests] = useState(50);
  const [eventType, setEventType] = useState<string>('wedding');
  const [showResult, setShowResult] = useState(false);

  const selectedSize = SIZES.find(s => s.id === size)!;
  const customTextExtra = customText.trim() ? 2.00 : 0;
  const unitPrice = selectedSize.basePrice + customTextExtra;

  const eventCalc = useMemo(() => {
    const ratio = eventType === 'wedding' ? 1 : eventType === 'corporate' ? 0.5 : 0.7;
    const count = Math.max(10, Math.ceil(guests * ratio));
    const bulkDiscount = count >= 50 ? 0.85 : count >= 25 ? 0.90 : count >= 10 ? 0.95 : 1;
    const total = count * selectedSize.basePrice * bulkDiscount;
    return { count, total };
  }, [guests, eventType, selectedSize]);

  const whatsappMsg = encodeURIComponent(
    `Hola! Me gustaría pedir un presupuesto para velas personalizadas:\n- Tamaño: ${selectedSize.ml}ml\n- Aroma: ${t(`scents.${scent}.name`)}\n- Etiqueta: ${t(`customizer.label.${label}`)}\n${customText ? `- Texto: "${customText}"` : ''}\n- Precio estimado por unidad: €${unitPrice.toFixed(2)}`
  );

  const eventWhatsappMsg = encodeURIComponent(
    `Hola! Me gustaría un presupuesto para un evento:\n- Tipo: ${t(`customizer.events.${eventType}`)}\n- Invitados: ${guests}\n- Velas recomendadas: ${eventCalc.count}x ${selectedSize.ml}ml\n- Presupuesto estimado: €${eventCalc.total.toFixed(2)}`
  );

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <Sparkles className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h1 className="heading-xl mb-4">{t('customizer.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('customizer.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Options */}
            <div className="space-y-8">
              {/* Size */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                  {t('customizer.step.size')}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {SIZES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        size === s.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{t(`customizer.size.${s.id}`)}</span>
                        <span className="text-primary font-semibold">€{s.basePrice.toFixed(2)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scent */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                  {t('customizer.step.scent')}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {SCENTS.map(s => (
                    <button
                      key={s}
                      onClick={() => setScent(s)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        scent === s ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <span className="text-sm font-medium">{t(`scents.${s}.name`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Label */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                  {t('customizer.step.label')}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {LABELS.map(l => (
                    <button
                      key={l}
                      onClick={() => setLabel(l)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        label === l ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <span className="text-sm font-medium">{t(`customizer.label.${l}`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Text */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                  {t('customizer.step.text')}
                </h3>
                <input
                  type="text"
                  value={customText}
                  onChange={e => setCustomText(e.target.value)}
                  placeholder={t('customizer.textPlaceholder')}
                  maxLength={40}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {customText.trim() && (
                  <p className="text-xs text-muted-foreground mt-1">+€2,00</p>
                )}
              </div>
            </div>

            {/* Right: Preview & Summary */}
            <div className="space-y-6">
              {/* Visual Preview */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-heading text-lg font-semibold mb-6 text-center">{t('customizer.preview')}</h3>
                <div className="flex justify-center mb-6">
                  <div className={`relative rounded-lg bg-muted flex items-end justify-center ${
                    size === '150' ? 'w-24 h-28' : size === '250' ? 'w-28 h-36' : 'w-32 h-44'
                  }`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-foreground/30" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                      <Flame className="h-4 w-4 text-orange-400" />
                    </div>
                    <div className={`w-full rounded-b-lg p-2 text-center ${
                      label === 'classic' ? 'bg-primary/20' :
                      label === 'minimal' ? 'bg-foreground/5 border-t border-foreground/10' :
                      label === 'rustic' ? 'bg-amber-100 dark:bg-amber-900/30' :
                      'bg-gradient-to-b from-primary/10 to-primary/30'
                    }`}>
                      <p className="text-[10px] font-heading font-semibold truncate">{t(`scents.${scent}.name`)}</p>
                      {customText && <p className="text-[8px] text-muted-foreground truncate mt-0.5">"{customText}"</p>}
                      <p className="text-[8px] text-muted-foreground">{selectedSize.ml}ml</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">{t('customizer.summary')}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">{t('customizer.step.size')}</span><span>{selectedSize.ml}ml</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">{t('customizer.step.scent')}</span><span>{t(`scents.${scent}.name`)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">{t('customizer.step.label')}</span><span>{t(`customizer.label.${label}`)}</span></div>
                  {customText && <div className="flex justify-between"><span className="text-muted-foreground">{t('customizer.step.text')}</span><span>"{customText}"</span></div>}
                  <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold text-base">
                    <span>{t('customizer.price')}</span>
                    <span className="text-primary">€{unitPrice.toFixed(2)}/ud.</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">{t('customizer.minOrder')}</p>
                <a
                  href={`https://wa.me/34656674297?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('customizer.requestQuote')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calculator */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <Calculator className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h2 className="heading-lg mb-3">{t('customizer.events.title')}</h2>
            <p className="text-muted-foreground">{t('customizer.events.subtitle')}</p>
          </motion.div>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">{t('customizer.events.type')}</label>
                <div className="grid grid-cols-2 gap-2">
                  {EVENT_TYPES.map(et => (
                    <button
                      key={et}
                      onClick={() => { setEventType(et); setShowResult(false); }}
                      className={`p-2 rounded-lg border text-sm transition-all ${
                        eventType === et ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                      }`}
                    >
                      {t(`customizer.events.${et}`)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('customizer.events.guests')}</label>
                <input
                  type="number"
                  value={guests}
                  onChange={e => { setGuests(Math.max(1, parseInt(e.target.value) || 1)); setShowResult(false); }}
                  min={1}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                />
              </div>
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              <Calculator className="h-4 w-4" />
              {t('customizer.events.calculate')}
            </button>

            {showResult && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-lg font-semibold mb-2">
                  {t('customizer.events.result').replace('{count}', String(eventCalc.count)).replace('{size}', `${selectedSize.ml}ml`)}
                </p>
                <p className="text-2xl font-bold text-primary mb-4">
                  {t('customizer.events.total').replace('{price}', `€${eventCalc.total.toFixed(2)}`)}
                </p>
                <a
                  href={`https://wa.me/34656674297?text=${eventWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('customizer.events.contact')}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
