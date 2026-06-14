import { CompanyData } from '../domain/types';

export const mockCompanyData: CompanyData = {
  navbar: {
    title: 'AgroIndustrial Peru',
    menuItems: [
      { label: 'Productos', href: '#productos' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Nuestros Clientes', href: '#clientes' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  hero: {
    title: 'Innovación y Calidad para el Campo Peruano',
    subtitle: 'Líderes en soluciones agroindustriales sostenibles para el desarrollo del país.',
    images: [
      'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  products: [
    {
      title: 'Tractor Serie A',
      subtitle: 'Potencia y eficiencia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ford_8N.jpg/1280px-Ford_8N.jpg',
      properties: [
        { icon: 'engine', label: 'Motor', value: '150 HP' },
        { icon: 'weight', label: 'Peso', value: '4500 kg' },
        { icon: 'fuel', label: 'Tanque', value: '200 L' },
      ],
    },
    {
      title: 'Cosechadora Pro',
      subtitle: 'Rendimiento superior en cada hectárea',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Corn_combine_harvest_with_grain_cart-4.jpg/1280px-Corn_combine_harvest_with_grain_cart-4.jpg',
      properties: [
        { icon: 'engine', label: 'Motor', value: '300 HP' },
        { icon: 'capacity', label: 'Tolva', value: '9000 L' },
        { icon: 'speed', label: 'Velocidad', value: '30 km/h' },
      ],
    },
    {
      title: 'Sistema de Riego Inteligente',
      subtitle: 'Optimiza el uso de agua',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Agricultural_machinery.jpg/1280px-Agricultural_machinery.jpg',
      properties: [
        { icon: 'water', label: 'Ahorro', value: 'Hasta 40%' },
        { icon: 'wifi', label: 'Conectividad', value: 'Wi-Fi / 4G' },
        { icon: 'battery', label: 'Autonomía', value: 'Panel Solar' },
      ],
    },
  ],
  about: {
    title: 'Quiénes Somos',
    subtitle: 'Nuestra Historia y Valores',
    content: 'En AgroIndustrial Peru, nos dedicamos a transformar la agricultura mediante la innovación tecnológica y prácticas sostenibles. Con más de 20 años de experiencia, somos el socio estratégico de los agricultores peruanos, ofreciendo maquinaria, tecnología y asesoramiento de primer nivel para potenciar la productividad y asegurar un futuro próspero para nuestro campo.',
  },
  clients: {
    title: 'Nuestros Clientes',
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg',
    ],
  },
  footer: {
    copyright: '© 2026 AgroIndustrial Peru. Todos los derechos reservados.',
    socialLinks: [
      { platform: 'facebook', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'whatsapp', url: '#' },
    ],
  },
};
