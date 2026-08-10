export const site = {
  name: "Patsogolo CP Foundation",
  shortName: "Patsogolo CP",
  tagline: "No child left behind",
  district: "Mangochi District, Malawi",
  email: "info@patsogolocp.org",
  address: "Mangochi District, Malawi",
  instagram: "@cerebralpalsymalawi",
  instagramUrl: "https://instagram.com/cerebralpalsymalawi",
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Our Programs", href: "/programs" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Partners", href: "/partners" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export const clinicSites = [
  "Mangochi District Hospital",
  "Malawi Children's Village",
  "Njereza Health Centre",
  "Malembo Health Centre",
];

export const heroStats = [
  { num: "4", label: "Clinic sites across Mangochi District", icon: "sites" as const },
  { num: "400+", label: "Children reached", icon: "children" as const },
  { num: "20", label: "Health centres trained in early identification", icon: "training" as const },
  { num: "1M+", label: "People reached through community awareness", icon: "audience" as const },
];
