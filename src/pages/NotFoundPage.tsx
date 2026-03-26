import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="section-padding text-center min-h-[60vh] flex flex-col items-center justify-center">
        <span className="text-8xl mb-6">🕯️</span>
        <h1 className="heading-xl mb-4">¡Ups! Esta página no existe</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Parece que te has perdido entre los campos de lavanda de La Vera. No te preocupes, te ayudamos a encontrar lo que buscas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/tienda" className="btn-gold">Ir a la tienda</Link>
          <Link to="/" className="btn-outline-warm">Volver al inicio</Link>
        </div>
      </section>
    </Layout>
  );
}
