// app.component.ts
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private commonService: CommonService) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isHandset = result.matches;
    });
  }
  // Create a public getter method for commonService
  getCommonService(): CommonService {
    return this.commonService;
  }
  toggleSidebar() {
    // Implement your logic to toggle the sidebar here
  }
}
