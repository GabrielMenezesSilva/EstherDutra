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
      role: 'application mobile conçue pour faciliter la commande de pizzas dans une pizzeria',
      objective:
        "Conception de l'interface graphique pour faciliter le fonctionnement de l'application de commande de pizzas via chatbot",
      tools: ['Figma', 'Miro'],
      duration: '2 meses',
      link: 'https://www.behance.net/gallery/123456789/PizzaBot',
      image: 'assets/images/projects/pizzabot.jpg',
    },
    {
      name: 'Fight Club',
      role: 'Organisation des combats et des entraînements',
      objective:
        "Conception de l'interface graphique pour le bon fonctionnement de l'application de combat et d'entraînement",
      tools: ['Figma'],
      duration: '1,5 meses',
      link: 'https://frontend-react-app-gmcyo.ondigitalocean.app/auth/login',
      image: 'assets/images/fightclub.png',
    },
    {
      name: "La Gazelle d'Or",
      role: 'Refonte complète (site, logo, photographie)',
      objective:
        "Conception d'une nouvelle identité visuelle moderne et élégante pour refléter l'excellence de la marque",
      tools: ['Figma', 'Photoshop'],
      duration: '3 meses',
      link: 'https://www.behance.net/gallery/123456789/La-Gazelle-dOr',
      image: 'assets/images/gazelle.png',
    },
    {
      name: 'Praxia Agência Web',
      role: 'Identité visuelle complète',
      objective:
        "Création d'une identité visuelle forte et cohérente pour positionner l'agence comme référence dans le marché digital",
      tools: ['Figma', 'Illustrator'],
      duration: '2 meses',
      link: 'https://www.behance.net/gallery/123456789/Praxia',
      image: 'assets/images/projects/praxia.jpg',
    },
    {
      name: 'Reflexólogo',
      role: 'Refonte, carte de visite, logo et site web',
      objective:
        "Développement d'une identité visuelle professionnelle pour valoriser la pratique et attirer une nouvelle clientèle",
      tools: ['Figma', 'Photoshop'],
      duration: '1 mês',
      link: 'https://www.behance.net/gallery/123456789/Reflexologo',
      image: 'assets/images/projects/reflexologo.jpg',
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
