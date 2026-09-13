export type Locale = "pt" | "en";

export const links = {
  linkedin: "https://www.linkedin.com/in/rafael-telles",
  github: "https://github.com/rafael-telles",
  email: "rafael@telles.dev",
  layers: "https://layers.education",
  arrow: "https://arrow.apache.org/docs/format/FlightSql.html",
};

export const content = {
  pt: {
    lang: "pt-BR",
    title: "Rafael Telles — CTO na Layers",
    description:
      "CTO na Layers, o SuperApp da educação. Tecnologia para +9.000 escolas no Brasil. Antes, co-autor do Apache Arrow Flight SQL na Dremio.",
    switchLabel: "English",
    switchHref: "/en/",
    role: "CTO na",
    company: "Layers",
    intro:
      "Lidero a tecnologia do SuperApp da educação: uma plataforma multitenant de comunidades e apps, aberta para parceiros publicarem soluções, usada por mais de 1.800 escolas privadas e 7.600 públicas — cerca de 1 em cada 10 alunos da rede privada do Brasil.",
    before:
      "Antes disso, na Dremio: contribuidor do Apache Arrow, co-autor do Flight SQL e dos drivers JDBC/ODBC.",
    contactTitle: "Contato",
    emailLabel: "E-mail",
    footer: "© 2026 Rafael Telles",
  },
  en: {
    lang: "en",
    title: "Rafael Telles — CTO at Layers",
    description:
      "CTO at Layers, the education SuperApp. Technology for 9,000+ schools in Brazil. Previously co-authored Apache Arrow Flight SQL at Dremio.",
    switchLabel: "Português",
    switchHref: "/",
    role: "CTO at",
    company: "Layers",
    intro:
      "I lead technology for the education SuperApp: a multitenant platform of communities and apps, open for partners to publish their solutions, used by over 1,800 private and 7,600 public schools — roughly 1 in 10 private-school students in Brazil.",
    before:
      "Before that, at Dremio: Apache Arrow contributor, co-author of Flight SQL and its JDBC/ODBC drivers.",
    contactTitle: "Contact",
    emailLabel: "Email",
    footer: "© 2026 Rafael Telles",
  },
} satisfies Record<Locale, unknown>;
