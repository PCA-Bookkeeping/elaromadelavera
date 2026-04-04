import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: Array<{ name: string; path: string }>;
  noindex?: boolean;
}

const BASE_URL = 'https://elaromadelavera.lovable.app';
const DEFAULT_TITLE = 'El Aroma de la Vera | Velas Artesanales de Cera de Soja';
const DEFAULT_DESC = 'Velas artesanales hechas a mano con cera de soja natural y aceites esenciales. Aromas de La Vera, Extremadura: lavanda, romero, azahar y jara. Envío a toda España y Europa.';

const HREFLANG_MAP: Record<string, string> = {
  es: 'es', en: 'en', pl: 'pl', de: 'de', fr: 'fr', pt: 'pt', it: 'it', nl: 'nl',
};

export function SEOHead({ title, description, canonicalPath, jsonLd, breadcrumbs, noindex }: SEOHeadProps) {
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

    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    }

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    Object.entries(HREFLANG_MAP).forEach(([, lang]) => {
      const hrefLink = document.createElement('link');
      hrefLink.setAttribute('rel', 'alternate');
      hrefLink.setAttribute('hreflang', lang);
      hrefLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(hrefLink);
    });
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', canonicalUrl);
    document.head.appendChild(defaultLink);

    // JSON-LD (supports array of schemas)
    document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

    // Add breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": crumb.name,
          "item": `${BASE_URL}${crumb.path}`,
        })),
      });
    }

    schemas.forEach((schema, i) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-jsonld', `true-${i}`);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    };
  }, [fullTitle, desc, canonicalUrl, jsonLd, breadcrumbs, noindex]);

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
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jarandilla de la Vera",
    "addressRegion": "Cáceres, Extremadura",
    "addressCountry": "ES",
    "postalCode": "10450",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-656-674-297",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English", "Polish", "German", "French", "Portuguese", "Italian", "Dutch"],
  },
  "sameAs": ["https://instagram.com/elaromadelavera"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "El Aroma de la Vera",
  "image": `${BASE_URL}/logo.png`,
  "description": DEFAULT_DESC,
  "@id": `${BASE_URL}/#localbusiness`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jarandilla de la Vera",
    "addressLocality": "Jarandilla de la Vera",
    "addressRegion": "Cáceres",
    "postalCode": "10450",
    "addressCountry": "ES",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.1253,
    "longitude": -5.6608,
  },
  "telephone": "+34656674297",
  "url": BASE_URL,
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "El Aroma de la Vera",
  "url": BASE_URL,
  "description": DEFAULT_DESC,
  "inLanguage": ["es", "en", "pl", "de", "fr", "pt", "it", "nl"],
  "publisher": { "@type": "Organization", "name": "El Aroma de la Vera" },
};

export function productSchema(product: { name: string; description: string; price: string; image?: string; url: string; sku?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": product.url,
    "sku": product.sku || product.name.toLowerCase().replace(/\s+/g, '-'),
    "brand": { "@type": "Brand", "name": "El Aroma de la Vera" },
    "manufacturer": { "@type": "Organization", "name": "El Aroma de la Vera" },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/PreOrder",
      "seller": { "@type": "Organization", "name": "El Aroma de la Vera" },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "ES" },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" },
          "transitTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" },
        },
      },
    },
    "material": "Cera de soja natural, aceites esenciales, mecha de algodón",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Vegano", "value": "Sí" },
      { "@type": "PropertyValue", "name": "Hecho a mano", "value": "Sí" },
    ],
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };
}
