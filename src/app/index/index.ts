import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ComponentLink {
  path: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Index {
  protected readonly components: ComponentLink[] = [
    {
      path: '/home',
      title: 'Meldung Asbestsanierung (Simple)',
      description: 'Simple header with navigation, title, lead text, and call-to-action button'
    },
    {
      path: '/header-section',
      title: 'Header Section with Breadcrumb',
      description: 'Full header section with breadcrumb navigation, large H1 title, lead text, and sidebar with service icons and updates'
    },
    {
      path: '/ols-header',
      title: 'OLS Header (Online Service)',
      description: 'Online service header with back link, title, lead text, button, and sidebar with required information'
    },
    {
      path: '/icons',
      title: 'Icons Library',
      description: 'Complete icon library with 16px and 24px icons from the SUVA design system'
    },
    {
      path: '/effects',
      title: 'Effect Styles',
      description: 'Drop shadow styles and visual effects for elevation and depth'
    },
    {
      path: '/focus',
      title: 'Focus States',
      description: 'Focus ring styles for keyboard navigation and accessibility'
    },
    {
      path: '/grid',
      title: 'Grid System',
      description: 'Responsive breakpoints and grid specifications'
    },
    {
      path: '/accordion',
      title: 'Accordion',
      description: 'CSS-only collapsible content with General and Download variants'
    },
    {
      path: '/stepper',
      title: 'Stepper & Slider',
      description: 'Interactive rating scales with discrete steps and continuous sliders'
    },
  ];
}
