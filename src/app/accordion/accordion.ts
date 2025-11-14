import { ChangeDetectionStrategy, Component } from '@angular/core';

interface AccordionItem {
  id: string;
  title: string;
  count?: number;
  variant: 'general' | 'download';
  content?: string;
  contentTitle?: string;
  downloads?: DownloadItem[];
}

interface DownloadItem {
  title: string;
  docNumber: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export default class AccordionComponent {
  readonly items: AccordionItem[] = [
    {
      id: 'download-1',
      title: 'AccordionTitel',
      count: 3,
      variant: 'download',
      downloads: [
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
      ]
    },
    {
      id: 'download-2',
      title: 'AccordionTitel',
      count: 10,
      variant: 'download',
      downloads: [
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
        { title: 'Hier steht der Titel des Dokumentes', docNumber: '00000.D' },
      ]
    },
    {
      id: 'general-1',
      title: 'AccordionTitel',
      variant: 'general',
      contentTitle: 'Hier steht ein Titel zu einem beliebigen Content',
      content: 'Hier kann dann individueller Text stehen. Jährlich verletzen sich rund 45 000 Amateurinnen und Amateure auf Schweizer Fussballplätzen - ein Drittel davon wegen vermeidbaren Fouls. Zusammengenommen schlagen diese Unfälle mit 195 Millionen Franken zu Buche.'
    },
    {
      id: 'general-2',
      title: 'AccordionTitel',
      variant: 'general',
      contentTitle: 'Hier steht ein Titel zu einem beliebigen Content',
      content: 'Hier kann dann individueller Text stehen. Jährlich verletzen sich rund 45 000 Amateurinnen und Amateure auf Schweizer Fussballplätzen - ein Drittel davon wegen vermeidbaren Fouls. Zusammengenommen schlagen diese Unfälle mit 195 Millionen Franken zu Buche.'
    },
  ];
}
