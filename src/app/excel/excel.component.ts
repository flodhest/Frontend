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
  excelForm: FormGroup;
  excelData: Excel[] = [];
  templateFile: File | null = null;

  chartOptions: ChartOptions = { /* your options here */ };
  chartLegend = true;
  chartType: ChartType = 'bar'; // Replace 'bar' with your desired chart type


  constructor(private fb: FormBuilder, private excelService: ExcelService) {
    this.excelForm = this.fb.group({
      name: [''],
      excelFile: ['']
    });
  }

  ngOnInit(): void {
    this.loadExcelData();
    // Fetch and update chart data
    this.fetchChartData();
  }

  loadExcelData(): void {
    this.excelService.getExcelData().subscribe(data => {
      this.excelData = data;
    });
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.templateFile = inputElement.files[0];
    }
  }

  uploadExcelTemplate(): void {
    if (this.templateFile) {
      const formData = new FormData();
      formData.append('file', this.templateFile);

      this.excelService.uploadExcelTemplate(formData).subscribe(() => {
        // Handle success
        console.log('Excel template uploaded successfully');
      });
    }
  }

  downloadExcelTemplate(): void {
    this.excelService.downloadExcelTemplate().subscribe((data: Blob) => {
      const blob = new Blob([data]);
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'your_template_file.xlsx';
      link.click();
    });
  }

  saveNewExcelData(): void {
    const newExcelData: Excel = this.excelForm.value;
    this.excelService.saveExcelData(newExcelData).subscribe(() => {
      this.loadExcelData();
      // Update chart data after saving new Excel data
      this.fetchChartData();
    });
  }

  fetchChartData(): void {
    // Make API call or process data to update chartData and chartLabels
    // Example: this.chartData = [...];
    // Example: this.chartLabels = [...];
  }
}
