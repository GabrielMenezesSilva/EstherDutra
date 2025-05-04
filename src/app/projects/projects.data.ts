import { Project } from './project.interface';

export const PROJECTS: Project[] = [
  {
    id: 'pizzabot',
    name: 'PizzaBot',
    role: 'Aplicativo mobile de delivery',
    imageUrl:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80',
    details: {
      objective: 'Facilitar o pedido de pizzas através de chatbot',
      role: 'UI/UX Design, prototipagem',
      tools: 'Figma, Miro',
      duration: '2 meses',
    },
    link: 'https://www.behance.net/gallery/123456789/PizzaBot',
  },
  {
    id: 'fightclub',
    name: 'Fight Club',
    role: 'Aplicativo para marcar lutas e treinos',
    imageUrl:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80',
    details: {
      objective: 'Organizar combates e treinamentos',
      role: 'UI/UX Design',
      tools: 'Figma',
      duration: '1,5 meses',
    },
    link: 'https://www.behance.net/gallery/123456789/Fight-Club',
  },
  {
    id: 'gazelle',
    name: "La Gazelle d'Or",
    role: 'Rebranding completo (site, logo, fotografia)',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80',
    details: {
      objective: 'Modernizar a imagem da marca',
      role: 'Direção artística, UI/UX, fotografia',
      tools: 'Figma, Photoshop',
      duration: '3 meses',
    },
    link: 'https://www.behance.net/gallery/123456789/La-Gazelle-dOr',
  },
  {
    id: 'nova',
    name: 'Praxia Agência Web',
    role: 'Identidade visual completa',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80',
    details: {
      objective: 'Criar uma identidade forte e coerente',
      role: 'UI/UX, branding',
      tools: 'Figma, Illustrator',
      duration: '2 meses',
    },
    link: 'https://www.behance.net/gallery/123456789/Praxia',
  },
  {
    id: 'reflexologo',
    name: 'Reflexólogo',
    role: 'Rebranding, cartão, logo e site',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&q=80',
    details: {
      objective: 'Valorizar a prática e atrair novos clientes',
      role: 'UI/UX, branding',
      tools: 'Figma, Photoshop',
      duration: '1 mês',
    },
    link: 'https://www.behance.net/gallery/123456789/Reflexologo',
  },
];
