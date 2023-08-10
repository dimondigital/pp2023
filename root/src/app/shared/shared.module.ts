import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmbedSanityzePipe} from "../embed-sanityze.pipe";



@NgModule({
  declarations: [
    EmbedSanityzePipe
  ],
  exports: [
    EmbedSanityzePipe
  ],
  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
