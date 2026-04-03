import { useState, useEffect } from "react";
import { X, Sparkles, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function EmailCapturePopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popup_dismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(handleClose, 3000);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label={t("common.close")}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 text-center">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-heading text-2xl font-semibold mb-2">{t("popup.thanks.title")}</p>
                  <p className="text-muted-foreground text-sm">{t("popup.thanks.desc")}</p>
                </motion.div>
              ) : (
                <>
                  <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-2xl font-bold mb-2">{t("popup.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{t("popup.desc")}</p>

                  {/* Vegan badge in popup */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                    🌱 {t("popup.vegan")}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("newsletter.placeholder")}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button type="submit" className="btn-gold w-full py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                      {t("popup.cta")}
                    </button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4">{t("newsletter.privacy")}</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
