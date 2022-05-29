import { Component, OnInit } from '@angular/core';
import { OverviewServiceService } from '../services/overview-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overviewData: any;

  constructor(private overviewService: OverviewServiceService) { }

  ngOnInit(): void {
    this.fetchOverviewData();
  }

  fetchOverviewData() {
    this.overviewService.fetchOverviewResponse().subscribe(response => {
      if (response) {
        this.overviewData = response;
      }
    });
  }
}
