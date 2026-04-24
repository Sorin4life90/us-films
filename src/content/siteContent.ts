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
    title: "Piesa principală",
    titleAccent: "a experienței",
    description:
      "Wedding videography rămâne centrul paginii. Restul secțiunilor trebuie să o susțină discret: selecție, semnătura autorului, validare socială și contact.",
    embedTitle: "US Films featured wedding film",
    embedSrc: "https://www.youtube.com/embed/FNToMcI6o5s?si=D53JChr0zsjdBKjc",
  },
  selectedFilms: {
    eyebrow: "Wedding Films",
    title: "Wedding Films",
    titleAccent: "",
    description:
      "Câteva filme care definesc stilul US Films: natural, elegant și personal.",
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
      "Fotografi colaboratori",
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
            alt: "Adda și Giani",
            label: "Adda & Giani",
            href: "https://fotolense.ro/_ziua-cea-mare/adda-amp-giani",
          },
          {
            src: "/media/fotolense/ariana-paul.jpg",
            alt: "Ariana și Paul",
            label: "Ariana & Paul",
            href: "https://fotolense.ro/_ziua-cea-mare/ariana-amp-paul",
          },
          {
            src: "/media/fotolense/gabriela-vlad.jpg",
            alt: "Gabriela și Vlad",
            label: "Gabriela & Vlad",
            href: "https://fotolense.ro/_ziua-cea-mare/georgiana-amp-vlad",
          },
          {
            src: "/media/fotolense/mihaela-razvan.jpg",
            alt: "Mihaela și Răzvan",
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
    title: "Încredere spusă",
    titleAccent: "simplu și clar",
    description:
      "Mărturiile trebuie să funcționeze ca dovadă de ton și experiență, nu doar ca text de umplutură. Pentru moment rămân placeholder, dar structura este finală.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    body: "Pentru disponibilitate, detalii și ofertă, mă poți contacta folosind formularul sau datele de mai jos.",
    email: "uta.sorin1@gmail.com",
    recipientEmail: "uta.sorin1@gmail.com",
    phone: "0773805239",
    instagram: "https://www.instagram.com/us_films_wedding_videography/",
    location: "România / destinații disponibile la cerere",
    notice:
      "Ne rezervăm dreptul de a selecta și utiliza imagini foto și video realizate în cadrul evenimentelor, în scopuri de promovare și marketing, cu respectarea unei selecții atent curate, aliniate cu identitatea și standardele noastre estetice.",
    projectTypes: [
      "Nunta",
      "Cununie civilă",
      "Botez",
      "Save the Date",
      "Trash the Dress",
      "Majorat",
      "Petrecere privată / altele",
      "Ședință de cuplu",
      "Eveniment privat",
      "Alt eveniment",
    ],
    timelines: [
      "Data este stabilită",
      "În următoarele 2-3 luni",
      "Anul viitor",
      "Doar cer informații",
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
      "Primul wedding film din selecție, redat ca player complet direct în pagină.",
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
      "Al doilea wedding film din selecție, cu sunet, controale și fullscreen.",
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
      "Al treilea wedding film din selecție, păstrând același comportament de player interactiv.",
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
      "Al patrulea wedding film din selecție, păstrând același player interactiv direct în pagină.",
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
      "Al cincilea wedding film din selecție, disponibil direct în playerul interactiv din pagină.",
    tags: ["YouTube", "Sound", "Fullscreen"],
  },
  {
    id: "us-films-youtube-six",
    title: "US Films VI",
    category: "Wedding Films",
    year: "2025",
    thumbnail: "/media/project-summit.svg",
    mediaType: "video",
    embedSrc: "https://www.youtube.com/embed/fC0BrXElZPI",
    summary:
      "Al șaselea wedding film din selecție, disponibil direct în playerul interactiv din pagină.",
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
      "Wedding videography cu ritm lent, lumină moale și cadre curate, unde atmosfera rămâne mai importantă decât spectacolul.",
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
      "Imagini construite din apropiere și liniște, fără regie ostentativă, pentru wedding videography care respiră firesc.",
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
      "O selecție scurtă cu accent pe lumina de seară, detalii reale și un montaj care lasă momentul să existe.",
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
      "Cadre simple și precise pentru o poveste urbană, intimă, care rămâne modernă fără să pară rece.",
    tags: ["Elopement", "Minimal", "Timeless cut"],
  },
];

export const services: ServiceItem[] = [
  {
    id: "wedding-films",
    title: "Wedding Films",
    description: "Wedding videography de zi completă, cu accent pe coerență, prezență și memorie vizuală curată.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "connect",
    title: "Conversație",
    description: "Înțelegem energia evenimentului și tonul pe care îl căutați.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "replace-1",
    name: "Andreea & Vlad",
    role: "Cuplu",
    company: "Placeholder",
    quote:
      "Wedding videography a surprins exact liniștea și emoția zilei, fără să pară deloc forțată. Ne-am regăsit complet în ritmul ei.",
    placeholder: true,
  },
  {
    id: "replace-2",
    name: "Ioana & Rares",
    role: "Cuplu",
    company: "Placeholder",
    quote:
      "Totul a fost discret și foarte firesc. Rezultatul final se simte elegant și viu, nu doar frumos montat.",
    placeholder: true,
  },
  {
    id: "replace-3",
    name: "Bianca & Stefan",
    role: "Private event",
    company: "Placeholder",
    quote:
      "Ne-a plăcut faptul că wedding videography lasă loc momentelor reale. Are emoție, dar rămâne curată și rafinată.",
    placeholder: true,
  },
];
