import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface UpdateItem {
  date: string;
  type: string;
  title: string;
}

@Component({
  selector: 'app-header-section',
  imports: [CommonModule],
  templateUrl: './header-section.html',
  styleUrl: './header-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSection {
  protected readonly lineImage = 'https://www.figma.com/api/mcp/asset/d3989aed-c582-4993-962c-35c9584534a0';
  protected readonly favoriteIcon = 'https://www.figma.com/api/mcp/asset/843b5d64-1a48-405b-b1b7-8f4e98e827a2';
  protected readonly shareIcon = 'https://www.figma.com/api/mcp/asset/1ae5e210-32fc-4926-ac89-e0c628b854ef';
  protected readonly printIcon = 'https://www.figma.com/api/mcp/asset/1d5dfd6a-7fe7-4ca5-b45e-4e8dfb99a95f';
  protected readonly helpIcon = 'https://www.figma.com/api/mcp/asset/c502c92b-4eca-473b-99eb-cbb1d53d4eb5';

  protected readonly breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', url: '#' },
    { label: 'Prävention', url: '#' },
    { label: 'Branchen', url: '#' },
    { label: 'Bau', url: '#' },
    { label: 'Aktuelle Seite' }
  ];

  protected readonly updates: UpdateItem[] = [
    {
      date: '26.02.2020',
      type: 'Neue Checkliste',
      title: 'Allein arbeitende Personen'
    },
    {
      date: '13.02.2020',
      type: 'Neues Präventionsmodul',
      title: 'Kaderschulung der lebenswichtigen Regeln Hochbau'
    }
  ];
}
