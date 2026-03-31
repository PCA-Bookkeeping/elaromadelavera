import type { Language } from "@/i18n/translations";
import blogCeraSoja from "@/assets/blog-cera-soja.jpg";
import blogAromas from "@/assets/blog-aromas.jpg";
import blogCuidarVela from "@/assets/blog-cuidar-vela.jpg";

export interface StaticBlogPost {
  title: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  slug: string;
  image: string;
  excerpt: Record<Language, string>;
  body: Record<Language, string[]>;
}

export const staticPosts: StaticBlogPost[] = [
  {
    title: { es: "Por Qué Elegimos Cera de Soja", en: "Why We Choose Soy Wax", pl: "Dlaczego Wybieramy Wosk Sojowy", de: "Warum wir Sojawachs wählen", fr: "Pourquoi nous choisissons la cire de soja", pt: "Porque Escolhemos Cera de Soja", it: "Perché Scegliamo la Cera di Soia", nl: "Waarom Wij Sojawas Kiezen" },
    category: { es: "Ingredientes", en: "Ingredients", pl: "Składniki", de: "Zutaten", fr: "Ingrédients", pt: "Ingredientes", it: "Ingredienti", nl: "Ingrediënten" },
    excerpt: { es: "La cera de soja es natural, biodegradable y produce una combustión más limpia que la parafina. Descubre por qué la elegimos.", en: "Soy wax is natural, biodegradable, and burns cleaner than paraffin. Discover why we chose it.", pl: "Wosk sojowy jest naturalny, biodegradowalny i pali się czyściej niż parafina.", de: "Sojawachs ist natürlich, biologisch abbaubar und brennt sauberer als Paraffin.", fr: "La cire de soja est naturelle, biodégradable et brûle plus proprement que la paraffine.", pt: "A cera de soja é natural, biodegradável e produz uma combustão mais limpa.", it: "La cera di soia è naturale, biodegradabile e brucia più pulita della paraffina.", nl: "Sojawas is natuurlijk, biologisch afbreekbaar en brandt schoner dan paraffine." },
    date: "Abril 2026",
    slug: "cera-de-soja",
    image: blogCeraSoja,
    body: {
      es: [
        "En El Aroma de la Vera trabajamos con cera de soja porque encaja con lo que queremos construir: una marca artesanal, natural y honesta.",
        "La cera de soja ofrece una combustión más limpia, mantiene mejor el aroma y encaja con un proceso pequeño y cuidado como el nuestro.",
        "Para una vela de uso diario, regalo o preventa, creemos que la experiencia final tiene que sentirse más suave, más natural y más coherente con la historia de La Vera.",
      ],
      en: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "For everyday candles, gifts, and pre-orders alike, we want the final experience to feel softer, more natural, and more aligned with the story of La Vera.",
      ],
      pl: [
        "W El Aroma de la Vera wybieramy wosk sojowy, ponieważ pasuje do marki, którą budujemy: rzemieślniczej, naturalnej i uczciwej.",
        "Wosk sojowy pali się czyściej, dobrze przenosi zapach i świetnie współgra z małą, dopracowaną produkcją.",
        "Chcemy, aby finalne doświadczenie było bardziej naturalne, delikatne i spójne z historią La Vera.",
      ],
      de: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "We want the final experience to feel natural, calm, and aligned with La Vera.",
      ],
      fr: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "We want the final experience to feel natural, calm, and aligned with La Vera.",
      ],
      pt: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "We want the final experience to feel natural, calm, and aligned with La Vera.",
      ],
      it: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "We want the final experience to feel natural, calm, and aligned with La Vera.",
      ],
      nl: [
        "At El Aroma de la Vera we use soy wax because it matches the kind of brand we want to build: artisanal, natural, and honest.",
        "Soy wax burns cleaner, carries fragrance well, and fits the careful small-batch process we follow.",
        "We want the final experience to feel natural, calm, and aligned with La Vera.",
      ],
    },
  },
  {
    title: { es: "Los 4 Aromas de La Vera", en: "The 4 Scents of La Vera", pl: "4 Zapachy La Vera", de: "Die 4 Düfte von La Vera", fr: "Les 4 Parfums de La Vera", pt: "Os 4 Aromas de La Vera", it: "I 4 Profumi di La Vera", nl: "De 4 Geuren van La Vera" },
    category: { es: "Nuestros Aromas", en: "Our Scents", pl: "Nasze Zapachy", de: "Unsere Düfte", fr: "Nos Parfums", pt: "Nossos Aromas", it: "I Nostri Profumi", nl: "Onze Geuren" },
    excerpt: { es: "Lavanda extremeña, romero silvestre, azahar y jara de la sierra: los cuatro aromas que definen nuestra tierra.", en: "Extremaduran lavender, wild rosemary, orange blossom, and mountain rockrose: the four scents that define our land.", pl: "Estremadurska lawenda, dziki rozmaryn, kwiat pomarańczy i górski czystek: cztery zapachy definiujące naszą ziemię.", de: "Extremadura-Lavendel, wilder Rosmarin, Orangenblüte und Berg-Zistrose: die vier Düfte unserer Heimat.", fr: "Lavande d'Estrémadure, romarin sauvage, fleur d'oranger et ciste: les quatre parfums de notre terre.", pt: "Alfazema, alecrim silvestre, flor de laranjeira e esteva: os quatro aromas da nossa terra.", it: "Lavanda, rosmarino selvatico, fiori d'arancio e cisto: i quattro profumi della nostra terra.", nl: "Lavendel, wilde rozemarijn, oranjebloesem en cistusroos: de vier geuren van ons land." },
    date: "Abril 2026",
    slug: "aromas-la-vera",
    image: blogAromas,
    body: {
      es: [
        "La primera colección nace de una idea simple: que cada vela tenga raíces reales en el paisaje y el recuerdo de La Vera.",
        "Lavanda Extremeña aporta calma. Romero Silvestre se siente limpio y herbal. Azahar abre la parte más luminosa. Jara de la Sierra aporta profundidad y carácter.",
        "Con el tiempo añadiremos más aromas, pero esta base define el alma inicial de la marca.",
      ],
      en: [
        "The first collection begins with a simple idea: every candle should feel rooted in the landscape and memory of La Vera.",
        "Lavanda Extremeña brings calm. Romero Silvestre feels clean and herbal. Azahar opens the brightest side. Jara de la Sierra adds depth and character.",
        "More scents will arrive over time, but this first core defines the soul of the brand.",
      ],
      pl: [
        "Pierwsza kolekcja opiera się na prostej idei: każda świeca ma mieć prawdziwe korzenie w krajobrazie i pamięci La Vera.",
        "Lavanda Extremeña daje spokój. Romero Silvestre jest świeży i ziołowy. Azahar wnosi światło. Jara de la Sierra daje głębię i charakter.",
        "Z czasem pojawi się więcej zapachów, ale ten rdzeń definiuje duszę marki.",
      ],
      de: ["The first collection begins with a simple idea: every candle should feel rooted in La Vera.", "Lavender, rosemary, orange blossom and rockrose define the starting soul of the brand.", "More scents will arrive over time."],
      fr: ["The first collection begins with a simple idea: every candle should feel rooted in La Vera.", "Lavender, rosemary, orange blossom and rockrose define the starting soul of the brand.", "More scents will arrive over time."],
      pt: ["The first collection begins with a simple idea: every candle should feel rooted in La Vera.", "Lavender, rosemary, orange blossom and rockrose define the starting soul of the brand.", "More scents will arrive over time."],
      it: ["The first collection begins with a simple idea: every candle should feel rooted in La Vera.", "Lavender, rosemary, orange blossom and rockrose define the starting soul of the brand.", "More scents will arrive over time."],
      nl: ["The first collection begins with a simple idea: every candle should feel rooted in La Vera.", "Lavender, rosemary, orange blossom and rockrose define the starting soul of the brand.", "More scents will arrive over time."],
    },
  },
  {
    title: { es: "Cómo Cuidar Tu Vela Artesanal", en: "How to Care for Your Candle", pl: "Jak Dbać o Swoją Świecę", de: "So pflegst du deine Kerze", fr: "Comment Entretenir Votre Bougie", pt: "Como Cuidar da Sua Vela", it: "Come Prenderti Cura della Tua Candela", nl: "Zo Verzorg Je Jouw Kaars" },
    category: { es: "Consejos", en: "Tips", pl: "Porady", de: "Tipps", fr: "Conseils", pt: "Dicas", it: "Consigli", nl: "Tips" },
    excerpt: { es: "Aprende a recortar la mecha, conseguir un derretimiento uniforme y maximizar las horas de tu vela artesanal.", en: "Learn how to trim the wick, achieve an even melt pool, and maximize your candle's burn time.", pl: "Naucz się przycinać knot, osiągnąć równomierne topienie i maksymalizować czas palenia świecy.", de: "Lerne den Docht zu kürzen, ein gleichmäßiges Schmelzen zu erreichen und die Brenndauer zu maximieren.", fr: "Apprenez à couper la mèche, obtenir une fonte uniforme et maximiser la durée de votre bougie.", pt: "Aprenda a cortar o pavio, obter um derretimento uniforme e maximizar o tempo da sua vela.", it: "Impara a tagliare lo stoppino, ottenere una fusione uniforme e massimizzare la durata della candela.", nl: "Leer de lont te knippen, gelijkmatig smelten te bereiken en de brandtijd te maximaliseren." },
    date: "Abril 2026",
    slug: "cuidar-vela",
    image: blogCuidarVela,
    body: {
      es: [
        "El primer encendido es clave: deja que la cera funda hasta los bordes para evitar túneles.",
        "Recorta la mecha a unos 5 mm antes de cada uso y evita corrientes de aire para mantener una llama estable.",
        "No recomendamos encender la vela más de 4 horas seguidas. Así mejoras el rendimiento y la seguridad.",
      ],
      en: [
        "The first burn matters: let the wax melt to the edges to avoid tunneling.",
        "Trim the wick to around 5 mm before each use and keep the candle away from drafts for a stable flame.",
        "We do not recommend burning the candle for more than 4 hours at a time. It improves both performance and safety.",
      ],
      pl: [
        "Pierwsze palenie jest kluczowe: pozwól, aby wosk roztopił się do krawędzi, aby uniknąć tunelowania.",
        "Przycinaj knot do około 5 mm przed każdym użyciem i unikaj przeciągów.",
        "Nie zalecamy palenia świecy dłużej niż 4 godziny jednorazowo.",
      ],
      de: ["The first burn matters: let the wax melt to the edges to avoid tunneling.", "Trim the wick to around 5 mm before each use.", "Do not burn the candle for more than 4 hours at a time."],
      fr: ["The first burn matters: let the wax melt to the edges to avoid tunneling.", "Trim the wick to around 5 mm before each use.", "Do not burn the candle for more than 4 hours at a time."],
      pt: ["The first burn matters: let the wax melt to the edges to avoid tunneling.", "Trim the wick to around 5 mm before each use.", "Do not burn the candle for more than 4 hours at a time."],
      it: ["The first burn matters: let the wax melt to the edges to avoid tunneling.", "Trim the wick to around 5 mm before each use.", "Do not burn the candle for more than 4 hours at a time."],
      nl: ["The first burn matters: let the wax melt to the edges to avoid tunneling.", "Trim the wick to around 5 mm before each use.", "Do not burn the candle for more than 4 hours at a time."],
    },
  },
];

export function getStaticPost(slug: string) {
  return staticPosts.find((post) => post.slug === slug);
}