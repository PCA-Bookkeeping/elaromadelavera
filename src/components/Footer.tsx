import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">El Aroma de la Vera</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/sobre-nosotros" className="hover:opacity-100 transition-opacity">Nuestra Historia</Link></li>
              <li><Link to="/sobre-nosotros#ingredientes" className="hover:opacity-100 transition-opacity">Nuestros Ingredientes</Link></li>
              <li><Link to="/sobre-nosotros#proceso" className="hover:opacity-100 transition-opacity">Proceso de Fabricación</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Comprar</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/tienda" className="hover:opacity-100 transition-opacity">Todas las Velas</Link></li>
              <li><Link to="/tienda?collection=hogar" className="hover:opacity-100 transition-opacity">Velas de Hogar</Link></li>
              <li><Link to="/tienda?collection=regalo" className="hover:opacity-100 transition-opacity">Sets de Regalo</Link></li>
              <li><Link to="/b2b" className="hover:opacity-100 transition-opacity">Velas para Negocios (B2B)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">Preguntas Frecuentes</Link></li>
              <li><Link to="/envios" className="hover:opacity-100 transition-opacity">Envíos y Entregas</Link></li>
              <li><Link to="/devoluciones" className="hover:opacity-100 transition-opacity">Política de Devoluciones</Link></li>
              <li><Link to="/contacto" className="hover:opacity-100 transition-opacity">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/aviso-legal" className="hover:opacity-100 transition-opacity">Aviso Legal</Link></li>
              <li><Link to="/privacidad" className="hover:opacity-100 transition-opacity">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:opacity-100 transition-opacity">Política de Cookies</Link></li>
              <li><Link to="/terminos" className="hover:opacity-100 transition-opacity">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity text-sm">Instagram</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity text-sm">Facebook</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity text-sm">TikTok</a>
            </div>
            <p className="text-xs opacity-60 text-center">
              © 2026 El Aroma de la Vera. Hecho a mano en Jarandilla de la Vera, Extremadura.
            </p>
            <div className="flex items-center gap-2 text-xs opacity-60">
              <span>🇪🇺 Envíos a toda España y Europa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
