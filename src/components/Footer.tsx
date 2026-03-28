import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t('footer.brand')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/sobre-nosotros" className="hover:opacity-100 transition-opacity">{t('footer.ourStory')}</Link></li>
              <li><Link to="/sobre-nosotros#ingredientes" className="hover:opacity-100 transition-opacity">{t('footer.ingredients')}</Link></li>
              <li><Link to="/sobre-nosotros#proceso" className="hover:opacity-100 transition-opacity">{t('footer.process')}</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">{t('nav.blog')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t('footer.shop')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/tienda" className="hover:opacity-100 transition-opacity">{t('footer.allCandles')}</Link></li>
              <li><Link to="/tienda?collection=hogar" className="hover:opacity-100 transition-opacity">{t('footer.homeCandles')}</Link></li>
              <li><Link to="/tienda?collection=regalo" className="hover:opacity-100 transition-opacity">{t('footer.giftSets')}</Link></li>
              <li><Link to="/b2b" className="hover:opacity-100 transition-opacity">{t('footer.b2b')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t('footer.help')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">{t('footer.faq')}</Link></li>
              <li><Link to="/envios" className="hover:opacity-100 transition-opacity">{t('footer.shipping')}</Link></li>
              <li><Link to="/devoluciones" className="hover:opacity-100 transition-opacity">{t('footer.returns')}</Link></li>
              <li><Link to="/contacto" className="hover:opacity-100 transition-opacity">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/aviso-legal" className="hover:opacity-100 transition-opacity">{t('footer.legalNotice')}</Link></li>
              <li><Link to="/privacidad" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link></li>
              <li><Link to="/cookies" className="hover:opacity-100 transition-opacity">{t('footer.cookies')}</Link></li>
              <li><Link to="/terminos" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/elaromadelavera" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity text-sm">Instagram</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity text-sm">Facebook</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity text-sm">TikTok</a>
            </div>
            <p className="text-xs opacity-60 text-center">{t('footer.copyright')}</p>
            <div className="flex items-center gap-2 text-xs opacity-60">
              <span>{t('footer.euShipping')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
