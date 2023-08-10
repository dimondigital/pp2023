import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  portfolioItems: any[] = [];

  constructor(private dataS: DataService) {
  }

  ngOnInit() {
    this.dataS.getItems().subscribe((items: any[]) => {
      //@ts-ignore
      this.portfolioItems = items['items'];
    })
  }

}

/*/*{"srcLink": "assets/desc-02-char.jpg", "width": 800, "height": 950, "resize": 0.5},
    {"srcLink": "assets/desc-03-antagonist.jpg", "width": 800, "height": 950, "resize": 0.5},
    {"srcLink": "assets/desc-04-planet.jpg", "width": 800, "height": 512, "resize": 0.5},
    {"srcLink": "assets/desc-05-additions.jpg", "width": 800, "height": 890, "resize": 0.5},*/

