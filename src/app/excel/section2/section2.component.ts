// section2.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})

export class Section2Component {

  constructor(private http: HttpClient) {}

  nodeVersion: string | undefined;

  showNodeVersion() {
    // Replace this URL with the actual API endpoint for getting the Node.js version
    const apiUrl = 'https://api.example.com/node-version';

    this.http.get<{ version: string }>(apiUrl).subscribe(
      response => {
        // Assuming the API returns a JSON object with a 'version' property
        this.nodeVersion = response.version;
      },
      error => {
        console.error('Error fetching Node.js version:', error);
        // Handle error (e.g., set a default version)
        this.nodeVersion = 'N/A';
      }
    );
  }
}
