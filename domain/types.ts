export interface MenuItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  title: string;
  menuItems: MenuItem[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  images: string[];
}

export interface ProductProperty {
  icon: string;
  label: string;
  value: string;
}

export interface ProductProps {
  image: string;
  title: string;
  subtitle: string;
  properties: ProductProperty[];
  even: boolean;
}

export interface ProductsSectionProps {
  products: Omit<ProductProps, 'even'>[];
}

export interface AboutUsProps {
  title: string;
  subtitle: string;
  content: string;
}

export interface ClientsCarouselProps {
  title: string;
  logos: string[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'whatsapp';
  url: string;
}

export interface FooterProps {
  copyright: string;
  socialLinks: SocialLink[];
}

export interface CompanyData {
  navbar: NavbarProps;
  hero: HeroProps;
  products: Omit<ProductProps, 'even'>[];
  about: AboutUsProps;
  clients: ClientsCarouselProps;
  footer: FooterProps;
}
