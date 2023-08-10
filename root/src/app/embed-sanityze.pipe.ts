import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'embedSanityze'
})
export class EmbedSanityzePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {

  }

  transform(value: string): SafeHtml {
    return this.dom.bypassSecurityTrustHtml(value);
  }
}
