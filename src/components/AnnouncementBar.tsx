import { useState } from "react";
import { X } from "lucide-react";

const messages = [
  "🌿 Envío gratis en pedidos superiores a 50€ | Hecho a mano en La Vera, Extremadura",
  "🔥 Nueva colección de velas artesanales. ¡Descúbrela!",
  "🎁 ¿Buscas un regalo especial? Descubre nuestros sets de regalo",
];

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [msgIndex] = useState(0);

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-center text-sm py-2.5 px-4 relative">
      <span>{messages[msgIndex]}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
