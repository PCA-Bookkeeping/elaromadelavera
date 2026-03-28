import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const { t } = useLanguage();

  const messages = [t('announcement.1'), t('announcement.2'), t('announcement.3')];

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-center text-sm py-2.5 px-4 relative overflow-hidden">
      <span className="animate-fade-in" key={msgIndex}>{messages[msgIndex]}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label={t('common.close')}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
