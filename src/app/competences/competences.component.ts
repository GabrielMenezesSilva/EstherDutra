import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Competence {
  name: string;
  icon: string;
  description: string;
  isSpecial?: boolean;
}

type TabType = 'technical' | 'soft' | 'languages';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  activeTab: TabType = 'technical';
  private tabTimeout: any;
  isMobile = false;
  private mobileBreakpoint = 768;

  technicalCompetences: Competence[] = [
    {
      name: 'Figma',
      icon: 'fas fa-pencil-ruler',
      description:
        "Niveau avancé en conception d'interfaces et prototypage interactif.",
    },
    {
      name: 'Miro',
      icon: 'fas fa-project-diagram',
      description:
        "Maîtrise de l'idéation et de l'architecture de l'information.",
    },
    {
      name: 'Photoshop/Lightroom',
      icon: 'fas fa-camera',
      description:
        "Expertise en retouche photo et traitement d'images professionnel.",
    },
    {
      name: 'Picsart PRO',
      icon: 'fas fa-palette',
      description: "Création visuelle et édition d'images avancée.",
    },
    {
      name: 'ChatGPT',
      icon: 'fas fa-robot',
      description: 'Exploration et assistance créative pour le design.',
    },
    {
      name: 'Adobe Suite',
      icon: 'fas fa-tools',
      description: 'Notions complètes sur les outils de la suite Adobe.',
    },
    {
      name: 'Rhinoceros3D',
      icon: 'fas fa-cube',
      description: 'Design produit et modélisation 3D.',
      isSpecial: true,
    },
  ];

  softCompetences: Competence[] = [
    {
      name: 'Communication',
      icon: 'fas fa-comments',
      description:
        'Capacité à communiquer efficacement avec les équipes et les clients, en traduisant les besoins en solutions de design.',
    },
    {
      name: 'Créativité',
      icon: 'fas fa-lightbulb',
      description:
        'Approche innovante pour résoudre les problèmes de design, en proposant des solutions uniques et créatives.',
    },
    {
      name: "Travail d'équipe",
      icon: 'fas fa-users',
      description:
        "Collaboration efficace avec les développeurs, les producteurs et autres membres de l'équipe pour atteindre les objectifs du projet.",
    },
  ];

  languageCompetences: Competence[] = [
    {
      name: 'Français',
      icon: 'fas fa-language',
      description:
        'Niveau courant, communication fluide dans un contexte professionnel.',
    },
    {
      name: 'Anglais',
      icon: 'fas fa-language',
      description:
        'Niveau professionnel, capacité à travailler dans un environnement international.',
    },
    {
      name: 'Portugais',
      icon: 'fas fa-language',
      description:
        "Langue maternelle, maîtrise complète à l'oral et à l'écrit.",
    },
  ];

  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkIfMobile.bind(this));
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= this.mobileBreakpoint;
  }

  setActiveTab(tab: TabType): void {
    if (this.tabTimeout) {
      clearTimeout(this.tabTimeout);
    }

    this.tabTimeout = setTimeout(
      () => {
        this.activeTab = tab;
      },
      this.isMobile ? 0 : 100
    );
  }
}
