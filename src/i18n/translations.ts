export type Language = 'es' | 'en' | 'pl';

export const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  pl: 'Polski',
};

export const languageFlags: Record<Language, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  pl: '🇵🇱',
};

// Flat key translations
const translations: Record<string, Record<Language, string>> = {
  // ── Announcement Bar ──
  'announcement.1': {
    es: '🌿 Envío gratis en pedidos +50€ | Hecho a mano en La Vera, Extremadura',
    en: '🌿 Free shipping on orders over €50 | Handmade in La Vera, Spain',
    pl: '🌿 Darmowa wysyłka od 50€ | Ręcznie robione w La Vera, Hiszpania',
  },
  'announcement.2': {
    es: '🔥 Edición limitada — Cada lote es único e irrepetible',
    en: '🔥 Limited edition — Every batch is unique and unrepeatable',
    pl: '🔥 Limitowana edycja — Każda partia jest unikalna i niepowtarzalna',
  },
  'announcement.3': {
    es: '🎁 ¿Buscas un regalo especial? Descubre nuestros sets',
    en: '🎁 Looking for a special gift? Discover our sets',
    pl: '🎁 Szukasz wyjątkowego prezentu? Odkryj nasze zestawy',
  },

  // ── Nav ──
  'nav.home': { es: 'Inicio', en: 'Home', pl: 'Strona główna' },
  'nav.shop': { es: 'Tienda', en: 'Shop', pl: 'Sklep' },
  'nav.about': { es: 'Sobre Nosotros', en: 'About Us', pl: 'O nas' },
  'nav.b2b': { es: 'B2B / Negocios', en: 'B2B / Business', pl: 'B2B / Biznes' },
  'nav.blog': { es: 'Blog', en: 'Blog', pl: 'Blog' },
  'nav.contact': { es: 'Contacto', en: 'Contact', pl: 'Kontakt' },
  'nav.faq': { es: 'FAQ', en: 'FAQ', pl: 'FAQ' },
  'nav.menu': { es: 'Menú', en: 'Menu', pl: 'Menu' },

  // ── Hero ──
  'hero.tagline': {
    es: 'Artesanía, naturaleza y territorio en cada vela',
    en: 'Craftsmanship, nature, and territory in every candle',
    pl: 'Rzemiosło, natura i tradycja w każdej świecy',
  },
  'hero.title': {
    es: 'Velas Artesanales de La Vera',
    en: 'Artisan Candles from La Vera',
    pl: 'Rękodzielnicze Świece z La Vera',
  },
  'hero.subtitle': {
    es: 'Hechas a mano con cera de soja, aceites esenciales y los aromas de nuestra tierra',
    en: 'Handmade with soy wax, essential oils, and the scents of our land',
    pl: 'Ręcznie robione z wosku sojowego, olejków eterycznych i aromatów naszej ziemi',
  },
  'hero.cta': {
    es: 'Descubre Nuestra Colección',
    en: 'Discover Our Collection',
    pl: 'Odkryj Naszą Kolekcję',
  },
  'hero.cta2': {
    es: 'Velas para Tu Negocio',
    en: 'Candles for Your Business',
    pl: 'Świece dla Twojego Biznesu',
  },
  'hero.badge.natural': { es: '🌱 100% Natural', en: '🌱 100% Natural', pl: '🌱 100% Naturalne' },
  'hero.badge.handmade': { es: '🤲 Hecho a Mano', en: '🤲 Handmade', pl: '🤲 Ręcznie Robione' },
  'hero.badge.location': { es: '📍 Jarandilla de la Vera', en: '📍 Jarandilla de la Vera', pl: '📍 Jarandilla de la Vera' },
  'hero.badge.shipping': { es: '🇪🇺 Envíos a toda Europa', en: '🇪🇺 Shipping across Europe', pl: '🇪🇺 Wysyłka do całej Europy' },

  // ── USP Bar ──
  'usp.soy.title': { es: 'Cera de Soja Natural', en: 'Natural Soy Wax', pl: 'Naturalny Wosk Sojowy' },
  'usp.soy.desc': { es: 'Sin parafina ni derivados del petróleo', en: 'No paraffin or petroleum derivatives', pl: 'Bez parafiny i pochodnych ropy naftowej' },
  'usp.oils.title': { es: 'Aceites Esenciales', en: 'Essential Oils', pl: 'Olejki Eteryczne' },
  'usp.oils.desc': { es: 'Aromas puros, sin fragancias sintéticas', en: 'Pure scents, no synthetic fragrances', pl: 'Czyste zapachy, bez syntetycznych aromatów' },
  'usp.handmade.title': { es: 'Hecho a Mano', en: 'Handmade', pl: 'Ręcznie Robione' },
  'usp.handmade.desc': { es: 'Cada vela fundida y vertida individualmente', en: 'Each candle melted and poured individually', pl: 'Każda świeca topiona i wylewana indywidualnie' },
  'usp.location.title': { es: 'La Vera, Extremadura', en: 'La Vera, Extremadura', pl: 'La Vera, Extremadura' },
  'usp.location.desc': { es: 'Aromas inspirados en nuestro territorio', en: 'Scents inspired by our territory', pl: 'Zapachy inspirowane naszym terytorium' },

  // ── Trust Bar (NEW - Persuasion) ──
  'trust.guarantee': { es: 'Satisfacción Garantizada', en: 'Satisfaction Guaranteed', pl: 'Gwarancja Satysfakcji' },
  'trust.guarantee.desc': { es: 'Si no te enamoras de tu vela, te devolvemos el dinero', en: "If you don't fall in love with your candle, money back", pl: 'Jeśli się nie zakochasz w swojej świecy, zwrócimy pieniądze' },
  'trust.secure': { es: 'Pago 100% Seguro', en: '100% Secure Payment', pl: '100% Bezpieczna Płatność' },
  'trust.secure.desc': { es: 'Tarjeta, PayPal y Bizum', en: 'Card, PayPal & Bizum', pl: 'Karta, PayPal i Bizum' },
  'trust.shipping': { es: 'Envío Cuidado', en: 'Careful Shipping', pl: 'Staranna Wysyłka' },
  'trust.shipping.desc': { es: 'Embalaje reforzado para que llegue perfecta', en: 'Reinforced packaging for perfect delivery', pl: 'Wzmocnione opakowanie dla idealnej dostawy' },
  'trust.returns': { es: 'Devolución 14 Días', en: '14-Day Returns', pl: 'Zwroty 14 Dni' },
  'trust.returns.desc': { es: 'Conforme a la normativa europea', en: 'In compliance with EU regulations', pl: 'Zgodnie z regulacjami UE' },

  // ── Collections ──
  'collections.title': { es: 'Nuestras Colecciones', en: 'Our Collections', pl: 'Nasze Kolekcje' },
  'collections.hogar.title': { es: 'Velas de Hogar', en: 'Home Candles', pl: 'Świece Domowe' },
  'collections.hogar.desc': { es: 'Decora tu espacio con los aromas de La Vera', en: 'Decorate your space with scents of La Vera', pl: 'Udekoruj swoją przestrzeń aromatami La Vera' },
  'collections.hogar.cta': { es: 'Ver colección', en: 'View collection', pl: 'Zobacz kolekcję' },
  'collections.regalo.title': { es: 'Sets de Regalo', en: 'Gift Sets', pl: 'Zestawy Prezentowe' },
  'collections.regalo.desc': { es: 'El regalo perfecto para alguien especial', en: 'The perfect gift for someone special', pl: 'Idealny prezent dla kogoś wyjątkowego' },
  'collections.regalo.cta': { es: 'Ver sets', en: 'View sets', pl: 'Zobacz zestawy' },
  'collections.b2b.title': { es: 'Velas para Negocios', en: 'Business Candles', pl: 'Świece dla Biznesu' },
  'collections.b2b.desc': { es: 'Personaliza velas con tu marca', en: 'Customize candles with your brand', pl: 'Spersonalizuj świece swoją marką' },
  'collections.b2b.cta': { es: 'Saber más', en: 'Learn more', pl: 'Dowiedz się więcej' },

  // ── Brand Story ──
  'story.title': { es: 'Nuestra Historia', en: 'Our Story', pl: 'Nasza Historia' },
  'story.text': {
    es: 'En un pequeño taller en Jarandilla de la Vera, fundimos cada vela a mano. Usamos solo cera de soja natural, aceites esenciales puros y mechas de algodón. Nuestros aromas nacen de esta tierra: la lavanda extremeña, el romero silvestre, el azahar de nuestros naranjos y la jara de nuestras sierras.',
    en: 'In a small workshop in Jarandilla de la Vera, we melt each candle by hand. We use only natural soy wax, pure essential oils, and cotton wicks. Our scents are born from this land: Extremaduran lavender, wild rosemary, orange blossom, and rockrose from our mountains.',
    pl: 'W małym warsztacie w Jarandilla de la Vera, topimy każdą świecę ręcznie. Używamy wyłącznie naturalnego wosku sojowego, czystych olejków eterycznych i bawełnianych knotów. Nasze zapachy rodzą się z tej ziemi: estremadurska lawenda, dziki rozmaryn, kwiat pomarańczy i czystek z naszych gór.',
  },
  'story.cta': { es: 'Conoce nuestra historia completa', en: 'Read our full story', pl: 'Poznaj naszą pełną historię' },

  // ── Scents ──
  'scents.title': { es: 'Los Aromas de La Vera', en: 'The Scents of La Vera', pl: 'Aromaty La Vera' },
  'scents.lavanda.name': { es: 'Lavanda Extremeña', en: 'Extremaduran Lavender', pl: 'Estremadurska Lawenda' },
  'scents.lavanda.desc': {
    es: 'Cultivada en los campos de Extremadura. Floral, relajante y delicada. Perfecta para crear un ambiente de calma.',
    en: 'Cultivated in the fields of Extremadura. Floral, relaxing, and delicate. Perfect for creating a calm atmosphere.',
    pl: 'Uprawiana na polach Estremadury. Kwiatowa, relaksująca i delikatna. Idealna do stworzenia spokojnej atmosfery.',
  },
  'scents.romero.name': { es: 'Romero Silvestre', en: 'Wild Rosemary', pl: 'Dziki Rozmaryn' },
  'scents.romero.desc': {
    es: 'Recogido en las montañas de La Vera. Herbáceo, fresco e intenso. Energía natural en cada rincón.',
    en: 'Gathered in the mountains of La Vera. Herbal, fresh, and intense. Natural energy in every corner.',
    pl: 'Zbierany w górach La Vera. Ziołowy, świeży i intensywny. Naturalna energia w każdym zakątku.',
  },
  'scents.azahar.name': { es: 'Azahar (Flor de Naranjo)', en: 'Orange Blossom', pl: 'Kwiat Pomarańczy' },
  'scents.azahar.desc': {
    es: 'De los naranjos del Valle del Jerte y La Vera. Dulce, fresco y primaveral.',
    en: 'From the orange trees of Valle del Jerte and La Vera. Sweet, fresh, and spring-like.',
    pl: 'Z drzew pomarańczowych Valle del Jerte i La Vera. Słodki, świeży i wiosenny.',
  },
  'scents.jara.name': { es: 'Jara de la Sierra', en: 'Mountain Rockrose', pl: 'Górski Czystek' },
  'scents.jara.desc': {
    es: 'La planta más característica de nuestras sierras. Resinosa, balsámica, con notas de monte mediterráneo.',
    en: 'The most characteristic plant of our mountains. Resinous, balsamic, with Mediterranean notes.',
    pl: 'Najbardziej charakterystyczna roślina naszych gór. Żywiczna, balsamiczna, z nutami śródziemnomorskimi.',
  },

  // ── Process ──
  'process.title': { es: 'Nuestro Proceso', en: 'Our Process', pl: 'Nasz Proces' },
  'process.1.title': { es: 'Seleccionamos', en: 'We Select', pl: 'Wybieramy' },
  'process.1.desc': { es: 'Materias primas naturales: cera de soja, aceites esenciales puros, mechas de algodón y colorantes naturales.', en: 'Natural raw materials: soy wax, pure essential oils, cotton wicks, and natural dyes.', pl: 'Naturalne surowce: wosk sojowy, czyste olejki eteryczne, bawełniane knoty i naturalne barwniki.' },
  'process.2.title': { es: 'Fundimos', en: 'We Melt', pl: 'Topimy' },
  'process.2.desc': { es: 'Cera de soja en baño maría a 60-65°C. Control de temperatura para una mezcla perfecta.', en: 'Soy wax in a water bath at 60-65°C. Temperature control for a perfect blend.', pl: 'Wosk sojowy w kąpieli wodnej w 60-65°C. Kontrola temperatury dla idealnej mieszanki.' },
  'process.3.title': { es: 'Vertimos', en: 'We Pour', pl: 'Wylewamy' },
  'process.3.desc': { es: 'A mano, vela por vela. Se deja enfriar de forma natural durante 24-48 horas.', en: 'By hand, candle by candle. Left to cool naturally for 24-48 hours.', pl: 'Ręcznie, świeca po świecy. Schładza się naturalnie przez 24-48 godzin.' },
  'process.4.title': { es: 'Inspeccionamos', en: 'We Inspect', pl: 'Kontrolujemy' },
  'process.4.desc': { es: 'Control visual y prueba de quemado por lote. Solo las mejores llegan a tu puerta.', en: 'Visual check and burn test per batch. Only the best reach your door.', pl: 'Kontrola wizualna i test spalania każdej partii. Tylko najlepsze trafiają do Ciebie.' },

  // ── B2B Teaser ──
  'b2b.teaser.title': { es: '¿Tienes un Hotel, Restaurante o Tienda en La Vera?', en: 'Do You Have a Hotel, Restaurant, or Shop?', pl: 'Masz Hotel, Restaurację lub Sklep?' },
  'b2b.teaser.desc': { es: 'Creamos velas personalizadas con el aroma y la etiqueta de tu negocio. Pedidos mínimos desde 10 unidades.', en: 'We create custom candles with your brand aroma and label. Minimum orders from 10 units.', pl: 'Tworzymy spersonalizowane świece z aromatem i etykietą Twojej firmy. Minimalne zamówienie od 10 sztuk.' },
  'b2b.teaser.cta': { es: 'Solicita Información para tu Negocio', en: 'Request Information for Your Business', pl: 'Poproś o Informacje dla Twojego Biznesu' },

  // ── Reviews ──
  'reviews.title': { es: 'Lo Que Dicen Nuestros Clientes', en: 'What Our Customers Say', pl: 'Co Mówią Nasi Klienci' },
  'reviews.placeholder': { es: 'Pronto compartiremos las opiniones de nuestros primeros clientes.', en: 'We will soon share reviews from our first customers.', pl: 'Wkrótce podzielimy się opiniami naszych pierwszych klientów.' },

  // ── Instagram ──
  'instagram.title': { es: 'Síguenos en Instagram', en: 'Follow Us on Instagram', pl: 'Obserwuj Nas na Instagramie' },
  'instagram.cta': { es: 'Síguenos', en: 'Follow Us', pl: 'Obserwuj Nas' },

  // ── Newsletter ──
  'newsletter.title': { es: 'Únete a la Comunidad', en: 'Join the Community', pl: 'Dołącz do Społeczności' },
  'newsletter.desc': { es: 'Recibe novedades, ofertas exclusivas y contenido sobre el mundo de las velas artesanales.', en: 'Get news, exclusive offers, and content about artisan candles.', pl: 'Otrzymuj nowości, ekskluzywne oferty i treści o świecach rzemieślniczych.' },
  'newsletter.placeholder': { es: 'Tu email', en: 'Your email', pl: 'Twój email' },
  'newsletter.cta': { es: 'Suscribirme', en: 'Subscribe', pl: 'Subskrybuj' },
  'newsletter.privacy': { es: 'Respetamos tu privacidad. Puedes darte de baja en cualquier momento.', en: 'We respect your privacy. Unsubscribe anytime.', pl: 'Szanujemy Twoją prywatność. Możesz zrezygnować w dowolnym momencie.' },

  // ── Urgency / Persuasion ──
  'urgency.batch': { es: 'Producción Artesanal Limitada', en: 'Limited Artisan Production', pl: 'Limitowana Produkcja Rzemieślnicza' },
  'urgency.batch.desc': { es: 'Cada lote se elabora a mano. Cuando se agota, hay que esperar al siguiente.', en: 'Each batch is handmade. When it sells out, you wait for the next one.', pl: 'Każda partia jest ręcznie robiona. Gdy się wyprzeda, trzeba czekać na następną.' },
  'urgency.why.title': { es: '¿Por Qué Elegir El Aroma de la Vera?', en: 'Why Choose El Aroma de la Vera?', pl: 'Dlaczego Wybrać El Aroma de la Vera?' },
  'urgency.why.1.title': { es: 'Sin Ingredientes Ocultos', en: 'No Hidden Ingredients', pl: 'Bez Ukrytych Składników' },
  'urgency.why.1.desc': { es: 'Solo 4 ingredientes en cada vela. Los listamos todos en la etiqueta. Sin sorpresas.', en: 'Only 4 ingredients in each candle. All listed on the label. No surprises.', pl: 'Tylko 4 składniki w każdej świecy. Wszystkie wymienione na etykiecie. Bez niespodzianek.' },
  'urgency.why.2.title': { es: 'Combustión Limpia', en: 'Clean Burn', pl: 'Czyste Spalanie' },
  'urgency.why.2.desc': { es: 'La cera de soja no libera toxinas. Tu hogar respira limpio.', en: 'Soy wax releases no toxins. Your home breathes clean.', pl: 'Wosk sojowy nie uwalnia toksyn. Twój dom oddycha czysto.' },
  'urgency.why.3.title': { es: 'Cada Vela Tiene Nombre', en: 'Every Candle Has a Name', pl: 'Każda Świeca Ma Imię' },
  'urgency.why.3.desc': { es: 'No son velas genéricas de fábrica. Cada aroma cuenta una historia de La Vera.', en: "Not generic factory candles. Each scent tells a story of La Vera.", pl: 'To nie fabryczne świece. Każdy zapach opowiada historię La Vera.' },

  // ── Cart ──
  'cart.title': { es: 'Tu Carrito', en: 'Your Cart', pl: 'Twój Koszyk' },
  'cart.empty': { es: 'Tu carrito está vacío', en: 'Your cart is empty', pl: 'Twój koszyk jest pusty' },
  'cart.items': { es: 'artículo(s) en tu carrito', en: 'item(s) in your cart', pl: 'przedmiot(ów) w koszyku' },
  'cart.freeShipping': { es: '¡Te faltan {amount} para envío gratis!', en: 'You need {amount} more for free shipping!', pl: 'Brakuje Ci {amount} do darmowej wysyłki!' },
  'cart.freeShippingDone': { es: '🎉 ¡Envío gratis incluido!', en: '🎉 Free shipping included!', pl: '🎉 Darmowa wysyłka w zestawie!' },
  'cart.total': { es: 'Total', en: 'Total', pl: 'Razem' },
  'cart.vatIncluded': { es: 'IVA incluido', en: 'VAT included', pl: 'VAT w cenie' },
  'cart.checkout': { es: 'Tramitar Pedido', en: 'Proceed to Checkout', pl: 'Przejdź do Kasy' },
  'cart.addedToast': { es: 'Añadido al carrito', en: 'Added to cart', pl: 'Dodano do koszyka' },

  // ── Shop Page ──
  'shop.title': { es: 'Nuestra Tienda', en: 'Our Shop', pl: 'Nasz Sklep' },
  'shop.subtitle': { es: 'Descubre nuestra colección completa de velas artesanales, hechas a mano en Jarandilla de la Vera.', en: 'Discover our full collection of artisan candles, handmade in Jarandilla de la Vera.', pl: 'Odkryj naszą pełną kolekcję świec rzemieślniczych, ręcznie robionych w Jarandilla de la Vera.' },
  'shop.comingSoon': { es: 'Próximamente', en: 'Coming Soon', pl: 'Już Wkrótce' },
  'shop.comingSoonDesc': { es: 'Estamos preparando nuestras velas con mucho cariño. ¡Vuelve pronto!', en: 'We are preparing our candles with great care. Come back soon!', pl: 'Przygotowujemy nasze świece z wielką starannością. Wróć wkrótce!' },
  'shop.addToCart': { es: 'Añadir', en: 'Add', pl: 'Dodaj' },

  // ── Product Page ──
  'product.notFound': { es: 'Producto no encontrado', en: 'Product not found', pl: 'Produkt nie znaleziony' },
  'product.backToShop': { es: '← Volver a la tienda', en: '← Back to shop', pl: '← Wróć do sklepu' },
  'product.size': { es: 'Tamaño', en: 'Size', pl: 'Rozmiar' },
  'product.quantity': { es: 'Cantidad', en: 'Quantity', pl: 'Ilość' },
  'product.addToCart': { es: 'Añadir al Carrito', en: 'Add to Cart', pl: 'Dodaj do Koszyka' },
  'product.vatIncluded': { es: 'IVA incluido', en: 'VAT included', pl: 'VAT w cenie' },
  'product.badge.natural': { es: '100% Natural', en: '100% Natural', pl: '100% Naturalne' },
  'product.badge.handmade': { es: 'Hecho a Mano', en: 'Handmade', pl: 'Ręcznie Robione' },
  'product.badge.shipping': { es: 'Envío en 3-5 días', en: 'Ships in 3-5 days', pl: 'Wysyłka 3-5 dni' },
  'product.badge.returns': { es: 'Devolución 14 días', en: '14-day returns', pl: 'Zwroty 14 dni' },
  'product.tab.description': { es: 'Descripción', en: 'Description', pl: 'Opis' },
  'product.tab.ingredients': { es: 'Ingredientes', en: 'Ingredients', pl: 'Składniki' },
  'product.tab.usage': { es: 'Cómo Usar', en: 'How to Use', pl: 'Jak Używać' },
  'product.tab.shipping': { es: 'Envío', en: 'Shipping', pl: 'Wysyłka' },
  'product.ingredients.text': { es: 'Cera de soja natural, aceite esencial, mecha de algodón, colorante natural.', en: 'Natural soy wax, essential oil, cotton wick, natural dye.', pl: 'Naturalny wosk sojowy, olejek eteryczny, bawełniany knot, naturalny barwnik.' },
  'product.usage.1': { es: 'Recorta la mecha a 5mm antes de cada uso.', en: 'Trim the wick to 5mm before each use.', pl: 'Przytnij knot do 5mm przed każdym użyciem.' },
  'product.usage.2': { es: 'Deja que la cera se funda hasta los bordes en el primer uso.', en: 'Let the wax melt to the edges on first use.', pl: 'Pozwól woskowi stopić się do krawędzi przy pierwszym użyciu.' },
  'product.usage.3': { es: 'No dejes la vela encendida más de 4 horas seguidas.', en: "Don't leave the candle burning for more than 4 hours.", pl: 'Nie pozostawiaj świecy płonącej dłużej niż 4 godziny.' },
  'product.usage.4': { es: 'Mantén alejada de corrientes de aire.', en: 'Keep away from drafts.', pl: 'Trzymaj z dala od przeciągów.' },
  'product.shipping.text': { es: 'España peninsular: 2-5 días laborables. Envío gratuito en pedidos superiores a 50€.', en: 'Mainland Spain: 2-5 business days. Free shipping on orders over €50.', pl: 'Hiszpania kontynentalna: 2-5 dni roboczych. Darmowa wysyłka od 50€.' },
  'product.shipping.link': { es: 'Ver política de envíos completa →', en: 'See full shipping policy →', pl: 'Zobacz pełną politykę wysyłki →' },

  // ── About Page ──
  'about.heroTitle': { es: 'Nuestra Historia', en: 'Our Story', pl: 'Nasza Historia' },
  'about.heroTagline': { es: 'Desde Jarandilla de la Vera, con las manos y el corazón', en: 'From Jarandilla de la Vera, with hands and heart', pl: 'Z Jarandilla de la Vera, rękami i sercem' },
  'about.block1.title': { es: 'Donde Todo Empieza', en: 'Where It All Begins', pl: 'Gdzie Wszystko Się Zaczyna' },
  'about.block1.text': { es: 'El Aroma de la Vera nace en Jarandilla de la Vera, un pueblo de 3.000 habitantes enclavado en la comarca de La Vera, entre las montañas de la Sierra de Gredos y los valles del norte de Cáceres.', en: 'El Aroma de la Vera was born in Jarandilla de la Vera, a village of 3,000 inhabitants nestled in the La Vera region, between the Gredos mountains and the valleys of northern Cáceres.', pl: 'El Aroma de la Vera narodziło się w Jarandilla de la Vera, wiosce liczącej 3000 mieszkańców, położonej w regionie La Vera, między górami Gredos a dolinami północnego Cáceres.' },
  'about.block2.title': { es: 'Ingredientes con Intención', en: 'Ingredients with Intention', pl: 'Składniki z Intencją' },
  'about.block2.text': { es: 'Usamos exclusivamente cera de soja natural. Nunca parafina. Nuestras fragancias son aceites esenciales puros. Las mechas son de algodón, y los colorantes, naturales.', en: 'We use exclusively natural soy wax. Never paraffin. Our fragrances are pure essential oils. The wicks are cotton, and the dyes are natural.', pl: 'Używamy wyłącznie naturalnego wosku sojowego. Nigdy parafiny. Nasze zapachy to czyste olejki eteryczne. Knoty są bawełniane, a barwniki naturalne.' },
  'about.block3.title': { es: 'Hecho a Mano, de Verdad', en: 'Truly Handmade', pl: 'Naprawdę Ręcznie Robione' },
  'about.block3.text': { es: 'No tenemos una línea de producción. Cada vela se funde en baño maría, se vierte a mano y se deja enfriar de forma natural durante 24 a 48 horas.', en: 'We have no production line. Each candle is melted in a water bath, poured by hand, and left to cool naturally for 24 to 48 hours.', pl: 'Nie mamy linii produkcyjnej. Każda świeca jest topiona w kąpieli wodnej, wylewana ręcznie i naturalnie chłodzona przez 24-48 godzin.' },
  'about.block4.title': { es: 'Los Aromas de Nuestra Tierra', en: 'The Scents of Our Land', pl: 'Zapachy Naszej Ziemi' },
  'about.block4.text': { es: 'Nuestros aromas no son genéricos. Están inspirados en lo que hace única a La Vera: la lavanda, el romero, el azahar y la jara.', en: 'Our scents are not generic. They are inspired by what makes La Vera unique: lavender, rosemary, orange blossom, and rockrose.', pl: 'Nasze zapachy nie są generyczne. Inspirowane tym, co czyni La Vera wyjątkową: lawenda, rozmaryn, kwiat pomarańczy i czystek.' },
  'about.founder.title': { es: 'Quién Está Detrás', en: 'Who Is Behind', pl: 'Kto Za Tym Stoi' },
  'about.founder.text': { es: 'Mi nombre es Fabian. Soy emprendedor, padre, y un enamorado de La Vera. El Aroma de la Vera es nuestro proyecto de vida.', en: 'My name is Fabian. I am an entrepreneur, father, and in love with La Vera. El Aroma de la Vera is our life project.', pl: 'Mam na imię Fabian. Jestem przedsiębiorcą, ojcem i zakochanym w La Vera. El Aroma de la Vera to nasz projekt życiowy.' },
  'about.commitment.title': { es: 'Nuestro Compromiso', en: 'Our Commitment', pl: 'Nasze Zobowiązanie' },
  'about.sustainability.title': { es: 'Sostenibilidad', en: 'Sustainability', pl: 'Zrównoważoność' },
  'about.sustainability.desc': { es: 'Cera de soja de origen responsable. Recipientes reutilizables. Packaging mínimo y reciclable.', en: 'Responsibly sourced soy wax. Reusable containers. Minimal, recyclable packaging.', pl: 'Odpowiedzialnie pozyskiwany wosk sojowy. Pojemniki wielokrotnego użytku. Minimalne, nadające się do recyklingu opakowania.' },
  'about.transparency.title': { es: 'Transparencia', en: 'Transparency', pl: 'Przejrzystość' },
  'about.transparency.desc': { es: 'Cada etiqueta lista todos los ingredientes. Sin letra pequeña.', en: 'Every label lists all ingredients. No fine print.', pl: 'Każda etykieta wymienia wszystkie składniki. Bez drobnego druku.' },
  'about.community.title': { es: 'Comunidad Local', en: 'Local Community', pl: 'Społeczność Lokalna' },
  'about.community.desc': { es: 'Comprometidos con el desarrollo de La Vera. Colaboramos con negocios locales.', en: 'Committed to developing La Vera. We collaborate with local businesses.', pl: 'Zaangażowani w rozwój La Vera. Współpracujemy z lokalnymi firmami.' },

  // ── B2B Page ──
  'b2b.title': { es: 'Velas Personalizadas para Tu Negocio', en: 'Custom Candles for Your Business', pl: 'Spersonalizowane Świece dla Twojego Biznesu' },
  'b2b.subtitle': { es: 'Hoteles, restaurantes, casas rurales y tiendas', en: 'Hotels, restaurants, rural houses, and shops', pl: 'Hotele, restauracje, domy wiejskie i sklepy' },
  'b2b.why.title': { es: '¿Por Qué Velas Personalizadas?', en: 'Why Custom Candles?', pl: 'Dlaczego Spersonalizowane Świece?' },
  'b2b.why.desc': { es: 'Ofrece a tus clientes una experiencia sensorial única.', en: 'Offer your customers a unique sensory experience.', pl: 'Zaoferuj swoim klientom wyjątkowe doświadczenie sensoryczne.' },
  'b2b.brand.title': { es: 'Tu Marca en Cada Vela', en: 'Your Brand on Each Candle', pl: 'Twoja Marka na Każdej Świecy' },
  'b2b.brand.desc': { es: 'Etiquetado personalizado con el logo o nombre de tu negocio.', en: 'Custom labeling with your business logo or name.', pl: 'Spersonalizowana etykieta z logo lub nazwą Twojej firmy.' },
  'b2b.scents.title': { es: 'Aromas de La Vera', en: 'Scents of La Vera', pl: 'Aromaty La Vera' },
  'b2b.scents.desc': { es: 'Elige entre nuestros aromas o solicita uno personalizado.', en: 'Choose from our scents or request a custom one.', pl: 'Wybierz spośród naszych zapachów lub zamów spersonalizowany.' },
  'b2b.local.title': { es: 'Producción Local', en: 'Local Production', pl: 'Lokalna Produkcja' },
  'b2b.local.desc': { es: 'Hechas a mano en Jarandilla de la Vera. Entrega directa en la comarca.', en: 'Handmade in Jarandilla de la Vera. Direct delivery in the region.', pl: 'Ręcznie robione w Jarandilla de la Vera. Bezpośrednia dostawa w regionie.' },
  'b2b.how.title': { es: 'Cómo Funciona', en: 'How It Works', pl: 'Jak To Działa' },
  'b2b.step1.title': { es: 'Contacto Inicial', en: 'Initial Contact', pl: 'Pierwszy Kontakt' },
  'b2b.step1.desc': { es: 'Nos cuentas qué necesitas: cantidad, tamaño, aroma, personalización.', en: 'Tell us what you need: quantity, size, scent, customization.', pl: 'Powiedz nam, czego potrzebujesz: ilość, rozmiar, zapach, personalizacja.' },
  'b2b.step2.title': { es: 'Propuesta y Muestra', en: 'Proposal & Sample', pl: 'Oferta i Próbka' },
  'b2b.step2.desc': { es: 'Preparamos una propuesta con precio y plazo.', en: 'We prepare a proposal with price and timeline.', pl: 'Przygotowujemy ofertę z ceną i terminem.' },
  'b2b.step3.title': { es: 'Producción', en: 'Production', pl: 'Produkcja' },
  'b2b.step3.desc': { es: 'Fabricamos tu pedido a mano con tu etiqueta personalizada.', en: 'We handcraft your order with your custom label.', pl: 'Ręcznie wytwarzamy Twoje zamówienie z Twoją etykietą.' },
  'b2b.step4.title': { es: 'Entrega', en: 'Delivery', pl: 'Dostawa' },
  'b2b.step4.desc': { es: 'Entrega directa en tu negocio dentro de La Vera.', en: 'Direct delivery to your business in La Vera.', pl: 'Bezpośrednia dostawa do Twojego biznesu w La Vera.' },
  'b2b.pricing.title': { es: 'Precios y Pedidos', en: 'Pricing & Orders', pl: 'Ceny i Zamówienia' },
  'b2b.form.title': { es: 'Solicita Información', en: 'Request Information', pl: 'Poproś o Informacje' },
  'b2b.form.businessName': { es: 'Nombre del negocio *', en: 'Business name *', pl: 'Nazwa firmy *' },
  'b2b.form.contactName': { es: 'Nombre de contacto *', en: 'Contact name *', pl: 'Imię kontaktowe *' },
  'b2b.form.email': { es: 'Email *', en: 'Email *', pl: 'Email *' },
  'b2b.form.phone': { es: 'Teléfono *', en: 'Phone *', pl: 'Telefon *' },
  'b2b.form.businessType': { es: 'Tipo de negocio *', en: 'Business type *', pl: 'Typ biznesu *' },
  'b2b.form.location': { es: 'Ubicación / Municipio *', en: 'Location / City *', pl: 'Lokalizacja / Miasto *' },
  'b2b.form.quantity': { es: 'Cantidad estimada', en: 'Estimated quantity', pl: 'Szacowana ilość' },
  'b2b.form.message': { es: 'Mensaje / Necesidades específicas', en: 'Message / Specific needs', pl: 'Wiadomość / Szczególne potrzeby' },
  'b2b.form.privacy': { es: 'Acepto la', en: 'I accept the', pl: 'Akceptuję' },
  'b2b.form.privacyLink': { es: 'política de privacidad', en: 'privacy policy', pl: 'politykę prywatności' },
  'b2b.form.submit': { es: 'Enviar Solicitud', en: 'Send Request', pl: 'Wyślij Zapytanie' },
  'b2b.form.response': { es: 'Respondemos en un máximo de 48 horas.', en: 'We respond within 48 hours.', pl: 'Odpowiadamy w ciągu 48 godzin.' },
  'b2b.useCases.title': { es: 'Ideal Para', en: 'Ideal For', pl: 'Idealne Dla' },
  'b2b.hotels.title': { es: 'Hoteles y Casas Rurales', en: 'Hotels & Rural Houses', pl: 'Hotele i Domy Wiejskie' },
  'b2b.hotels.desc': { es: 'En habitaciones, recepción o como detalle de bienvenida.', en: 'In rooms, reception, or as a welcome gift.', pl: 'W pokojach, recepcji lub jako prezent powitalny.' },
  'b2b.restaurants.title': { es: 'Restaurantes', en: 'Restaurants', pl: 'Restauracje' },
  'b2b.restaurants.desc': { es: 'En mesas, como parte de la ambientación.', en: 'On tables, as part of the ambiance.', pl: 'Na stołach, jako element atmosfery.' },
  'b2b.shops.title': { es: 'Tiendas de Regalos', en: 'Gift Shops', pl: 'Sklepy z Upominkami' },
  'b2b.shops.desc': { es: 'Un producto artesanal local auténtico.', en: 'An authentic local artisan product.', pl: 'Autentyczny lokalny produkt rzemieślniczy.' },
  'b2b.events.title': { es: 'Eventos y Bodas', en: 'Events & Weddings', pl: 'Eventy i Śluby' },
  'b2b.events.desc': { es: 'Detalles personalizados para invitados.', en: 'Personalized gifts for guests.', pl: 'Spersonalizowane upominki dla gości.' },

  // ── Contact Page ──
  'contact.title': { es: '¿Hablamos?', en: "Let's Talk?", pl: 'Porozmawiajmy?' },
  'contact.subtitle': { es: 'Estamos aquí para ayudarte', en: "We're here to help", pl: 'Jesteśmy tutaj, aby pomóc' },
  'contact.heading': { es: 'Contacto', en: 'Contact', pl: 'Kontakt' },
  'contact.desc': { es: 'Si tienes alguna pregunta, no dudes en escribirnos.', en: "If you have any questions, don't hesitate to write to us.", pl: 'Jeśli masz jakiekolwiek pytania, nie wahaj się do nas napisać.' },
  'contact.email': { es: 'Email', en: 'Email', pl: 'Email' },
  'contact.phone': { es: 'Teléfono / WhatsApp', en: 'Phone / WhatsApp', pl: 'Telefon / WhatsApp' },
  'contact.location': { es: 'Ubicación', en: 'Location', pl: 'Lokalizacja' },
  'contact.hours': { es: 'Horario', en: 'Working Hours', pl: 'Godziny Pracy' },
  'contact.hoursValue': { es: 'Lunes a Viernes, 9:00 - 18:00 (hora española)', en: 'Monday to Friday, 9:00 - 18:00 (CET)', pl: 'Poniedziałek - Piątek, 9:00 - 18:00 (CET)' },
  'contact.form.name': { es: 'Nombre *', en: 'Name *', pl: 'Imię *' },
  'contact.form.email': { es: 'Email *', en: 'Email *', pl: 'Email *' },
  'contact.form.subject': { es: 'Asunto', en: 'Subject', pl: 'Temat' },
  'contact.form.message': { es: 'Mensaje *', en: 'Message *', pl: 'Wiadomość *' },
  'contact.form.submit': { es: 'Enviar Mensaje', en: 'Send Message', pl: 'Wyślij Wiadomość' },
  'contact.form.sent': { es: 'Mensaje enviado', en: 'Message sent', pl: 'Wiadomość wysłana' },
  'contact.form.sentDesc': { es: 'Te responderemos lo antes posible.', en: "We'll respond as soon as possible.", pl: 'Odpowiemy najszybciej jak to możliwe.' },
  'contact.b2b': { es: 'Para pedidos B2B, visita nuestra', en: 'For B2B orders, visit our', pl: 'W sprawie zamówień B2B, odwiedź naszą' },
  'contact.b2bLink': { es: 'página de Velas para Negocios', en: 'Business Candles page', pl: 'stronę Świec dla Biznesu' },

  // ── FAQ Page ──
  'faq.title': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions', pl: 'Najczęściej Zadawane Pytania' },
  'faq.subtitle': { es: 'Todo lo que necesitas saber sobre nuestras velas', en: 'Everything you need to know about our candles', pl: 'Wszystko, co musisz wiedzieć o naszych świecach' },

  // ── Blog Page ──
  'blog.title': { es: 'Blog', en: 'Blog', pl: 'Blog' },
  'blog.subtitle': { es: 'Historias, consejos y novedades', en: 'Stories, tips, and news', pl: 'Historie, porady i nowości' },
  'blog.readMore': { es: 'Leer más →', en: 'Read more →', pl: 'Czytaj więcej →' },
  'blog.comingSoon': { es: 'Contenido próximamente disponible.', en: 'Content coming soon.', pl: 'Treść już wkrótce.' },

  // ── Footer ──
  'footer.brand': { es: 'El Aroma de la Vera', en: 'El Aroma de la Vera', pl: 'El Aroma de la Vera' },
  'footer.ourStory': { es: 'Nuestra Historia', en: 'Our Story', pl: 'Nasza Historia' },
  'footer.ingredients': { es: 'Nuestros Ingredientes', en: 'Our Ingredients', pl: 'Nasze Składniki' },
  'footer.process': { es: 'Proceso de Fabricación', en: 'Manufacturing Process', pl: 'Proces Produkcji' },
  'footer.shop': { es: 'Comprar', en: 'Shop', pl: 'Sklep' },
  'footer.allCandles': { es: 'Todas las Velas', en: 'All Candles', pl: 'Wszystkie Świece' },
  'footer.homeCandles': { es: 'Velas de Hogar', en: 'Home Candles', pl: 'Świece Domowe' },
  'footer.giftSets': { es: 'Sets de Regalo', en: 'Gift Sets', pl: 'Zestawy Prezentowe' },
  'footer.b2b': { es: 'Velas para Negocios (B2B)', en: 'Business Candles (B2B)', pl: 'Świece dla Biznesu (B2B)' },
  'footer.help': { es: 'Ayuda', en: 'Help', pl: 'Pomoc' },
  'footer.faq': { es: 'Preguntas Frecuentes', en: 'FAQ', pl: 'FAQ' },
  'footer.shipping': { es: 'Envíos y Entregas', en: 'Shipping & Delivery', pl: 'Wysyłka i Dostawa' },
  'footer.returns': { es: 'Política de Devoluciones', en: 'Return Policy', pl: 'Polityka Zwrotów' },
  'footer.contact': { es: 'Contacto', en: 'Contact', pl: 'Kontakt' },
  'footer.legal': { es: 'Legal', en: 'Legal', pl: 'Prawne' },
  'footer.legalNotice': { es: 'Aviso Legal', en: 'Legal Notice', pl: 'Nota Prawna' },
  'footer.privacy': { es: 'Política de Privacidad', en: 'Privacy Policy', pl: 'Polityka Prywatności' },
  'footer.cookies': { es: 'Política de Cookies', en: 'Cookie Policy', pl: 'Polityka Cookies' },
  'footer.terms': { es: 'Términos y Condiciones', en: 'Terms & Conditions', pl: 'Regulamin' },
  'footer.copyright': { es: '© 2026 El Aroma de la Vera. Hecho a mano en Jarandilla de la Vera, Extremadura.', en: '© 2026 El Aroma de la Vera. Handmade in Jarandilla de la Vera, Extremadura, Spain.', pl: '© 2026 El Aroma de la Vera. Ręcznie robione w Jarandilla de la Vera, Extremadura, Hiszpania.' },
  'footer.euShipping': { es: '🇪🇺 Envíos a toda España y Europa', en: '🇪🇺 Shipping across Spain & Europe', pl: '🇪🇺 Wysyłka do Hiszpanii i Europy' },

  // ── Not Found ──
  'notFound.title': { es: '¡Ups! Esta página no existe', en: 'Oops! This page doesn\'t exist', pl: 'Ups! Ta strona nie istnieje' },
  'notFound.desc': { es: 'Parece que te has perdido entre los campos de lavanda de La Vera.', en: 'Looks like you got lost among the lavender fields of La Vera.', pl: 'Wygląda na to, że zgubiłeś się wśród pól lawendy La Vera.' },
  'notFound.shop': { es: 'Ir a la tienda', en: 'Go to shop', pl: 'Idź do sklepu' },
  'notFound.home': { es: 'Volver al inicio', en: 'Back to home', pl: 'Wróć na stronę główną' },

  // ── Shipping Page ──
  'shipping.title': { es: 'Envíos y Entregas', en: 'Shipping & Delivery', pl: 'Wysyłka i Dostawa' },
  'shipping.zones': { es: 'Zonas y Plazos de Envío', en: 'Shipping Zones & Times', pl: 'Strefy i Czasy Wysyłki' },
  'shipping.destination': { es: 'Destino', en: 'Destination', pl: 'Cel' },
  'shipping.time': { es: 'Plazo', en: 'Time', pl: 'Czas' },
  'shipping.cost': { es: 'Coste', en: 'Cost', pl: 'Koszt' },

  // ── Returns Page ──
  'returns.title': { es: 'Política de Devoluciones', en: 'Return Policy', pl: 'Polityka Zwrotów' },

  // ── Privacy Page ──
  'privacy.title': { es: 'Política de Privacidad', en: 'Privacy Policy', pl: 'Polityka Prywatności' },

  // ── Cookies Page ──
  'cookies.title': { es: 'Política de Cookies', en: 'Cookie Policy', pl: 'Polityka Cookies' },

  // ── Terms Page ──
  'terms.title': { es: 'Términos y Condiciones', en: 'Terms & Conditions', pl: 'Regulamin' },

  // ── Legal Notice ──
  'legal.title': { es: 'Aviso Legal', en: 'Legal Notice', pl: 'Nota Prawna' },

  // ── WhatsApp ──
  'whatsapp.message': { es: 'Hola, me interesa saber más sobre vuestras velas artesanales.', en: 'Hello, I would like to know more about your artisan candles.', pl: 'Dzień dobry, chciałbym dowiedzieć się więcej o waszych rzemieślniczych świecach.' },

  // ── Common ──
  'common.close': { es: 'Cerrar', en: 'Close', pl: 'Zamknij' },
  'common.learnMore': { es: 'Saber más', en: 'Learn more', pl: 'Dowiedz się więcej' },
};

export function getTranslation(key: string, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.['es'] || key;
}

// FAQ translations are structured differently due to complexity
export const faqTranslations: Record<Language, Array<{ title: string; items: Array<{ q: string; a: string }> }>> = {
  es: [
    {
      title: 'Sobre Nuestras Velas',
      items: [
        { q: '¿De qué están hechas vuestras velas?', a: 'Nuestras velas están hechas de cera de soja 100% natural, aceites esenciales puros, mechas de algodón y colorantes naturales. No utilizamos parafina, fragancias sintéticas ni aditivos artificiales.' },
        { q: '¿Cuánto dura una vela?', a: 'Depende del tamaño. Una vela de 150ml dura aprox. 20-25 horas. Una de 250ml, 35-40 horas. Una de 500ml, 60-70 horas.' },
        { q: '¿Qué aromas tenéis?', a: 'Lavanda Extremeña, Romero Silvestre, Azahar (Flor de Naranjo) y Jara de la Sierra.' },
        { q: '¿Puedo reutilizar el recipiente?', a: 'Sí. Limpia el recipiente con agua caliente para retirar los restos de cera.' },
        { q: '¿Vuestras velas son veganas?', a: 'Sí. Todos nuestros ingredientes son de origen vegetal. No utilizamos cera de abeja ni productos animales.' },
      ],
    },
    {
      title: 'Pedidos y Envíos',
      items: [
        { q: '¿A dónde enviáis?', a: 'Enviamos a toda España e islas. También a la Unión Europea.' },
        { q: '¿Cuánto cuesta el envío?', a: 'España peninsular: 4-7€. Gratis en pedidos superiores a 50€.' },
        { q: '¿Cuánto tarda?', a: 'Procesamos en 1-3 días laborables. Envío 2-5 días en España peninsular.' },
        { q: '¿Puedo hacer seguimiento?', a: 'Sí, recibirás un email con el número de seguimiento.' },
      ],
    },
    {
      title: 'Pagos',
      items: [
        { q: '¿Qué métodos de pago aceptáis?', a: 'Tarjeta (Visa, Mastercard), PayPal y Bizum.' },
        { q: '¿Es seguro comprar?', a: 'Sí. Usamos Shopify con certificado SSL y cifrado de datos.' },
      ],
    },
    {
      title: 'Devoluciones',
      items: [
        { q: '¿Puedo devolver una vela?', a: 'Sí, dentro de 14 días naturales, sin usar y en embalaje original.' },
        { q: '¿Qué pasa si llega dañado?', a: 'Contacta en 48 horas con fotos. Enviaremos reemplazo o reembolso.' },
      ],
    },
    {
      title: 'Pedidos B2B',
      items: [
        { q: '¿Puedo pedir velas personalizadas?', a: 'Sí. Pedido mínimo 10 unidades. Visita nuestra página B2B.' },
        { q: '¿Cuál es el pedido mínimo?', a: '10 unidades. Precios especiales para pedidos recurrentes.' },
      ],
    },
  ],
  en: [
    {
      title: 'About Our Candles',
      items: [
        { q: 'What are your candles made of?', a: 'Our candles are made from 100% natural soy wax, pure essential oils, cotton wicks, and natural dyes. No paraffin, synthetic fragrances, or artificial additives.' },
        { q: 'How long does a candle last?', a: 'Depends on size. 150ml lasts ~20-25 hours. 250ml ~35-40 hours. 500ml ~60-70 hours.' },
        { q: 'What scents do you offer?', a: 'Extremaduran Lavender, Wild Rosemary, Orange Blossom, and Mountain Rockrose.' },
        { q: 'Can I reuse the container?', a: 'Yes! Clean with hot water to remove wax residue.' },
        { q: 'Are your candles vegan?', a: 'Yes. All ingredients are plant-based. No beeswax or animal products.' },
      ],
    },
    {
      title: 'Orders & Shipping',
      items: [
        { q: 'Where do you ship?', a: 'We ship to all of Spain and the European Union.' },
        { q: 'How much is shipping?', a: 'Mainland Spain: €4-7. Free on orders over €50.' },
        { q: 'How long does delivery take?', a: 'Processing: 1-3 business days. Shipping: 2-5 days in mainland Spain.' },
        { q: 'Can I track my order?', a: 'Yes, you will receive a tracking number by email.' },
      ],
    },
    {
      title: 'Payments',
      items: [
        { q: 'What payment methods do you accept?', a: 'Card (Visa, Mastercard), PayPal, and Bizum.' },
        { q: 'Is it safe to buy?', a: 'Yes. We use Shopify with SSL certificate and data encryption.' },
      ],
    },
    {
      title: 'Returns',
      items: [
        { q: 'Can I return a candle?', a: 'Yes, within 14 days, unused and in original packaging.' },
        { q: 'What if my order arrives damaged?', a: 'Contact us within 48 hours with photos. We will send a replacement or full refund.' },
      ],
    },
    {
      title: 'B2B Orders',
      items: [
        { q: 'Can I order custom candles?', a: 'Yes. Minimum order 10 units. Visit our B2B page.' },
        { q: 'What is the minimum order?', a: '10 units. Special pricing for recurring orders.' },
      ],
    },
  ],
  pl: [
    {
      title: 'O Naszych Świecach',
      items: [
        { q: 'Z czego są zrobione wasze świece?', a: 'Nasze świece są wykonane z naturalnego wosku sojowego, czystych olejków eterycznych, bawełnianych knotów i naturalnych barwników. Bez parafiny i sztucznych aromatów.' },
        { q: 'Jak długo pali się świeca?', a: 'Zależy od rozmiaru. 150ml ~20-25h. 250ml ~35-40h. 500ml ~60-70h.' },
        { q: 'Jakie zapachy oferujecie?', a: 'Estremadurska Lawenda, Dziki Rozmaryn, Kwiat Pomarańczy i Górski Czystek.' },
        { q: 'Czy mogę ponownie użyć pojemnika?', a: 'Tak! Umyj gorącą wodą, aby usunąć resztki wosku.' },
        { q: 'Czy wasze świece są wegańskie?', a: 'Tak. Wszystkie składniki są roślinne. Bez wosku pszczelego.' },
      ],
    },
    {
      title: 'Zamówienia i Wysyłka',
      items: [
        { q: 'Dokąd wysyłacie?', a: 'Wysyłamy do całej Hiszpanii i Unii Europejskiej.' },
        { q: 'Ile kosztuje wysyłka?', a: 'Hiszpania kontynentalna: 4-7€. Darmowa od 50€.' },
        { q: 'Jak długo trwa dostawa?', a: 'Realizacja: 1-3 dni robocze. Wysyłka: 2-5 dni w Hiszpanii.' },
        { q: 'Czy mogę śledzić zamówienie?', a: 'Tak, otrzymasz numer śledzenia mailem.' },
      ],
    },
    {
      title: 'Płatności',
      items: [
        { q: 'Jakie metody płatności akceptujecie?', a: 'Karta (Visa, Mastercard), PayPal i Bizum.' },
        { q: 'Czy zakupy są bezpieczne?', a: 'Tak. Używamy Shopify z certyfikatem SSL i szyfrowaniem danych.' },
      ],
    },
    {
      title: 'Zwroty',
      items: [
        { q: 'Czy mogę zwrócić świecę?', a: 'Tak, w ciągu 14 dni, nieużywaną i w oryginalnym opakowaniu.' },
        { q: 'Co jeśli zamówienie dotrze uszkodzone?', a: 'Skontaktuj się w ciągu 48h ze zdjęciami. Wyślemy zamiennik lub zwrócimy pieniądze.' },
      ],
    },
    {
      title: 'Zamówienia B2B',
      items: [
        { q: 'Czy mogę zamówić spersonalizowane świece?', a: 'Tak. Minimalne zamówienie 10 sztuk. Odwiedź naszą stronę B2B.' },
        { q: 'Jakie jest minimalne zamówienie?', a: '10 sztuk. Specjalne ceny dla zamówień cyklicznych.' },
      ],
    },
  ],
};
