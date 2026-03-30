import { es } from './lang/es';
import { en } from './lang/en';
import { pl } from './lang/pl';
import { de } from './lang/de';
import { fr } from './lang/fr';
import { pt } from './lang/pt';
import { it } from './lang/it';
import { nl } from './lang/nl';

export type Language = 'es' | 'en' | 'pl' | 'de' | 'fr' | 'pt' | 'it' | 'nl';

export const languageNames: Record<Language, string> = {
  es: 'Español', en: 'English', pl: 'Polski',
  de: 'Deutsch', fr: 'Français', pt: 'Português',
  it: 'Italiano', nl: 'Nederlands',
};

export const languageFlags: Record<Language, string> = {
  es: '🇪🇸', en: '🇬🇧', pl: '🇵🇱',
  de: '🇩🇪', fr: '🇫🇷', pt: '🇵🇹',
  it: '🇮🇹', nl: '🇳🇱',
};

const allTranslations: Record<Language, Record<string, string>> = { es, en, pl, de, fr, pt, it, nl };

export function getTranslation(key: string, lang: Language): string {
  return allTranslations[lang]?.[key] || allTranslations['es']?.[key] || key;
}

export const faqTranslations: Record<Language, Array<{ title: string; items: Array<{ q: string; a: string }> }>> = {
  es: [
    { title: 'Sobre Nuestras Velas', items: [
      { q: '¿De qué están hechas vuestras velas?', a: 'Nuestras velas están hechas de cera de soja 100% natural, aceites esenciales puros, mechas de algodón y colorantes naturales. No utilizamos parafina, fragancias sintéticas ni aditivos artificiales.' },
      { q: '¿Cuánto dura una vela?', a: 'Depende del tamaño. Una vela de 150ml dura aprox. 20-25 horas. Una de 250ml, 35-40 horas. Una de 500ml, 60-70 horas.' },
      { q: '¿Qué aromas tenéis?', a: 'Lavanda Extremeña, Café, Chocolate, Romero Silvestre, Azahar (Flor de Naranjo), Jara de la Sierra, Canela, Naranja Dulce, Eucalipto, Limón, Vainilla, Menta, Coco, Fresa y Frutos del Bosque.' },
      { q: '¿Puedo reutilizar el recipiente?', a: 'Sí. Limpia el recipiente con agua caliente para retirar los restos de cera.' },
      { q: '¿Vuestras velas son veganas?', a: 'Sí. Todos nuestros ingredientes son de origen vegetal. No utilizamos cera de abeja ni productos animales.' },
    ]},
    { title: 'Pedidos y Envíos', items: [
      { q: '¿A dónde enviáis?', a: 'Enviamos a toda España e islas. También a la Unión Europea.' },
      { q: '¿Cuánto cuesta el envío?', a: 'España peninsular: 4-7€. Gratis en pedidos superiores a 50€.' },
      { q: '¿Cuánto tarda?', a: 'Procesamos en 1-3 días laborables. Envío 2-5 días en España peninsular.' },
      { q: '¿Puedo hacer seguimiento?', a: 'Sí, recibirás un email con el número de seguimiento.' },
    ]},
    { title: 'Pagos', items: [
      { q: '¿Qué métodos de pago aceptáis?', a: 'Tarjeta (Visa, Mastercard), PayPal y Bizum.' },
      { q: '¿Es seguro comprar?', a: 'Sí. Usamos Shopify con certificado SSL y cifrado de datos.' },
    ]},
    { title: 'Devoluciones', items: [
      { q: '¿Puedo devolver una vela?', a: 'Sí, dentro de 14 días naturales, sin usar y en embalaje original.' },
      { q: '¿Y si no me gusta el aroma?', a: 'Ofrecemos cambio de fragancia. Si el aroma no te convence, lo cambiamos por otro de nuestra colección.' },
      { q: '¿Qué pasa si llega dañado?', a: 'Contacta en 48 horas con fotos. Enviaremos reemplazo o reembolso.' },
    ]},
    { title: 'Pedidos B2B', items: [
      { q: '¿Puedo pedir velas personalizadas?', a: 'Sí. Pedido mínimo 10 unidades. Visita nuestra página B2B.' },
      { q: '¿Cuál es el pedido mínimo?', a: '10 unidades. Precios especiales para pedidos recurrentes.' },
    ]},
  ],
  en: [
    { title: 'About Our Candles', items: [
      { q: 'What are your candles made of?', a: 'Our candles are made from 100% natural soy wax, pure essential oils, cotton wicks, and natural dyes. No paraffin, synthetic fragrances, or artificial additives.' },
      { q: 'How long does a candle last?', a: 'Depends on size. 150ml lasts ~20-25 hours. 250ml ~35-40 hours. 500ml ~60-70 hours.' },
      { q: 'What scents do you offer?', a: 'Extremaduran Lavender, Coffee, Chocolate, Wild Rosemary, Orange Blossom, Mountain Rockrose, Cinnamon, Sweet Orange, Eucalyptus, Lemon, Vanilla, Mint, Coconut, Strawberry, and Forest Berries.' },
      { q: 'Can I reuse the container?', a: 'Yes! Clean with hot water to remove wax residue.' },
      { q: 'Are your candles vegan?', a: 'Yes. All ingredients are plant-based. No beeswax or animal products.' },
    ]},
    { title: 'Orders & Shipping', items: [
      { q: 'Where do you ship?', a: 'We ship to all of Spain and the European Union.' },
      { q: 'How much is shipping?', a: 'Mainland Spain: €4-7. Free on orders over €50.' },
      { q: 'How long does delivery take?', a: 'Processing: 1-3 business days. Shipping: 2-5 days in mainland Spain.' },
      { q: 'Can I track my order?', a: 'Yes, you will receive a tracking number by email.' },
    ]},
    { title: 'Payments', items: [
      { q: 'What payment methods do you accept?', a: 'Card (Visa, Mastercard), PayPal, and Bizum.' },
      { q: 'Is it safe to buy?', a: 'Yes. We use Shopify with SSL certificate and data encryption.' },
    ]},
    { title: 'Returns', items: [
      { q: 'Can I return a candle?', a: 'Yes, within 14 days, unused and in original packaging.' },
      { q: "What if I don't like the scent?", a: 'We offer fragrance exchange. If you don\'t love the scent, we\'ll swap it for another from our collection.' },
      { q: 'What if my order arrives damaged?', a: 'Contact us within 48 hours with photos. We will send a replacement or full refund.' },
    ]},
    { title: 'B2B Orders', items: [
      { q: 'Can I order custom candles?', a: 'Yes. Minimum order 10 units. Visit our B2B page.' },
      { q: 'What is the minimum order?', a: '10 units. Special pricing for recurring orders.' },
    ]},
  ],
  pl: [
    { title: 'O Naszych Świecach', items: [
      { q: 'Z czego są zrobione wasze świece?', a: 'Nasze świece są wykonane z naturalnego wosku sojowego, czystych olejków eterycznych, bawełnianych knotów i naturalnych barwników. Bez parafiny i sztucznych aromatów.' },
      { q: 'Jak długo pali się świeca?', a: 'Zależy od rozmiaru. 150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
      { q: 'Jakie zapachy oferujecie?', a: 'Estremadurska Lawenda, Dziki Rozmaryn, Kwiat Pomarańczy i Górski Czystek.' },
      { q: 'Czy mogę ponownie użyć pojemnika?', a: 'Tak! Umyj gorącą wodą, aby usunąć resztki wosku.' },
      { q: 'Czy wasze świece są wegańskie?', a: 'Tak. Wszystkie składniki są roślinne. Bez wosku pszczelego.' },
    ]},
    { title: 'Zamówienia i Wysyłka', items: [
      { q: 'Dokąd wysyłacie?', a: 'Wysyłamy do całej Hiszpanii i Unii Europejskiej.' },
      { q: 'Ile kosztuje wysyłka?', a: 'Hiszpania kontynentalna: 4-7€. Darmowa od 50€.' },
      { q: 'Jak długo trwa dostawa?', a: 'Realizacja: 1-3 dni robocze. Wysyłka: 2-5 dni w Hiszpanii.' },
      { q: 'Czy mogę śledzić zamówienie?', a: 'Tak, otrzymasz numer śledzenia mailem.' },
    ]},
    { title: 'Płatności', items: [
      { q: 'Jakie metody płatności akceptujecie?', a: 'Karta (Visa, Mastercard), PayPal i Bizum.' },
      { q: 'Czy zakupy są bezpieczne?', a: 'Tak. Używamy Shopify z certyfikatem SSL i szyfrowaniem danych.' },
    ]},
    { title: 'Zwroty', items: [
      { q: 'Czy mogę zwrócić świecę?', a: 'Tak, w ciągu 14 dni, nieużywaną i w oryginalnym opakowaniu.' },
      { q: 'Co jeśli zapach mi nie odpowiada?', a: 'Oferujemy wymianę zapachu. Jeśli zapach Ci nie odpowiada, wymienimy na inny z naszej kolekcji.' },
      { q: 'Co jeśli zamówienie dotrze uszkodzone?', a: 'Skontaktuj się w ciągu 48h ze zdjęciami. Wyślemy zamiennik lub zwrócimy pieniądze.' },
    ]},
    { title: 'Zamówienia B2B', items: [
      { q: 'Czy mogę zamówić spersonalizowane świece?', a: 'Tak. Minimalne zamówienie 10 sztuk. Odwiedź naszą stronę B2B.' },
      { q: 'Jakie jest minimalne zamówienie?', a: '10 sztuk. Specjalne ceny dla zamówień cyklicznych.' },
    ]},
  ],
  de: [
    { title: 'Über Unsere Kerzen', items: [
      { q: 'Woraus bestehen eure Kerzen?', a: '100% natürliches Sojawachs, reine ätherische Öle, Baumwolldochte und natürliche Farbstoffe. Kein Paraffin.' },
      { q: 'Wie lange brennt eine Kerze?', a: '150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
      { q: 'Welche Düfte bietet ihr an?', a: 'Extremadura-Lavendel, Wilder Rosmarin, Orangenblüte und Berg-Zistrose.' },
    ]},
    { title: 'Bestellungen & Versand', items: [
      { q: 'Wohin liefert ihr?', a: 'Ganz Spanien und die Europäische Union.' },
      { q: 'Was kostet der Versand?', a: 'Festland-Spanien: 4-7€. Ab 50€ kostenlos.' },
    ]},
    { title: 'Rückgaben', items: [
      { q: 'Kann ich eine Kerze zurückgeben?', a: 'Ja, innerhalb von 14 Tagen, unbenutzt und in Originalverpackung.' },
      { q: 'Was wenn mir der Duft nicht gefällt?', a: 'Wir bieten Duft-Umtausch an. Wir tauschen ihn gegen einen anderen aus unserer Kollektion.' },
    ]},
  ],
  fr: [
    { title: 'Nos Bougies', items: [
      { q: 'De quoi sont faites vos bougies ?', a: 'Cire de soja 100% naturelle, huiles essentielles pures, mèches en coton et colorants naturels. Sans paraffine.' },
      { q: 'Combien de temps brûle une bougie ?', a: '150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
      { q: 'Quels parfums proposez-vous ?', a: 'Lavande d\'Estrémadure, Romarin Sauvage, Fleur d\'Oranger et Ciste des Montagnes.' },
    ]},
    { title: 'Commandes & Livraison', items: [
      { q: 'Où livrez-vous ?', a: 'Toute l\'Espagne et l\'Union Européenne.' },
      { q: 'Combien coûte la livraison ?', a: 'Espagne continentale : 4-7€. Gratuite dès 50€.' },
    ]},
    { title: 'Retours', items: [
      { q: 'Puis-je retourner une bougie ?', a: 'Oui, sous 14 jours, inutilisée et dans l\'emballage d\'origine.' },
      { q: 'Et si le parfum ne me plaît pas ?', a: 'Nous offrons l\'échange de parfum. Nous l\'échangeons contre un autre de notre collection.' },
    ]},
  ],
  pt: [
    { title: 'Sobre as Nossas Velas', items: [
      { q: 'De que são feitas as vossas velas?', a: 'Cera de soja 100% natural, óleos essenciais puros, pavios de algodão e corantes naturais. Sem parafina.' },
      { q: 'Quanto tempo dura uma vela?', a: '150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
    ]},
    { title: 'Encomendas & Envios', items: [
      { q: 'Para onde enviam?', a: 'Toda a Espanha e União Europeia.' },
      { q: 'Quanto custa o envio?', a: 'Espanha peninsular: 4-7€. Grátis a partir de 50€.' },
    ]},
    { title: 'Devoluções', items: [
      { q: 'Posso devolver uma vela?', a: 'Sim, no prazo de 14 dias, sem usar e na embalagem original.' },
      { q: 'E se não gostar do aroma?', a: 'Oferecemos troca de fragrância por outra da nossa coleção.' },
    ]},
  ],
  it: [
    { title: 'Le Nostre Candele', items: [
      { q: 'Di cosa sono fatte le vostre candele?', a: 'Cera di soia 100% naturale, oli essenziali puri, stoppini di cotone e coloranti naturali. Senza paraffina.' },
      { q: 'Quanto dura una candela?', a: '150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
    ]},
    { title: 'Ordini & Spedizione', items: [
      { q: 'Dove spedite?', a: 'Tutta la Spagna e l\'Unione Europea.' },
    ]},
    { title: 'Resi', items: [
      { q: 'Posso restituire una candela?', a: 'Sì, entro 14 giorni, inutilizzata e nell\'imballaggio originale.' },
      { q: 'E se il profumo non mi piace?', a: 'Offriamo il cambio fragranza con un\'altra della nostra collezione.' },
    ]},
  ],
  nl: [
    { title: 'Over Onze Kaarsen', items: [
      { q: 'Waarvan zijn jullie kaarsen gemaakt?', a: '100% natuurlijke sojawas, pure etherische oliën, katoenen lonten en natuurlijke kleurstoffen. Geen paraffine.' },
      { q: 'Hoe lang brandt een kaars?', a: '150ml ~20-25u. 250ml ~35-40u. 500ml ~60-70u.' },
    ]},
    { title: 'Bestellingen & Verzending', items: [
      { q: 'Waar leveren jullie?', a: 'Heel Spanje en de Europese Unie.' },
    ]},
    { title: 'Retourneren', items: [
      { q: 'Kan ik een kaars retourneren?', a: 'Ja, binnen 14 dagen, ongebruikt en in originele verpakking.' },
      { q: 'Wat als de geur me niet bevalt?', a: 'We bieden geurwissel aan voor een andere uit onze collectie.' },
    ]},
  ],
};
