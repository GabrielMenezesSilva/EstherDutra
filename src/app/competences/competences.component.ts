import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}

type TabType = 'technical' | 'soft' | 'languages';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent {
  activeTab: TabType = 'technical';

  technicalSkills: Skill[] = [
    {
      name: 'Figma',
      icon: 'fa-brands fa-figma',
      level: 90,
      description:
        "Design d'interfaces, prototypage et collaboration en temps réel",
    },
    {
      name: 'Miro',
      icon: 'fa-solid fa-chart-network',
      level: 85,
      description:
        'Cartographie de processus, brainstorming et ateliers virtuels',
    },
    {
      name: 'Adobe Suite',
      icon: 'fa-brands fa-adobe',
      level: 80,
      description:
        'Photoshop, Illustrator et InDesign pour le design graphique',
    },
    {
      name: 'Microsoft Office',
      icon: 'fa-brands fa-microsoft',
      level: 95,
      description:
        'Excel, PowerPoint et Word pour la documentation et les présentations',
    },
    {
      name: 'Trello',
      icon: 'fa-brands fa-trello',
      level: 90,
      description: 'Gestion de projets et organisation des tâches',
    },
    {
      name: 'Google Workspace',
      icon: 'fa-brands fa-google',
      level: 95,
      description: 'Outils de productivité et de collaboration',
    },
  ];

  softSkills: Skill[] = [
    {
      name: 'Communication',
      icon: 'fa-solid fa-comments',
      level: 95,
      description: 'Communication claire et efficace dans différents contextes',
    },
    {
      name: 'Créativité',
      icon: 'fa-solid fa-lightbulb',
      level: 90,
      description: 'Pensée créative et innovante pour des solutions',
    },
    {
      name: "Travail d'équipe",
      icon: 'fa-solid fa-people-group',
      level: 95,
      description: 'Collaboration efficace et leadership participatif',
    },
    {
      name: 'Gestion du temps',
      icon: 'fa-solid fa-clock',
      level: 90,
      description: 'Organisation et priorisation des tâches',
    },
  ];

  languages: Skill[] = [
    {
      name: 'Portugais',
      icon: 'fa-solid fa-language',
      level: 100,
      description: 'Langue maternelle',
    },
    {
      name: 'Anglais',
      icon: 'fa-solid fa-language',
      level: 85,
      description: 'Courant',
    },
    {
      name: 'Français',
      icon: 'fa-solid fa-language',
      level: 70,
      description: 'Intermédiaire',
    },
  ];

  setActiveTab(tab: TabType): void {
    this.activeTab = tab;
  }
}
