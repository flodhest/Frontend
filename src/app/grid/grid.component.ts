// grid.component.ts
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  constructor(private commonService: CommonService) {}

  // Create a public getter method for commonService
  getCommonService(): CommonService {
    return this.commonService;
  }
}
