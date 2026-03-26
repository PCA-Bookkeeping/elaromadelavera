import { Layout } from "@/components/Layout";

export default function CookiesPage() {
  return (
    <Layout>
      <section className="gradient-gold section-padding text-center">
        <h1 className="heading-xl mb-4">Política de Cookies</h1>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias y mejorar tu experiencia de navegación.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Cookies esenciales</h2>
            <p>Necesarias para el funcionamiento del sitio: sesión de usuario, carrito de compra, preferencias de cookies. No pueden desactivarse.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Cookies analíticas</h2>
            <p>Utilizadas para analizar el tráfico y el comportamiento de los usuarios (Google Analytics, si se activa). Puedes aceptarlas o rechazarlas.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Cookies de marketing</h2>
            <p>Utilizadas para mostrar publicidad relevante (Facebook Pixel, si se activa). Puedes aceptarlas o rechazarlas.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Gestión de cookies</h2>
            <p>Puedes gestionar tus preferencias de cookies en cualquier momento a través del banner de cookies o la configuración de tu navegador.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
