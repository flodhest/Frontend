// excel.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { Excel } from './excel.model';
import { ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }



}
