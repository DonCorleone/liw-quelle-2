import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GridComponent {
  breakpoints = [
    {
      name: 'Mobile (Micro)',
      screenSize: '0-599px',
      breakpoint: '600px',
      variable: 'breakpoint-sm',
      device: 'iPhone 8 (375px)',
      columns: 6,
      offset: '27px',
      gutter: '27px'
    },
    {
      name: 'Tablet Portrait (Medium)',
      screenSize: '600-767px',
      breakpoint: '768px',
      variable: 'breakpoint-md',
      device: 'iPad mini (1024px)',
      columns: 12,
      offset: '42px',
      gutter: '42px'
    },
    {
      name: 'Tablet Landscape (Wide)',
      screenSize: '768-1279px',
      breakpoint: '1280px',
      variable: 'breakpoint-lg',
      device: 'iPad Pro (1024x768)',
      columns: 12,
      offset: '40px',
      gutter: '36px'
    },
    {
      name: 'Desktop',
      screenSize: '1280-1440px',
      breakpoint: '1440px',
      variable: 'breakpoint-xl',
      device: 'Desktop (1440px)',
      columns: 12,
      offset: '158px',
      gutter: '36px'
    },
    {
      name: 'Desktop XL',
      screenSize: '> 1440px',
      breakpoint: 'max',
      variable: 'breakpoint-xl',
      device: 'Large Desktop',
      columns: 12,
      offset: '158px',
      gutter: '36px'
    }
  ];

  sections = [
    {
      name: 'Normal',
      width: '660px',
      columns: '6 columns',
      description: 'Standard content width for most components'
    },
    {
      name: 'Wide',
      width: '1124px',
      columns: '10 columns (2nd-11th)',
      description: 'Wide section for tables, image galleries, complex layouts'
    },
    {
      name: 'Full',
      width: '1440px',
      columns: '12 columns',
      description: 'Full-width container for hero sections and backgrounds'
    }
  ];
}
