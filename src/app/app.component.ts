import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eric Flodin';

  constructor(private router: Router) {}

  downloadPdf(): void {
    // Assuming your PDF file is located in the assets folder
    const pdfPath = '/assets/eric.pdf';

    // Construct the full URL
    const pdfUrl = window.location.origin + pdfPath;

    // Open the PDF in a new tab for download
    window.open(pdfUrl, '_blank');
  }
}
