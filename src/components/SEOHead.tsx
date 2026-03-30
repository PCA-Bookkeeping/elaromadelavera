import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://elaromadelavera.lovable.app';
const DEFAULT_TITLE = 'El Aroma de la Vera | Velas Artesanales de Cera de Soja';
const DEFAULT_DESC = 'Velas artesanales hechas a mano con cera de soja natural y aceites esenciales. Aromas de La Vera, Extremadura: lavanda, romero, azahar y jara. Envío a toda España y Europa.';

export function SEOHead({ title, description, canonicalPath, jsonLd }: SEOHeadProps) {
  const location = useLocation();
  const path = canonicalPath || location.pathname;
  const fullTitle = title ? `${title} | El Aroma de la Vera` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESC;
  const canonicalUrl = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'El Aroma de la Vera');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // JSON-LD
    if (jsonLd) {
      let script = document.querySelector('script[data-seo-jsonld]') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-jsonld', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const oldScript = document.querySelector('script[data-seo-jsonld]');
      if (oldScript) oldScript.remove();
    };
  }, [fullTitle, desc, canonicalUrl, jsonLd]);

  return null;
}

// Pre-built JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "El Aroma de la Vera",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "description": DEFAULT_DESC,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jarandilla de la Vera",
    "addressRegion": "Cáceres, Extremadura",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-656-674-297",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English", "Polish"]
  },
  "sameAs": ["https://instagram.com/elaromadelavera"]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "El Aroma de la Vera",
  "image": `${BASE_URL}/logo.png`,
  "description": DEFAULT_DESC,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jarandilla de la Vera",
    "addressLocality": "Jarandilla de la Vera",
    "addressRegion": "Cáceres",
    "postalCode": "10450",
    "addressCountry": "ES"
  },
  "telephone": "+34656674297",
  "url": BASE_URL,
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export function productSchema(product: { name: string; description: string; price: string; image?: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": product.url,
    "brand": { "@type": "Brand", "name": "El Aroma de la Vera" },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/PreOrder",
      "seller": { "@type": "Organization", "name": "El Aroma de la Vera" }
    },
    "material": "Cera de soja natural, aceites esenciales, mecha de algodón"
  };
}
