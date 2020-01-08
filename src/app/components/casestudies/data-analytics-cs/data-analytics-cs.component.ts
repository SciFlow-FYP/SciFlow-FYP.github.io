import { Component, OnInit } from '@angular/core';
//import { NgxImageZoomService } from 'ngx-imag-zoom';

@Component({
  selector: 'app-data-analytics-cs',
  templateUrl: './data-analytics-cs.component.html',
  styleUrls: ['./data-analytics-cs.component.scss']
})
export class DataAnalyticsCSComponent implements OnInit {

  myThumbnail="../../../assets/workflowx.png";
  myFullresImage="../../../assets/highresworkflow.png";

  constructor () {}

  ngOnInit() {
  }

}
