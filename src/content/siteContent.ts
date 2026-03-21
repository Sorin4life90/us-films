import type {
  PortfolioItem,
  ProcessStep,
  ServiceItem,
  SiteContent,
  Testimonial,
} from "../types";

export const siteContent: SiteContent = {
  brandName: "US Films",
  brandTag: "Wedding Videography",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Wedding Films", href: "#films" },
    { label: "Wedding Photography", href: "#photography" },
    { label: "Despre", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Nu e doar un film. Este povestea voastră. Trăiți-o din nou, de fiecare dată.",
    title: "US Films Wedding Videography",
    titleAccent: "",
    description:
      "Filmul nunții voastre nu este doar o înregistrare. Este povestea voastră spusă cu emoție, un film care păstrează fiecare privire, fiecare zâmbet și fiecare promisiune. Pentru că momentele unice merită trăite din nou, iar amintirile merită să dureze o viață.",
    primaryCta: "Vezi portofoliul",
    secondaryCta: "Contact",
  },
  featuredFilm: {
    eyebrow: "",
    title: "Piesa principala",
    titleAccent: "a experientei",
    description:
      "Wedding videography ramane centrul paginii. Restul sectiunilor trebuie sa o sustina discret: selectie, semnatura autorului, validare sociala si contact.",
    embedTitle: "US Films featured wedding film",
    embedSrc: "https://www.youtube.com/embed/FNToMcI6o5s?si=D53JChr0zsjdBKjc",
  },
  selectedFilms: {
    eyebrow: "Wedding Films",
    title: "Wedding Films",
    titleAccent: "",
    description:
      "Cateva filme care definesc stilul US Films: natural, elegant si personal.",
  },
  aboutSignature: {
    eyebrow: "Despre",
    title: "Despre mine",
    titleAccent: "",
    body:
      "Parcursul meu a început din dorința sinceră de a transforma emoțiile în amintiri vii. Cu multă muncă, perseverență și dorință continuă de a învăța, această pasiune s-a transformat într-o poveste pe care îmi doresc să o împărtășesc cu voi.\n\nNumele meu este Sorin, am 36 de ani și sunt din București. În fiecare zi caut să evoluez, să învăț lucruri noi și să îmi perfecționez stilul, construind pe experiența acumulată până acum.\n\nCred în autenticitate, în emoția reală și în puterea imaginilor de a spune povești care durează o viață. Iar dacă rezonezi cu această viziune, mi-ar face plăcere să fac parte din povestea voastră.",
    cardLabel: "",
    note: "",
    quoteIndex: "",
    quoteText: "",
  },
  weddingPhotography: {
    eyebrow: "Wedding Photography",
    title: "Wedding Photography",
    titleAccent: "",
    body:
      "Fotografi Colaboratori",
    sources: [
      {
        site: {
          label: "Nicole Foto / instagram.com/nicolee_foto",
          href: "https://www.instagram.com/nicolee_foto/",
        },
        gallery: [
          {
            src: "/media/nicole-foto/nicole-01.jpg",
            alt: "Nicole Foto portrait 01",
            label: "",
            href: "https://www.instagram.com/p/DSHdJykjeMj/",
            objectPosition: "center 22%",
          },
          {
            src: "/media/nicole-foto/nicole-02-new.jpg",
            alt: "Nicole Foto portrait 02",
            label: "",
            href: "https://www.instagram.com/p/DVqS6aqjXyA/",
            objectPosition: "76% center",
          },
          {
            src: "/media/nicole-foto/nicole-04-new.jpg",
            alt: "Nicole Foto portrait 03",
            label: "",
            href: "https://www.instagram.com/p/DMHqT2doC9a/",
            objectPosition: "52% center",
          },
          {
            src: "/media/nicole-foto/nicole-02-var.jpg",
            alt: "Nicole Foto portrait 04",
            label: "",
            href: "https://www.instagram.com/p/DSQfX_tjfZv/",
            objectPosition: "50% 28%",
          },
        ],
      },
      {
        site: {
          label: "FotoLense / fotolense.ro",
          href: "https://fotolense.ro",
        },
        gallery: [
          {
            src: "/media/fotolense/adda-giani.jpg",
            alt: "Adda si Giani",
            label: "Adda & Giani",
            href: "https://fotolense.ro/_ziua-cea-mare/adda-amp-giani",
          },
          {
            src: "/media/fotolense/ariana-paul.jpg",
            alt: "Ariana si Paul",
            label: "Ariana & Paul",
            href: "https://fotolense.ro/_ziua-cea-mare/ariana-amp-paul",
          },
          {
            src: "/media/fotolense/gabriela-vlad.jpg",
            alt: "Gabriela si Vlad",
            label: "Gabriela & Vlad",
            href: "https://fotolense.ro/_ziua-cea-mare/georgiana-amp-vlad",
          },
          {
            src: "/media/fotolense/mihaela-razvan.jpg",
            alt: "Mihaela si Razvan",
            label: "Mihaela & Razvan",
            href: "https://fotolense.ro/_ziua-cea-mare/mihaela-amp-razvan",
          },
        ],
      },
      {
        site: {
          label: "Fotograf Mugurel / a-mugurel.wfolio.pro",
          href: "https://a-mugurel.wfolio.pro",
        },
        gallery: [
          {
            src: "/media/wedding-photography/mugurel-01.jpg",
            alt: "Wedding photography 01",
            label: "",
            href: "https://a-mugurel.wfolio.pro/wedding",
          },
          {
            src: "/media/wedding-photography/mugurel-02-alt.jpg",
            alt: "Wedding photography 02",
            label: "",
            href: "https://a-mugurel.wfolio.pro/wedding",
          },
          {
            src: "/media/wedding-photography/mugurel-03-alt.jpg",
            alt: "Wedding photography 03",
            label: "",
            href: "https://a-mugurel.wfolio.pro/wedding",
          },
          {
            src: "/media/wedding-photography/mugurel-04.jpg",
            alt: "Wedding photography 04",
            label: "",
            href: "https://a-mugurel.wfolio.pro/wedding",
          },
        ],
      },
    ],
  },
  testimonials: {
    eyebrow: "Words",
    title: "Incredere spusa",
    titleAccent: "simplu si clar",
    description:
      "Marturiile trebuie sa functioneze ca dovada de ton si experienta, nu doar ca text de umplutura. Pentru moment raman placeholder, dar structura este finala.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    body: "Pentru disponibilitate, detalii si oferta, ma poti contacta folosind formularul sau datele de mai jos.",
    email: "uta.sorin1@gmail.com",
    recipientEmail: "uta.sorin1@gmail.com",
    phone: "0773805239",
    instagram: "https://www.instagram.com/us_films_wedding_videography/",
    location: "Romania / destinatii disponibile la cerere",
    notice:
      "Ne rezervam dreptul de a selecta si utiliza imagini foto si video realizate in cadrul evenimentelor, in scopuri de promovare si marketing, cu respectarea unei selectii atent curate, aliniate cu identitatea si standardele noastre estetice.",
    projectTypes: [
      "Nunta",
      "Cununie civila",
      "Sedinta de cuplu",
      "Eveniment privat",
      "Alt eveniment",
    ],
    timelines: [
      "Data este stabilita",
      "In urmatoarele 2-3 luni",
      "Anul viitor",
      "Doar cer informatii",
    ],
    successMessage:
      "Mesajul a fost trimis cu succes.",
  },
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "us-films-story-two",
    title: "US Films I",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-atlas.svg",
    mediaType: "video",
    embedSrc: "https://vimeo.com/1107534018?share=copy&fl=sv&fe=ci",
    summary:
      "Primul wedding film din selectie, redat ca player complet direct in pagina.",
    tags: ["Vimeo", "Preview", "Wedding"],
  },
  {
    id: "us-films-youtube-one",
    title: "US Films II",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-flux.svg",
    mediaType: "video",
    embedSrc: "https://www.youtube.com/embed/FNToMcI6o5s?si=EtTPwXp1oUjmN6SE",
    summary:
      "Al doilea wedding film din selectie, cu sunet, controale si fullscreen.",
    tags: ["YouTube", "Sound", "Fullscreen"],
  },
  {
    id: "us-films-youtube-two",
    title: "US Films III",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-summit.svg",
    mediaType: "video",
    embedSrc: "https://www.youtube.com/embed/t7tW2RSXUbs?si=YRni_Rl7MgAvb4pe",
    summary:
      "Al treilea wedding film din selectie, pastrand acelasi comportament de player interactiv.",
    tags: ["YouTube", "Interactive", "Wedding"],
  },
  {
    id: "us-films-youtube-four",
    title: "US Films IV",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-atlas.svg",
    mediaType: "video",
    embedSrc: "https://vimeo.com/1107117532?share=copy&fl=sv&fe=ci",
    summary:
      "Al patrulea wedding film din selectie, pastrand acelasi player interactiv direct in pagina.",
    tags: ["Vimeo", "Interactive", "Wedding"],
  },
  {
    id: "us-films-youtube-five",
    title: "US Films V",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-flux.svg",
    mediaType: "video",
    embedSrc: "https://www.youtube.com/embed/CowDLhafNFs?si=d6jF5BrH3QAE0yhX",
    summary:
      "Al cincilea wedding film din selectie, disponibil direct in playerul interactiv din pagina.",
    tags: ["YouTube", "Sound", "Fullscreen"],
  },
  {
    id: "manor-story",
    title: "Manor story",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-atlas.svg",
    mediaType: "image",
    summary:
      "Wedding videography cu ritm lent, lumina moale si cadre curate, unde atmosfera ramane mai importanta decat spectacolul.",
    tags: ["Ceremony", "Editorial", "Natural light"],
  },
  {
    id: "lake-vows",
    title: "Lake vows",
    category: "Destination session",
    year: "2025",
    thumbnail: "/media/project-flux.svg",
    mediaType: "image",
    summary:
      "Imagini construite din apropiere si liniste, fara regie ostentativa, pentru wedding videography care respira firesc.",
    tags: ["Destination", "Quiet pacing", "Author look"],
  },
  {
    id: "garden-evening",
    title: "Garden evening",
    category: "Private celebration",
    year: "2024",
    thumbnail: "/media/project-summit.svg",
    mediaType: "image",
    summary:
      "O selectie scurta cu accent pe lumina de seara, detalii reale si un montaj care lasa momentul sa existe.",
    tags: ["Reception", "Documentary tone", "Warm edit"],
  },
  {
    id: "city-elopement",
    title: "City elopement",
    category: "Editorial story",
    year: "2024",
    thumbnail: "/media/project-velocity.svg",
    mediaType: "image",
    summary:
      "Cadre simple si precise pentru o poveste urbana, intima, care ramane moderna fara sa para rece.",
    tags: ["Elopement", "Minimal", "Timeless cut"],
  },
];

export const services: ServiceItem[] = [
  {
    id: "wedding-films",
    title: "Wedding Films",
    description: "Wedding videography de zi completa, cu accent pe coerenta, prezenta si memorie vizuala curata.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "connect",
    title: "Conversatie",
    description: "Intelegem energia evenimentului si tonul pe care il cautati.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "replace-1",
    name: "Andreea & Vlad",
    role: "Cuplu",
    company: "Placeholder",
    quote:
      "Wedding videography a surprins exact linistea si emotia zilei, fara sa para deloc fortata. Ne-am regasit complet in ritmul ei.",
    placeholder: true,
  },
  {
    id: "replace-2",
    name: "Ioana & Rares",
    role: "Cuplu",
    company: "Placeholder",
    quote:
      "Totul a fost discret si foarte firesc. Rezultatul final se simte elegant si viu, nu doar frumos montat.",
    placeholder: true,
  },
  {
    id: "replace-3",
    name: "Bianca & Stefan",
    role: "Private event",
    company: "Placeholder",
    quote:
      "Ne-a placut faptul ca wedding videography lasa loc momentelor reale. Are emotie, dar ramane curata si rafinata.",
    placeholder: true,
  },
];
