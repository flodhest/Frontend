// excel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Excel } from './excel/excel.model';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {
    private apiUrl = 'http://localhost:7114/api/data';

    constructor(private http: HttpClient) { }

    getExcelData(): Observable<Excel[]> {
        return this.http.get<Excel[]>(`${this.apiUrl}/getExcelData`);
    }

    saveExcelData(newExcelData: Excel): Observable<any> {
        return this.http.post(`${this.apiUrl}/saveExcelData`, newExcelData);
    }

    uploadExcelTemplate(file: FormData): Observable<any> {
      return this.http.post(`${this.apiUrl}/uploadExcelTemplate`, file);
  }

  downloadExcelTemplate(): Observable<Blob> {
      return this.http.get(`${this.apiUrl}/downloadExcelTemplate`, { responseType: 'blob' });
  }
}
