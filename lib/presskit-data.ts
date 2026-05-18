export const links = {
  soundcloud: "https://soundcloud.com/tiramisuwuuu",
  instagram: "https://www.instagram.com/tiramisu.fm/",
  instagramHandle: "@tiramisu.fm",
  location: "Bahia",
  email: "joaopecurcino@hotmail.com",
  whatsapp: "71984313715",
  whatsappHref: "https://wa.me/5571984313715",
  emailHref: "mailto:joaopecurcino@hotmail.com",
  photo: "/tiramisu-photo.png",
} as const;

export const bio = {
  tagline: "Groove, progressão e transe.",
  body: "Sets que vão do house groovado e warm up a viagens noturnas em prog dark, sempre com foco em fluxo, hipnose e pista.",
  genres: "House · Prog Dark · Psytrance",
} as const;

export type SetItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  cover?: string;
  bpm?: string;
  embed: "soundcloud" | "youtube";
  youtubeStart?: number;
};

/** House / warm up — secção menor */
export const houseSets: SetItem[] = [
  {
    id: "primeiro-groove",
    title: "Primeiro Groove do Dia",
    subtitle: "House warm up",
    description:
      "Grooves leves pra acordar o corpo e deixar o dia fluir. House warm up, sem pressa.",
    href: "https://www.youtube.com/watch?v=dKC9FllPpqA&t=385s",
    cover: "/covers/primeiro-groove.jpeg",
    embed: "youtube",
    youtubeStart: 385,
  },
];

/** Prog dark · fullon · psy — secção principal (Fractal Descent por último) */
export const psySets: SetItem[] = [
  {
    id: "amargura",
    title: "Amargura",
    subtitle: "Dark progressive",
    description:
      "Amargura: estado persistente de rigidez interna, peso emocional e sensação de fechamento. Set dark progressive para atravessar o peso com groove.",
    href: "https://soundcloud.com/tiramisuwuuu/amargura-dark-progressive-dj-set",
    cover: "/covers/amargura.jpeg",
    embed: "soundcloud",
  },
  {
    id: "fullon-night",
    title: "Fullon Night",
    subtitle: "Teste de pista",
    description:
      "Fullon noturno em alta tensão: kicks secos, leads psicodélicos e psicofunk na linha de Aardvarkk, Psymmetrix e Psychobass — feito para o horário em que a pista já não perdoa.",
    href: "https://soundcloud.com/tiramisuwuuu/fullon-night-teste",
    bpm: "Fullon / night",
    embed: "soundcloud",
  },
  {
    id: "fractal-descent",
    title: "Fractal Descent",
    subtitle: "Prog dark",
    description:
      "Prog dark em progressão contínua — 128→144 BPM. Camadas que se comprimem até o transe.",
    href: "https://soundcloud.com/tiramisuwuuu/fractal-descent-128144-bpm",
    cover: "/covers/fractal-descent.jpeg",
    bpm: "128 → 144 BPM",
    embed: "soundcloud",
  },
];

export const houseArtists = [
  "Tech House",
  "Bass House",
  "Groove",
  "Wax Motif",
  "John Summit",
  "Kyle Watson",
  "Andruss",
  "Tony Romera",
] as const;

export const psyArtists = [
  "Prog Dark",
  "Dark Groove",
  "Fullon",
  "Psytech",
  "Psydewise",
  "Airi",
  "Alchemy Circle",
  "Zeamoon",
  "Kromagon",
  "Groundbass",
  "Oksha",
  "Gadikt",
  "Aardvarkk",
  "Psymmetrix",
  "Psychobass",
  "Animalien",
  "Kabayun",
] as const;
