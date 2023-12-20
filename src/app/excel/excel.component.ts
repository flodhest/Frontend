import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from './guide.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from '../common.service';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss'],
})
export class ExcelComponent implements OnInit {
  sectionTitle: string = '';
  sectionContent: string = '';
  isHandset$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService,
    private breakpointObserver: BreakpointObserver,
    private commonService: CommonService
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result: { matches: boolean }) => result.matches)
    );

  }

  // Create a public getter method for commonService
  getCommonService(): CommonService {
    return this.commonService;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sectionTitle = params['title'];
      const section = this.guideService.getSection(this.sectionTitle);
      this.sectionContent = section ? section.content : '';
    });
  }
}
