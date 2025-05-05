import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 2;
  totalPages = 0;
  isMobile = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  projects = [
    {
      name: 'PizzaBot',
      role: 'Aplicativo mobile de delivery',
      objective: 'Facilitar o pedido de pizzas através de chatbot',
      tools: ['Figma', 'Miro'],
      duration: '2 meses',
      link: 'https://www.behance.net/gallery/123456789/PizzaBot',
      image: 'https://picsum.photos/800/600?random=1',
    },
    {
      name: 'Fight Club',
      role: 'Aplicativo para marcar lutas e treinos',
      objective: 'Organizar combates e treinamentos',
      tools: ['Figma'],
      duration: '1,5 meses',
      link: 'https://www.behance.net/gallery/123456789/Fight-Club',
      image: 'https://picsum.photos/800/600?random=2',
    },
    {
      name: "La Gazelle d'Or",
      role: 'Rebranding completo (site, logo, fotografia)',
      objective: 'Modernizar a imagem da marca',
      tools: ['Figma', 'Photoshop'],
      duration: '3 meses',
      link: 'https://www.behance.net/gallery/123456789/La-Gazelle-dOr',
      image: 'https://picsum.photos/800/600?random=3',
    },
    {
      name: 'Praxia Agência Web',
      role: 'Identidade visual completa',
      objective: 'Criar uma identidade forte e coerente',
      tools: ['Figma', 'Illustrator'],
      duration: '2 meses',
      link: 'https://www.behance.net/gallery/123456789/Praxia',
      image: 'https://picsum.photos/800/600?random=4',
    },
    {
      name: 'Reflexólogo',
      role: 'Rebranding, cartão, logo e site',
      objective: 'Valorizar a prática e atrair novos clientes',
      tools: ['Figma', 'Photoshop'],
      duration: '1 mês',
      link: 'https://www.behance.net/gallery/123456789/Reflexologo',
      image: 'https://picsum.photos/800/600?random=5',
    },
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 900;
    this.itemsPerPage = this.isMobile ? 1 : 2;
    this.updateTotalPages();
  }

  updateTotalPages() {
    this.totalPages = Math.ceil(this.projects.length / this.itemsPerPage);
  }

  getVisibleProjects() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.projects.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
