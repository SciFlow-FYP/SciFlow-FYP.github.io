import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  myThumbnail="../../../../assets/workflowx.png";
  myFullresImage="../../../../assets/highresworkflow.png";
  constructor() { }

  ngOnInit() {
  }

}
