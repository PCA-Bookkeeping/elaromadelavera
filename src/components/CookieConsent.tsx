import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="container mx-auto max-w-4xl bg-card border border-border rounded-xl shadow-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold mb-1">{t('cookie.title')}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t('cookie.text')}{' '}
                  <Link to="/cookies" className="text-primary underline">{t('cookie.link')}</Link>.
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={decline} className="px-4 py-2 text-sm rounded-md border border-border hover:bg-muted transition-colors">
                  {t('cookie.decline')}
                </button>
                <button onClick={accept} className="btn-primary text-sm px-4 py-2">
                  {t('cookie.accept')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
