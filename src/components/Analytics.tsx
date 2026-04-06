import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace these with your real IDs when ready
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const META_PIXEL_ID = '000000000000000';

let gaInitialized = false;
let metaInitialized = false;

function initGA() {
  if (gaInitialized || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  gaInitialized = true;
}

function initMetaPixel() {
  if (metaInitialized || META_PIXEL_ID === '000000000000000') return;
  const f = window as any;
  if (f.fbq) return;
  const n: any = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  f.fbq('init', META_PIXEL_ID);
  metaInitialized = true;
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
    initMetaPixel();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if ((window as any).gtag && gaInitialized) {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
    if ((window as any).fbq && metaInitialized) {
      (window as any).fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  return null;
}

// Helper to track custom events
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  if ((window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, params);
  }
}

// Track add to cart for both platforms
export function trackAddToCart(productName: string, price: number, currency = 'EUR') {
  if ((window as any).gtag) {
    (window as any).gtag('event', 'add_to_cart', {
      currency,
      value: price,
      items: [{ item_name: productName, price }],
    });
  }
  if ((window as any).fbq) {
    (window as any).fbq('track', 'AddToCart', {
      content_name: productName,
      value: price,
      currency,
    });
  }
}

// Track purchase initiation
export function trackInitiateCheckout(value: number, currency = 'EUR') {
  if ((window as any).gtag) {
    (window as any).gtag('event', 'begin_checkout', { currency, value });
  }
  if ((window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', { value, currency });
  }
}

// Track lead (email capture)
export function trackLead(source: string) {
  if ((window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', { event_category: source });
  }
  if ((window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: source });
  }
}
