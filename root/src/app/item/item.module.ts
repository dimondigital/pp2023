import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ItemComponent } from './item.component';
import {AppModule} from "../app.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        ItemComponent
    ],
    exports: [
        ItemComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class ItemModule { }
