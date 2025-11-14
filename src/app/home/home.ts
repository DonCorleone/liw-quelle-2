import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly avatarImage = 'https://www.figma.com/api/mcp/asset/a3c60722-8a4f-473e-84f2-68e0c43741a3';
  protected readonly avatarMask = 'https://www.figma.com/api/mcp/asset/54394a0e-5903-4958-b767-1837aa235dc2';
  protected readonly avatarCircle = 'https://www.figma.com/api/mcp/asset/3fc5d399-7193-4ff4-852a-46057a03de76';
  protected readonly logoVector1 = 'https://www.figma.com/api/mcp/asset/2b8d39ca-8e49-485f-bb53-5d3b06e7d27b';
  protected readonly logoVector2 = 'https://www.figma.com/api/mcp/asset/f1561d3a-437c-46b3-92d5-7a318a3b9f95';
  protected readonly logoVector3 = 'https://www.figma.com/api/mcp/asset/a61189f2-4734-449d-97ba-794b691e36b2';
  protected readonly logoVector4 = 'https://www.figma.com/api/mcp/asset/7a9122e8-e98a-4558-a9e0-2191584e818e';
  protected readonly arrowLeft = 'https://www.figma.com/api/mcp/asset/319a8ef8-5a35-4f66-a304-8383cd869184';
}
