import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-da',
  templateUrl: './da.component.html',
  styleUrls: ['./da.component.scss']
})
export class DaComponent implements OnInit {
  myThumbnail="../../../../assets/workflowx.png";
  myFullresImage="../../../../assets/highresworkflow.png";

  constructor() { }

  ngOnInit() {
  }

}
