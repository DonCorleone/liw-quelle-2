import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ols-header',
  imports: [CommonModule],
  templateUrl: './ols-header.html',
  styleUrl: './ols-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OlsHeader {
  protected readonly lineImage = 'https://www.figma.com/api/mcp/asset/9fe1c3af-c5c1-4108-8358-fc568ad8e1b5';
  protected readonly arrowLeft = 'https://www.figma.com/api/mcp/asset/5cf5ad5e-5511-400c-bf50-76dd8a094240';
}
