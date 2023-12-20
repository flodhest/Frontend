import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [],
  templateUrl: './section1.component.html',

})
export class Section1Component {
  constructor(private commonService: CommonService) {}

  // Create a public getter method for commonService
  getCommonService(): CommonService {
    return this.commonService;
  }
}
