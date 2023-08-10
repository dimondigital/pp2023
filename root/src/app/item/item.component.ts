import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() srcLink: string = '';
  @Input() resize: any;
  @Input() id: string = '';
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() type: string = '';

  getEmbeddedVideoLink(videoId: string, width: number, height: number): string {
    return `
      <iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    `;
  }
}
